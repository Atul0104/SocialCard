import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { companies, experience, projects } from "@/data/profile";

const allCompanies = Object.values(companies);
type CompanyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return allCompanies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = allCompanies.find((item) => item.slug === slug);
  return company ? { title: company.name, description: company.overview, alternates: { canonical: `/companies/${company.slug}` } } : { title: "Company not found" };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = allCompanies.find((item) => item.slug === slug);
  if (!company) notFound();
  const roles = experience.filter((item) => item.company.slug === company.slug);
  const work = projects.filter((item) => item.company.slug === company.slug);
  const clientProjects = experience.flatMap((role) => role.engagements.filter((engagement) => "client" in engagement && engagement.client && typeof engagement.client === "object" && "slug" in engagement.client && engagement.client.slug === company.slug).map((engagement) => ({ ...engagement, employer: role.company.name })));

  return <main className="wrap company-detail">
    <header className="nav"><Link className="brand" href="/#top">Atul Ganesh Rathod<b>.</b></Link><Link className="nav-back" href="/#experience"><ArrowLeft size={15}/> My experience</Link></header>
    <article>
      <section className="company-hero">
        <div><span className="mono">ORGANIZATION PROFILE</span><h1>{company.name}</h1><p className="lead">{company.overview}</p><a className="button" href={company.url} target="_blank" rel="noopener noreferrer">Official website <ArrowUpRight size={15}/></a></div>
        <div className="company-visual">{company.image ? <Image src={company.image} alt={`${company.name} official company visual`} fill sizes="(max-width: 760px) 90vw, 38vw" unoptimized priority /> : <div className="company-monogram" aria-label={`${company.name} visual identity`}>P<span>-</span></div>}<span className="company-visual-caption">{company.name}</span></div>
      </section>
      <section className="detail-section"><span className="mono">ABOUT THE ORGANIZATION</span><h2>What they do</h2><p>{company.overview}</p><div className="coverage-list">{company.highlights.map((item) => <div className="coverage-item" key={item}><CheckCircle2 size={17} aria-hidden="true"/><span>{item}</span></div>)}</div><a className="source-link" href={company.source} target="_blank" rel="noopener noreferrer">Organization information - official source <ArrowUpRight size={13}/></a></section>
      <section className="detail-section"><span className="mono">MY EXPERIENCE</span><h2>My work with {company.name}</h2>
        {roles.length || clientProjects.length ? <div className="company-work-list">
          {roles.map((role) => <article className="company-work-card" key={role.company.slug}><div className="company-work-heading"><h3>{role.role}</h3><span className="date-pill mono">{role.dates}</span></div><p>{role.tenure === "live" ? "Current position" : `Time with the organization: ${role.tenure}`}</p>{role.engagements.map((engagement) => <div className="company-engagement" key={engagement.project}><strong>{engagement.project}</strong><span>{engagement.period} - {engagement.tenure}</span>{"domain" in engagement && <span className="domain-pill">{engagement.domain}</span>}<p>{engagement.detail}</p><div className="tags">{engagement.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></div>)}</article>)}
          {clientProjects.map((engagement) => <article className="company-work-card" key={`${engagement.project}-${engagement.employer}`}><div className="company-work-heading"><h3>{engagement.project}</h3><span className="date-pill mono">Client project</span></div><p>Delivered during my role at {engagement.employer} - {engagement.period} - {engagement.tenure}</p><p>{engagement.detail}</p><div className="tags">{engagement.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></article>)}
          {work.map((project) => <article className="company-work-card" key={project.slug}><div className="company-work-heading"><h3>{project.name}</h3><span className="date-pill mono">{project.period}</span></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><Link className="project-action" href={`/projects/${project.slug}`}>Read project details <ArrowUpRight size={15}/></Link></article>)}
        </div> : <div className="company-work-card"><p>This organization is part of the company and client history on my portfolio.</p></div>}
      </section>
      <Link className="button primary detail-back" href="/#experience"><ArrowLeft size={15}/> Back to my experience</Link>
    </article>
  </main>;
}


