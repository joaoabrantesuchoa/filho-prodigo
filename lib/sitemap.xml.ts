import { posts } from "#site/content";

export default function Sitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map(
          (post) => `
        <url>
          <loc>https://seusite.com/posts/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;
}
