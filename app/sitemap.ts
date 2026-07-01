import type { MetadataRoute } from "next";

const siteUrl = "https://www.partscentraloftexas.com";

const routes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/used-auto-parts",
  "/used-engines",
  "/used-transmissions",
  "/privacy-policy",
  "/terms-and-conditions",
  "/shipping-policy",
  "/refund-policy",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/used-") ? 0.9 : 0.7,
  }));
}

