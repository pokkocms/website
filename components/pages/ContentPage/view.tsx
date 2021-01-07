import * as React from "react";
import { ContentPageContentFragment } from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { Metadata } from "../../Metadata";
import { EarlyAccessBanner } from "../../modules/Banner/default";
import { Navbar } from "../../Navbar/module";
import { ModuleHandler } from "../ModularPage/view";

export type ContentPageProps = {
  entry: ContentPageContentFragment;
};

export const ContentPage: React.FC<ContentPageProps> = ({ entry }) => (
  <>
    <Metadata entry={entry} />

    <EarlyAccessBanner />
    <Navbar />

    <div className="content-page__header-container">
      <div className="content-page__header-content">
        <h1>{entry.title}</h1>
      </div>
    </div>
    <div className="content-page__body-container">
      {entry.body.map((ent, idx) => (
        <ModuleHandler key={idx} {...ent} />
      ))}
    </div>
    <Footer />
  </>
);
