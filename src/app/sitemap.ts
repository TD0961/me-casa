import { MetadataRoute } from "next";
import { sampleProperties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me-casa.com";

  const staticPages = [
    "",
    "/properties",
    "/services",
    "/property-management",
    "/about",
    "/list-property",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const propertyPages = sampleProperties.map((prop) => ({
    url: `${baseUrl}/properties/${prop.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...propertyPages];
}

