import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/profile";
import { LiveTenure } from "@/components/LiveTenure";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.description, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${project.name} · Project`, description: project.description } };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return <main className="wrap project-detail">
    <header className="nav"><Link className="brand" href="/#top">Atul Ganesh Rathod<b>.</b></Link><Link className="nav-back" href="/#projects"><ArrowLeft size={15}/> All projects</Link></header>
    <article>
      <section className="detail-hero"><span className="mono">PROJECT CASE STUDY · {project.period}</span><h1>{project.name}</h1><p className="lead">{project.description}</p><div className="detail-facts"><div><span className="mono">Project length</span><strong>{"startedOn" in project && project.startedOn ? <LiveTenure startedOn={project.startedOn} /> : project.tenure}</strong></div><div><span className="mono">Domain</span><strong>{"domain" in project ? project.domain : "Software quality"}</strong></div><div><span className="mono">Organization</span><Link href={`/companies/${project.company.slug}`}>{project.company.name}<ArrowUpRight size={14}/></Link></div><div><span className="mono">My role</span><strong>{project.company.slug === "bandhan-life" ? profile.role : "QA Engineer"}</strong></div></div></section>
      <section className="detail-section"><span className="mono">QA COVERAGE</span><h2>What I tested</h2><div className="coverage-list">{project.highlights.map((item) => <div className="coverage-item" key={item}><CheckCircle2 size={17} aria-hidden="true"/><span>{item}</span></div>)}</div></section>
      <section className="detail-section"><span className="mono">TOOLS & METHODS</span><h2>How I worked</h2><p>Applied the project’s testing tools and methods to verify key user flows, investigate defects, and support reliable releases.</p><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></section>
      <Link className="button primary detail-back" href="/#projects"><ArrowLeft size={15}/> Back to selected projects</Link>
    </article>
  </main>;
}

