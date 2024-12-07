import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestsPosts() {
  const latestPosts = getBlogPosts();

  return (
    <>
      <h1>Publicados recentemente</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          return (
            <article key={post.slug} className="text-wrap max-w-md my-10">
              <Link href={"0"}>
                <h5 className="font-bold py-2 leading-5 hover:text-blue-400">
                  {post.metadata.summary}
                </h5>
              </Link>
              <p className="leading-8 my-5">{post.metadata.summary}</p>
              <p className="text-sm text-muted-foreground">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </article>
          );
        })}
    </>
  );
}
