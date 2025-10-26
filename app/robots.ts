import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://puanaroom.com/sitemap.xml",
  };
}
