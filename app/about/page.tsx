import React from "react";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/images/logo.webp";

export const metadata: Metadata = {
  title: "Sobre o site",
  description: "Informações sobre o site",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Sobre o site
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Image
            className="h-48 w-48"
            src={logo}
            alt="Logo"
            width={1000}
            height={1000}
            priority
          />
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.name}
          </h2>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          O site Filho Pródigo foi desenvolvido com o propósito de acolher e
          ensinar aqueles que, após um período de afastamento, decidiram
          retornar à fé católica. Ele serve como um guia espiritual para pessoas
          que desejam compreender os fundamentos e ensinamentos da Igreja
          Católica, proporcionando um espaço de aprendizado acessível, amigável
          e respeitoso. A plataforma oferece conteúdo que explora as doutrinas,
          práticas e valores essenciais do catolicismo, com o objetivo de ajudar
          os fiéis a se reconectarem com sua espiritualidade e fortalecerem sua
          caminhada de fé. Se você se encontra nesse caminho de retorno, Filho
          Pródigo é o lugar ideal para redescobrir a beleza da fé católica e
          trilhar um novo capítulo de vida com Deus.
          <p>
            Para mais informações, dúvidas ou sugestões, entre em contato
            através do e-mail{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </p>
      </div>
    </div>
  );
}
