"use client";

import { siteConfig } from "@/content/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    image: "https://brasayoliva.com/og-image.jpg",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle de los Olivos 123",
      addressLocality: "San José",
      addressRegion: "SJ",
      postalCode: "10101",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9281,
      longitude: -84.0907,
    },
    url: "https://brasayoliva.com",
    telephone: siteConfig.phone,
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.hours.split(" - ")[0],
      closes: h.hours.split(" - ")[1],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
