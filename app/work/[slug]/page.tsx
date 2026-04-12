import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { CaseStudyContent } from "@/components/shared/case-study-content";
import { notFound } from "next/navigation";

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
  return {
    title: project.title.en,
    description: project.subtitle.en,
    openGraph: { images: [{ url: project.image }] },
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

  return <CaseStudyContent slug={slug} />;
}
