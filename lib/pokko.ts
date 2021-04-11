import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GetStaticPropsResult } from "next";
import intro, {
  GetPageByPathDocument,
  GetPageByPathQuery,
  GetPageByPathQueryVariables,
} from "../pokko/queries";

const config = {
  environment: process.env.POK_ENVIRONMENT!,
  project: process.env.POK_PROJECT!,
  token: process.env.POK_TOKEN!,
  tokenPreview: process.env.POK_TOKEN_PREVIEW!,
};

const options = (
  token: string
): ApolloClientOptions<NormalizedCacheObject> => ({
  cache: new InMemoryCache({
    possibleTypes: intro.possibleTypes,
  }),

  headers: {
    "X-Token": token,
  },

  uri: `https://au-syd1.pokko.io/${config.project}/${config.environment}/graphql`,
});

export const client = new ApolloClient(options(config.token));
export const clientPreview = new ApolloClient(options(config.tokenPreview));

const revalidate = 5;

export const staticPropsByPath = async (
  path: string[],
  preview: boolean
): Promise<GetStaticPropsResult<GetPageByPathQuery>> => {
  const res = await (preview ? clientPreview : client).query<
    GetPageByPathQuery,
    GetPageByPathQueryVariables
  >({
    query: GetPageByPathDocument,
    fetchPolicy: "network-only",
    variables: { path },
  });

  if (!res.data.entry) {
    return { notFound: true, revalidate };
  }

  return {
    revalidate,
    props: { entry: res.data.entry },
  };
};
