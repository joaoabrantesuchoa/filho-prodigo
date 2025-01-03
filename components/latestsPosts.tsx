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

export const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
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
                <article className="py-4 border-b">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground">{post.description}</p>
                </article>
              </li>
            )
        )}
      </ul>
    </section>
  );
};
