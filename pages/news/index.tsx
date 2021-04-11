import * as React from "react";
import { GetStaticProps } from "next";
import { ListBlogPostsDocument, ListBlogPostsQuery } from "../../pokko/queries";
import { client, clientPreview } from "../../lib/pokko";
import { BlogList } from "../../components/pages/BlogList/view";

const NewsPage: React.FC<ListBlogPostsQuery> = (props) => {
  return <BlogList nodes={props.entries.allBlogPost.nodes} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await (context.preview
    ? clientPreview
    : client
  ).query<ListBlogPostsQuery>({
    query: ListBlogPostsDocument,
  });

  return { props: res.data, revalidate: 900 };
};

export default NewsPage;
