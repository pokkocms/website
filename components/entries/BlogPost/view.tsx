import * as React from "react";
import { BlogPostContentFragment } from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { Metadata } from "../../Metadata";
import { EarlyAccessBanner } from "../../modules/Banner/default";
import { Navbar } from "../../Navbar/module";
import { ModuleHandler } from "../ModularPage/view";

export type BlogPostProps = {
  entry: BlogPostContentFragment;
};

export const BlogPost: React.FC<BlogPostProps> = ({ entry }) => (
  <>
    <Metadata entry={entry} />

    <Navbar />
    <EarlyAccessBanner />
    <div className="blog-post__header-container">
      <div className="blog-post__header-content">
        <h1>{entry.title}</h1>
        <time>
          {new Date(entry.date).toLocaleDateString(undefined, {
            year: "numeric",
            day: "numeric",
            month: "long",
          })}
        </time>
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
