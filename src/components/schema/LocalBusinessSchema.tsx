// src/components/schema/LocalBusinessSchema.tsx
// All Family Health Care — LocalBusiness / MedicalBusiness JSON-LD Schema
// Renders on every page via root layout

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@id": "https://www.allfamilyhealthcare.com/#organization",
    "@type": ["LocalBusiness", "MedicalBusiness", "HomeHealthCare"],
    name: "All Family Health Care",
    url: "https://www.allfamilyhealthcare.com",
    telephone: "(773) 775-2588",
    email: "admin@allfhc.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6413 N Kinzue Ave, Suite 2",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60646",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9967,
      longitude: -87.7476,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    hasCredential: [
      "Joint Commission Accreditation",
      "Medicare Certification",
    ],
    areaServed: [
      { "@type": "City", name: "Edgebrook" },
      { "@type": "City", name: "Sauganash" },
      { "@type": "City", name: "Jefferson Park" },
      { "@type": "City", name: "Norwood Park" },
      { "@type": "City", name: "Forest Glen" },
      { "@type": "City", name: "Lincoln Square" },
      { "@type": "City", name: "Ravenswood" },
      { "@type": "City", name: "Rogers Park" },
      { "@type": "City", name: "Andersonville" },
      { "@type": "City", name: "Uptown" },
      { "@type": "City", name: "Lincoln Park" },
      { "@type": "City", name: "Lakeview" },
      { "@type": "City", name: "Irving Park" },
      { "@type": "City", name: "Portage Park" },
      { "@type": "City", name: "Dunning" },
      { "@type": "City", name: "Montclare" },
      { "@type": "City", name: "Belmont Cragin" },
      { "@type": "City", name: "Hermosa" },
      { "@type": "City", name: "Humboldt Park" },
      { "@type": "City", name: "Park Ridge" },
      { "@type": "City", name: "Skokie" },
      { "@type": "City", name: "Des Plaines" },
      { "@type": "City", name: "Evanston" },
      { "@type": "City", name: "Glenview" },
      { "@type": "City", name: "Niles" },
      { "@type": "City", name: "Morton Grove" },
      { "@type": "City", name: "Lincolnwood" },
      { "@type": "City", name: "Rosemont" },
      { "@type": "City", name: "Harwood Heights" },
      { "@type": "City", name: "Elmwood Park" },
      { "@type": "City", name: "Chicago" },
    ],
    sameAs: [
      "https://www.google.com/maps/place/All+Family+Health+Care/@41.9967,-87.7476,17z",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
