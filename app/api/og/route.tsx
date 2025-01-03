import React from "react";
import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div className="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div className="flex items-center">
            <Image
              src="assets\images\logo.jpg"
              alt="Example image"
              width={500}
              height={300}
            />
            <p className="ml-2 font-bold text-2xl">O Filho Pródigo</p>
          </div>
          <div className="flex flex-col flex-1 py-10">
            <div className="flex text-xl uppercase font-bold tracking-tight">
              BLOG POST
            </div>
            <div className="flex text-[80px] font-bold">{heading}</div>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex text-xl">{siteConfig.url}</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch {
    return new Response("Failed to generate image", { status: 500 });
  }
}
