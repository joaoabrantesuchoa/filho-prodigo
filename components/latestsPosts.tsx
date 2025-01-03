export type Post = {
  published: boolean;
  slug: string;
  title: string;
  date: string;
  body: string;
  description?: string;
  tags?: string[];
};

export type LatestPostsProps = {
  posts: Post[];
};

import React from "react";
import { PostItem } from "./post-item";

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
        Últimos Posts
      </h2>
      <ul className="flex flex-col">
        {posts.map(
          (post) =>
            post.published && (
              <li
                key={post.slug}
                className="first:border-t first:border-border"
              >
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
            )
        )}
      </ul>
    </section>
  );
};

export default LatestPosts;
