import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
title:
"Used OEM Transmissions With Warranty & Shipping Support | Parts Central of Texas",
description:
"Shop used OEM transmissions for cars, trucks, and SUVs with compatibility support, warranty terms confirmed before purchase, and shipping guidance.",
};

const features = [
{
title: "Affordable OEM Transmission Options",
body: "Used OEM transmissions can offer a practical alternative to many new replacement options while maintaining factory fitment.",
},
{
title: "OEM Compatibility Verified",
body: "We match every transmission to your vehicle's year, make, model, and drivetrain specifications before shipment.",
},
{
title: "Performance-Tested Units",
body: "Every transmission is screened and inspected to help ensure reliable operation and smooth shifting performance.",
},
{
title: "Warranty Included",
body: "Warranty coverage is reviewed before purchase so expectations are clear.",
},
{
title: "Shipping Support",
body: "Shipping options and delivery expectations are confirmed during quote review.",
},
{
title: "Expert Support From Real Specialists",
body: "Need help identifying the correct transmission? Our team assists with fitment verification before you buy.",
},
];

export default function UsedTransmissionsPage() {
return (
<ProductLandingTemplate
eyebrow="Used OEM Transmissions"


  title="Premium Quality Used OEM Transmissions"

  subtitle="Find used OEM transmission replacement options for cars, trucks, and SUVs with compatibility guidance, quote support, and warranty terms reviewed before purchase."

  heroImage="/optimized/hero-transmissions.webp"
  heroImageAlt="Used OEM transmission inventory"

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

  sectionTitle="Used OEM Transmission Replacements With Clear Support"

  sectionLead="Whether your transmission has failed completely or you are planning a replacement, Parts Central helps review available used OEM transmission options, fitment details, pricing, warranty terms, and delivery expectations."

  features={features}

  partLabel="used transmissions"

showBrandImages />
);
}
