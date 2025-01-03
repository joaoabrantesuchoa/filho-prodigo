import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import header from "@/assets/images/header.webp";

export function HomeHeader() {
  return (
    <section className="space-y-3 pb-3 pt-3 md:pb-12 md:mt-10 lg:py-10">
      <div className="container flex flex-col gap-4 items-center text-center">
        <Image src={header} alt="Header" width={500} height={400} priority />
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
  );
}
