import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Used OEM Engines With Warranty & Fast Shipping | Parts Central of Georgia",
  description:
    "Shop quality-tested used OEM engines for cars, trucks, and SUVs. Save thousands compared to dealership replacements with warranty-backed engines and nationwide shipping.",
};

const features = [
  {
    title: "Save Thousands Compared To New Engines",
    body: "Get dependable OEM engine replacements at a fraction of dealership pricing without sacrificing reliability.",
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
    body: "Most engine assemblies include warranty coverage for additional peace of mind.",
  },
  {
    title: "Fast Nationwide Shipping",
    body: "Our sourcing and logistics network helps deliver replacement engines quickly across the United States.",
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
      title="Quality Tested Used Engines With Warranty & Nationwide Shipping"
      highlightedTitle="Warranty & Nationwide Shipping"
      subtitle="Find dependable OEM engine replacements for cars, trucks, and SUVs. Every engine is inspected for quality, verified for compatibility, and backed by expert support to help get your vehicle back on the road quickly."
      heroImage="/websiteImages/bg-3.jpg"
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

      sectionTitle="OEM Engine Replacements Without Dealership Pricing"
      sectionLead="Whether you're replacing a failed engine, rebuilding a vehicle, or looking for a cost-effective alternative to a new powertrain, Parts Central helps you source quality-tested OEM engines backed by warranty coverage and expert compatibility verification."
      features={features}
      partLabel="used engines"
      heroFormClassName="-mt-40 lg:-mt-56"
      showBrandImages
    />
  );
}