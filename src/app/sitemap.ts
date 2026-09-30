import type { MetadataRoute } from "next";
import { companies, projects } from "@/data/profile";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return [{ url: base, lastModified: new Date() }, ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() })), ...Object.values(companies).map((company) => ({ url: `${base}/companies/${company.slug}`, lastModified: new Date() }))]; }
