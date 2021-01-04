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
} from "../api/queries";

const config = {
  environment: process.env.POK_ENVIRONMENT!,
  project: process.env.POK_PROJECT!,
  token: process.env.POK_TOKEN!,
};

const options: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache({
    possibleTypes: intro.possibleTypes,
  }),

  headers: {
    "X-Token": config.token,
  },

  uri: `https://au-syd1.pokko.io/${config.project}/${config.environment}/graphql`,
};

export const client = new ApolloClient(options);

export const staticPropsByPath = async (
  path: string[]
): Promise<GetStaticPropsResult<GetPageByPathQuery>> => {
  const res = await client.query<
    GetPageByPathQuery,
    GetPageByPathQueryVariables
  >({
    query: GetPageByPathDocument,
    fetchPolicy: "network-only",
    variables: { path },
  });

  return {
    revalidate: 5,
    props: { entry: res.data.entry },
  };
};
