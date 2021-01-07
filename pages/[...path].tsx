import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client, staticPropsByPath } from "../lib/pokko";
import {
  GetDynamicPagePathsDocument,
  GetDynamicPagePathsQuery,
  GetPageByPathQuery,
} from "../pokko/queries";
import { ModularPage } from "../components/pages/ModularPage/view";
import { BlogPost } from "../components/pages/BlogPost/view";
import { ContentPage } from "../components/pages/ContentPage/view";

export const DynamicPage: React.FC<GetPageByPathQuery> = ({ entry }) => {
  switch (entry.__typename) {
    case "ModularPage":
      return <ModularPage entry={entry} />;
    case "BlogPost":
      return <BlogPost entry={entry} />;
    case "ContentPage":
      return <ContentPage entry={entry} />;
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
      .filter((ent) => Boolean(ent.entryId))
      .map((ent) => ({
        params: { path: ent.path! },
      }))
      .filter((ent) => ent.params.path.length > 0),
    fallback: false,
  };
};

export default DynamicPage;
