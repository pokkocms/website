import * as React from "react";
import { GetStaticProps } from "next";
import { staticPropsByPath } from "../lib/pokko";
import { GetPageByPathQuery } from "../pokko/queries";
import { DynamicPage } from "./[...path]";

const Home: React.FC<GetPageByPathQuery> = ({ entry }) => {
  return <DynamicPage entry={entry} />;
};

export const getStaticProps: GetStaticProps = async (context) =>
  await staticPropsByPath(["website", "home"], context.preview);

export default Home;
