import * as React from "react";
import Head from "next/head";
import { Metadata } from "../components/Metadata";
import { GetStaticProps } from "next";
import { client } from "../lib/pokko";
import {
  GetHomeDocument,
  GetHomeQuery,
  HomeModuleFragment,
} from "../api/queries";
import { HeroModule } from "../components/modules/Hero/module";
import { FeatureTilesModule } from "../components/modules/FeatureTiles/module";
import { IconTilesModule } from "../components/modules/IconTiles/module";
import { ResourceTileModule } from "../components/modules/ResourceTile/module";
import { EarlyAccessFormModule } from "../components/modules/EarlyAccessForm/module";

const Home: React.FC<GetHomeQuery> = ({ entry }) =>
  entry.__typename === "ModularPage" ? (
    <>
      <Head>
        <title>Pokko - Content made better</title>
        <Metadata />
      </Head>
      {entry.body.map((ent, idx) => (
        <HomeModuleHandler key={idx} {...ent} />
      ))}
    </>
  ) : null;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query<GetHomeQuery>({
    query: GetHomeDocument,
    fetchPolicy: "network-only",
  });

  return {
    revalidate: 5,
    props: { entry: res.data.entry },
  };
};

export default Home;

const HomeModuleHandler: React.FC<HomeModuleFragment> = ({
  __typename,
  ...rest
}) => {
  switch (__typename) {
    case "Hero":
      return <HeroModule {...(rest as any)} />;
    case "IconTiles":
      return <IconTilesModule {...(rest as any)} />;
    case "FeatureTiles":
      return <FeatureTilesModule {...(rest as any)} />;
    case "ResourceTiles":
      return <ResourceTileModule {...(rest as any)} />;
    case "EarlyAccessForm":
      return <EarlyAccessFormModule {...(rest as any)} />;
    default:
      return (
        <pre>
          unhandled module: {__typename} - {JSON.stringify(rest)}
        </pre>
      );
  }
};
