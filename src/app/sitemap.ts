import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/services/ai",
  "/services/oracle-erp",
  "/services/consulting",
  "/services/app-development",
  "/industries",
  "/approach",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/services") ? 0.8 : 0.6,
  }));
}
