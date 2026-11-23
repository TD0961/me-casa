import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sampleProperties } from "@/data/properties";
import { PropertyDetailView } from "@/components/property/PropertyDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleProperties.map((prop) => ({
    slug: prop.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = sampleProperties.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found | me-casa",
    };
  }

  return {
    title: `${property.title} — ${property.category}`,
    description: property.tagline,
    openGraph: {
      title: `${property.title} | me-casa Real Estate`,
      description: property.tagline,
      images: [
        {
          url: property.images[0].url,
          width: 1200,
          height: 800,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = sampleProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const similarProperties = sampleProperties
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <PropertyDetailView
      property={property}
      similarProperties={similarProperties}
    />
  );
}

