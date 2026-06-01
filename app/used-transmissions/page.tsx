import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
title:
"Used OEM Transmissions With Warranty & Fast Shipping | Parts Central of Georgia",
description:
"Shop quality-tested used OEM transmissions for cars, trucks, and SUVs. Save thousands compared to dealership replacement costs with warranty-backed units and nationwide shipping.",
};

const features = [
{
title: "Save Thousands Compared To New Replacements",
body: "Used OEM transmissions offer a cost-effective alternative to expensive dealership replacements while maintaining dependable performance.",
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
body: "Most transmission assemblies include warranty coverage for additional confidence and peace of mind.",
},
{
title: "Fast Nationwide Shipping",
body: "Our logistics network helps get your replacement transmission delivered quickly anywhere in the United States.",
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


  title="Quality Tested Used Transmissions With Warranty & Nationwide Shipping"

  subtitle="Find dependable OEM transmission replacements for cars, trucks, and SUVs. Every unit is inspected for quality, verified for compatibility, and backed by expert support so you can get back on the road with confidence."

  heroImage="/websiteImages/bg-2.jpg"
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

  heroContentClassName="-translate-y-2 sm:-translate-y-4"

  sectionTitle="OEM Transmission Replacements Without Dealership Pricing"

  sectionLead="Whether your transmission has failed completely or you're planning a replacement before major damage occurs, Parts Central helps you source quality-tested OEM transmissions with transparent pricing, warranty protection, and expert compatibility verification."

  features={features}

  partLabel="used transmissions"

  heroFormClassName="-mt-40 lg:-mt-56"

showBrandImages />
);
}