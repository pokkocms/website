import * as React from "react";
import { GetStaticProps } from "next";
import { ListBlogPostsDocument, ListBlogPostsQuery } from "../../pokko/queries";
import { client } from "../../lib/pokko";
import { BlogList } from "../../components/pages/BlogList/view";

const NewsPage: React.FC<ListBlogPostsQuery> = (props) => {
  return <BlogList nodes={props.entries.allBlogPost.nodes} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query<ListBlogPostsQuery>({
    query: ListBlogPostsDocument,
  });

  return { props: res.data, revalidate: 3600 };
};

export default NewsPage;
