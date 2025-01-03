import React from "react";
import dynamic from "next/dynamic";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";

const HomeHeader = dynamic(
  () => import("@/components/homeHeader").then((mod) => mod.default),
  { ssr: false }
);
const LatestPosts = dynamic(
  () => import("@/components/latestsPosts").then((mod) => mod.default),
  { ssr: false }
);

export default async function Home() {
  const latestPosts = (await sortPosts(posts)).slice(0, 5);

  return (
    <>
      <HomeHeader />
      <LatestPosts posts={latestPosts} />
    </>
  );
}
