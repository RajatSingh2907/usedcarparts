import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Used OEM Auto Parts With Warranty & Fast Shipping | Parts Central of Georgia",
  description:
    "Find quality-tested used OEM auto parts for cars, trucks, and SUVs. Save up to 70% compared to dealership pricing with warranty-backed parts, expert fitment support, and fast nationwide shipping.",
};

const features = [
  {
    title: "Up To 70% Less Than Dealership Pricing",
    body: "Get dependable OEM replacement parts at a fraction of dealership costs without compromising on quality or reliability.",
  },
  {
    title: "OEM Fitment Verified",
    body: "Every quote is reviewed by our specialists to ensure proper year, make, model, and trim compatibility.",
  },
  {
    title: "Warranty Included",
    body: "Most parts include warranty coverage for added confidence and long-term peace of mind.",
  },
  {
    title: "Fast Nationwide Shipping",
    body: "We process and ship parts quickly across the United States to reduce vehicle downtime.",
  },
  {
    title: "Access To Rare & Discontinued Parts",
    body: "Our nationwide inventory network helps locate hard-to-find OEM components that dealerships often cannot source.",
  },
  {
    title: "Expert Support From Real Specialists",
    body: "Our team helps identify the correct replacement part and answers fitment questions before you buy.",
  },
];

export default function UsedAutoPartsPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used OEM Auto Parts"

      title="Quality Tested Used OEM Parts With Warranty & Fast Nationwide Shipping"

      subtitle="Save money without sacrificing quality. We help drivers, repair shops, and dealerships source inspected OEM auto parts backed by warranty coverage, expert fitment verification, and fast delivery anywhere in the United States."

      heroImage="/websiteImages/bg-1.jpg"
      heroImageAlt="Used OEM auto parts inventory"

      heroTintClass="
bg-[linear-gradient(
90deg,
rgba(255,255,255,0.96)_0%,
rgba(255,255,255,0.92)_25%,
rgba(255,255,255,0.75)_50%,
rgba(255,255,255,0.20)_75%,
rgba(255,255,255,0)_100%
)]
"
      sectionTitle="OEM Quality Without Dealership Pricing"

      sectionLead="Whether you're replacing a failed component, repairing collision damage, or restoring vehicle performance, Parts Central provides reliable OEM auto parts at competitive prices. Every inquiry is reviewed for compatibility so you can order with confidence."

      features={features}

      partLabel="used auto parts"

      heroFormClassName="-mt-40 lg:-mt-56"

      showBrandImages
    />
  );
}