import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { CaseStudyContent } from "@/components/shared/case-study-content";
import { BreadcrumbsJsonLd, CaseStudyJsonLd } from "@/components/shared/json-ld";
import { notFound } from "next/navigation";

const SITE_URL = "https://nataliaduran.dev";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `${SITE_URL}/work/${slug}/`;
  const imageUrl = `${SITE_URL}${project.image}`;
  return {
    title: project.title.en,
    description: project.subtitle.en,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title.en} — Natalia Durán Oliva`,
      description: project.subtitle.en,
      url,
      images: [
        {
          url: imageUrl,
          alt: project.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title.en} — Natalia Durán Oliva`,
      description: project.subtitle.en,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const url = `${SITE_URL}/work/${slug}/`;
  const imageUrl = `${SITE_URL}${project.image}`;

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Projects", url: `${SITE_URL}/work/` },
          { name: project.title.en, url },
        ]}
      />
      <CaseStudyJsonLd
        title={project.title.en}
        description={project.description.en}
        url={url}
        image={imageUrl}
        category={project.category.en}
        technologies={project.technologies}
        year={project.year}
        publisher={project.company}
      />
      <CaseStudyContent slug={slug} />
    </>
  );
}
