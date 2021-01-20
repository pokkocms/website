import * as React from "react";
import { BlogPostContentFragment } from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { Metadata } from "../../Metadata";
import { EarlyAccessBanner } from "../../modules/Banner/default";
import { Navbar } from "../../Navbar/module";
import { locale } from "../../util";
import { ModuleHandler } from "../ModularPage/view";

export type BlogPostProps = {
  entry: BlogPostContentFragment;
};

export const BlogPost: React.FC<BlogPostProps> = ({ entry }) => (
  <>
    <Metadata entry={entry} />

    <EarlyAccessBanner />
    <Navbar />

    <div className="blog-post__header-container">
      <div className="blog-post__header-content">
        <time>
          {new Date(entry.date).toLocaleDateString(locale, {
            year: "numeric",
            day: "numeric",
            month: "long",
          })}
        </time>
        <h1>{entry.title}</h1>
      </div>
    </div>
    <div className="blog-post__body-container">
      {entry.body.map((ent, idx) => (
        <ModuleHandler key={idx} {...ent} />
      ))}
    </div>
    <Footer />
  </>
);
