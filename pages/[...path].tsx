import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client, staticPropsByPath } from "../lib/pokko";
import intro, {
  GetDynamicPagePathsDocument,
  GetDynamicPagePathsQuery,
  GetPageByPathQuery,
  ModularPageContentFragment,
} from "../api/queries";
import { ModularPage } from "../components/entries/ModularPage/view";

export const DynamicPage: React.FC<GetPageByPathQuery> = ({ entry }) => {
  if (intro.possibleTypes["IModularPage"].includes(entry.__typename)) {
    return <ModularPage entry={entry as ModularPageContentFragment} />;
  }

  return null;
};

export const getStaticProps: GetStaticProps<any, { path: string[] }> = async (
  context
) =>
  await staticPropsByPath([
    "website",
    "home",
    ...(context.params.path as string[]),
  ]);

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.query<GetDynamicPagePathsQuery>({
    query: GetDynamicPagePathsDocument,
    fetchPolicy: "network-only",
  });

  return {
    paths: res.data.taxonomy.nodes
      .map((ent) => ({
        params: { path: ent.path! },
      }))
      .filter((ent) => ent.params.path.length > 0),
    fallback: false,
  };
};

export default DynamicPage;
