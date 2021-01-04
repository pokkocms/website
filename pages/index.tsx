import * as React from "react";
import { GetStaticProps } from "next";
import { staticPropsByPath } from "../lib/pokko";
import { GetPageByPathQuery } from "../api/queries";
import { DynamicPage } from "./[...path]";

const Home: React.FC<GetPageByPathQuery> = ({ entry }) => {
  return <DynamicPage entry={entry} />;
};

export const getStaticProps: GetStaticProps = async () =>
  await staticPropsByPath(["website", "home"]);

export default Home;
