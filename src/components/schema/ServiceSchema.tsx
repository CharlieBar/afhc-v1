// src/components/schema/ServiceSchema.tsx
// All Family Health Care — MedicalProcedure JSON-LD Schema for service pages

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    procedureType: "https://schema.org/TherapeuticProcedure",
    followup: "Follow-up visits coordinated with your physician.",
    preparation: "A physician order is required before services begin.",
    recognizingAuthority: {
      "@type": "Organization",
      name: "Centers for Medicare & Medicaid Services",
    },
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Home Health Care",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
