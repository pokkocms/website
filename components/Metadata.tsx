import Head from "next/head";
import { MetadataContentFragment } from "../pokko/queries";

export type MetadataProps = {
  entry: MetadataContentFragment;
};

export const Metadata: React.FC<MetadataProps> = ({ entry }) => (
  <MetadataRaw {...entry} />
);

export type MetadataRawProps = {
  metaDescription?: string;
  metaTitle?: string;
  metaImage?: { url?: string };
};

export const MetadataRaw: React.FC<MetadataRawProps> = ({
  metaTitle,
  metaDescription,
  metaImage,
}) => (
  <Head>
    <title>{metaTitle}</title>
    <meta name="description" content={metaDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={metaDescription} />
    {metaImage ? <meta property="og:image" content={metaImage.url} /> : null}
    <meta property="og:url" content="https://www.pokko.io/" />
    <meta property="og:site_name" content="Pokko" />
  </Head>
);
