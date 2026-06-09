import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Used OEM Auto Parts With Warranty & Shipping Support | Parts Central of Georgia",
  description:
    "Find quality-tested used OEM auto parts for cars, trucks, and SUVs with warranty terms, expert fitment support, and free shipping within the contiguous 48 states when confirmed in your quote.",
};

const features = [
  {
    title: "Affordable OEM Replacement Options",
    body: "Used OEM parts can offer strong value compared with new replacement options while preserving factory fitment.",
  },
  {
    title: "OEM Fitment Verified",
    body: "Every quote is reviewed by our specialists to ensure proper year, make, model, and trim compatibility.",
  },
  {
    title: "Warranty Included",
    body: "Warranty terms are reviewed before purchase so you know what is covered and how support works.",
  },
  {
    title: "Free Shipping Support",
    body: "Free shipping is available within the contiguous 48 states when confirmed in your quote or invoice.",
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

      title="Premium Quality Used OEM Auto Parts"

      subtitle="Affordable, trusted replacements for every make and model. We help drivers, repair shops, and dealerships source used OEM parts with fitment support, clear quote details, and shipping guidance."

      heroImage="/optimized/hero-auto-parts.webp"
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
      sectionTitle="Used OEM Auto Parts You Can Trust"

      sectionLead="When your car needs a replacement, you should not have to guess about quality or overpay. Parts Central of Georgia helps make buying used OEM auto parts simple, clear, and practical."

      features={features}

      partLabel="used auto parts"

      showBrandImages
    />
  );
}
