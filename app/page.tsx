import { buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import header from "@/assets/images/header.png";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-3 pt-3 md:pb-12 md:mt-10 lg:py-10">
        <div className="container flex flex-col gap-4 items-center text-center">
          <Image
            src={header}
            alt="Header"
            width={500}
            height={400}
            priority
          />

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            O Filho Pródigo
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            O Filho Pródigo foi criado para as pessoas que se distanciaram da fé
            durante a vida e que após muito tempo retornaram à ela e assim,
            desejam aprender os ensinamentos da Santa Igreja Católica.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Ver postagens
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Últimos Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
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
    </>
  );
}
