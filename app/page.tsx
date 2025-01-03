import React from "react";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { HomeHeader } from "@/components/homeHeader";
import { LatestPosts } from "@/components/latestsPosts";

export default async function Home() {
  const latestPosts = (await sortPosts(posts)).slice(0, 5);

  return (
    <>
      <HomeHeader></HomeHeader>
      <LatestPosts posts={latestPosts} />
    </>
  );
}
