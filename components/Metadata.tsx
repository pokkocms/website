import Head from "next/head";
import { MetadataContentFragment } from "../pokko/queries";

export type MetadataProps = {
  entry: MetadataContentFragment;
};

export const Metadata: React.FC<MetadataProps> = ({ entry }) => (
  <Head>
    <title>{entry.metaTitle}</title>
    <meta name="description" content={entry.metaDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={entry.metaTitle} />
    <meta property="og:description" content={entry.metaDescription} />
    <meta
      property="og:image"
      content="https://cdn.pokko.io/p/pokko-sharing.png"
    />
    <meta property="og:url" content="https://www.pokko.io/" />
    <meta property="og:site_name" content="Pokko" />
  </Head>
);
