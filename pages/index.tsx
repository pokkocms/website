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
import { Banner } from "../components/modules/Banner/module";
import { Footer } from "../components/Footer/module";

const Home: React.FC<GetHomeQuery> = ({ entry }) =>
  entry.__typename === "ModularPage" ? (
    <>
      <Head>
        <title>Pokko - Content made better</title>
        <Metadata />
      </Head>
      <Banner
        icon={
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71999 1.80007C9.3054 1.79601 8.89104 1.94989 8.5746 2.26653L5.87461 4.9682C5.24173 5.60147 5.24173 6.62713 5.87461 7.2604L6.95461 8.34107L2.70001 12.5983V15.3H5.4V13.679H7.02V12.058H8.63999L9.6546 11.0427L10.7346 12.1234C11.3675 12.7567 12.3925 12.7567 13.0254 12.1234L15.7254 9.42174C16.3582 8.78847 16.3582 7.76227 15.7254 7.12954L10.8654 2.28236C10.5489 1.96572 10.1346 1.80412 9.71999 1.80007ZM10.8 4.4933C10.9381 4.4933 11.0762 4.54596 11.1818 4.6516L13.3418 6.81294C13.5529 7.02421 13.5529 7.36573 13.3418 7.577C13.2365 7.68237 13.0982 7.7353 12.96 7.7353C12.8217 7.7353 12.6835 7.68237 12.5782 7.577L10.4182 5.41566C10.207 5.20439 10.207 4.86287 10.4182 4.6516C10.5238 4.54596 10.6619 4.4933 10.8 4.4933Z"
              fill="black"
            />
          </svg>
        }
        body="Early access is now open!"
      />
      {entry.body.map((ent, idx) => (
        <HomeModuleHandler key={idx} {...ent} />
      ))}
      <Footer />
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
