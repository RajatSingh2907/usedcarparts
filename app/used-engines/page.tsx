import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Used OEM Engines With Warranty & Shipping Support | Parts Central of Texas",
  description:
    "Shop used OEM engines for cars, trucks, and SUVs with fitment support, warranty terms confirmed before purchase, and shipping guidance.",
};

const features = [
  {
    title: "Affordable OEM Engine Options",
    body: "Used OEM engines can provide a practical replacement option compared with many new engine alternatives.",
  },
  {
    title: "OEM Compatibility Verified",
    body: "We verify year, make, model, engine size, and fitment details before your order is finalized.",
  },
  {
    title: "Quality-Tested Engine Assemblies",
    body: "Each available engine is inspected and evaluated to help ensure dependable long-term performance.",
  },
  {
    title: "Warranty Included",
    body: "Warranty coverage is reviewed with your quote so you know the terms before purchase.",
  },
  {
    title: "Shipping Support",
    body: "Freight and delivery details are confirmed during quoting, with free shipping available within the contiguous 48 states when applicable.",
  },
  {
    title: "Expert Assistance Throughout The Process",
    body: "Our specialists help identify the correct replacement engine and answer compatibility questions before purchase.",
  },
];

export default function UsedEnginesPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used OEM Engines"
      title="Premium Quality Used OEM Engines"
      subtitle="Find used OEM engine replacement options for cars, trucks, and SUVs with fitment guidance, quote support, and warranty terms reviewed before purchase."
      heroImage="/optimized/hero-engines.webp"
      heroImageAlt="Used OEM engine inventory"

      /* ✅ FIXED: LIGHT + DARK MODE SAFE OVERLAY */
      heroTintClass="
        bg-[linear-gradient(
          90deg,
          rgba(255,255,255,0.96)_0%,
          rgba(255,255,255,0.90)_25%,
          rgba(255,255,255,0.70)_50%,
          rgba(15,23,42,0.25)_80%,
          rgba(15,23,42,0.70)_100%
        )]
        dark:bg-[linear-gradient(
          120deg,
          rgba(2,6,23,0.95),
          rgba(15,23,42,0.88),
          rgba(249,115,22,0.18)
        )]
      "

      sectionTitle="Used OEM Engine Replacements With Clear Quote Support"
      sectionLead="Whether you are replacing a failed engine or planning a repair, Parts Central helps review available used OEM engine options, compatibility details, warranty terms, and delivery expectations."
      features={features}
      partLabel="used engines"
      showBrandImages
    />
  );
}
