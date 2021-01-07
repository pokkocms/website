import Link from "next/link";
import * as React from "react";
import { BlogPostListingFragment } from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { MetadataRaw } from "../../Metadata";
import { EarlyAccessBanner } from "../../modules/Banner/default";
import { Navbar } from "../../Navbar/module";

export type BlogListProps = {
  listing: BlogPostListingFragment;
};

export const BlogList: React.FC<BlogPostListingFragment> = ({ nodes }) => (
  <>
    <MetadataRaw
      metaTitle="News - Pokko"
      metaDescription="From the Pokko news desk"
    />

    <EarlyAccessBanner />
    <Navbar />

    <div className="blog-list__header-container">
      <div className="blog-list__header-content">
        <h1>From the blog...</h1>
      </div>
    </div>
    <div className="blog-list__body-container">
      <ul>
        {nodes.map((ent) => (
          <li>
            <Link href={ent.pokko.path.slice(2).join("/")}>
              <a>{ent.title}</a>
            </Link>
            <p>{ent.summary}</p>
            <time>
              {new Date(ent.date).toLocaleDateString(undefined, {
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
            </time>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
  </>
);
