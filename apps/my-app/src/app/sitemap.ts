import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://a-one-housing.com",
      lastModified: new Date(),
    },
  ];
}
