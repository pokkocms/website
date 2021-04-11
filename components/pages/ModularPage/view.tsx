import * as React from "react";
import {
  ModularPageBodyFragment,
  ModularPageContentFragment,
} from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { Metadata } from "../../Metadata";
import { EarlyAccessBanner } from "../../modules/Banner/default";
import { EarlyAccessFormModule } from "../../modules/EarlyAccessForm/module";
import { FeatureTilesModule } from "../../modules/FeatureTiles/module";
import { HeroModule } from "../../modules/Hero/module";
import { IconTilesModule } from "../../modules/IconTiles/module";
import { ImageModule } from "../../modules/Image/module";
import { ResourceTileModule } from "../../modules/ResourceTile/module";
import { RichTextModule } from "../../modules/RichText/module";

export type ModularPageProps = {
  entry: ModularPageContentFragment;
};

export const ModularPage: React.FC<ModularPageProps> = ({ entry }) => (
  <>
    <Metadata entry={entry} />

    <EarlyAccessBanner />

    {entry.body.map((ent, idx) => (
      <ModuleHandler key={idx} {...ent} />
    ))}
    <Footer />
  </>
);

export const ModuleHandler: React.FC<ModularPageBodyFragment> = (props) => {
  switch (props.__typename) {
    case "Hero":
      return <HeroModule {...props} />;
    case "IconTiles":
      return <IconTilesModule {...props} />;
    case "FeatureTiles":
      return <FeatureTilesModule {...props} />;
    case "ResourceTiles":
      return <ResourceTileModule {...props} />;
    case "EarlyAccessForm":
      return <EarlyAccessFormModule {...props} />;
    case "RichText":
      return <RichTextModule {...props} />;
    case "Image":
      return <ImageModule {...props} />;
    default:
      return (
        <pre>
          unhandled module: {props.__typename} - {JSON.stringify(props)}
        </pre>
      );
  }
};
