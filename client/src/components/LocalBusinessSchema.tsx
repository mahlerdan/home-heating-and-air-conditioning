import React from "react";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Home Heating & Air Conditioning",
    "image": "https://gohomeheating.com/wp-content/uploads/2021/04/logo.png",
    "@id": "https://gohomeheating.com/#hvac-business",
    "url": "https://gohomeheating.com",
    "telephone": "+12087321211",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "326 Main St N",
      "addressLocality": "Kimberly",
      "addressRegion": "ID",
      "postalCode": "83341",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.5332,
      "longitude": -114.3464
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Twin Falls"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kimberly"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Magic Valley"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1244"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
