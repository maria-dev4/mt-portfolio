import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} | Maria` : "Project not found" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="detail wrap">
      <Link href="/#projects" className="back">Back to projects</Link>
      <h1>{project.name}</h1>
      <img src={project.image} alt={`Screenshot of ${project.name}`} />

      <h2>Description</h2>
      <p>{project.description}</p>

      <h2>Main technology stack</h2>
      <ul className="chips">
        {project.stack.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <h2>Links</h2>
      <div className="actions">
        <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">Live project</a>
        <a className="btn" href={project.github} target="_blank" rel="noreferrer">GitHub repository</a>
      </div>

      <h2>Challenges I faced</h2>
      <ul className="points">
        {project.challenges.map((c) => <li key={c}>{c}</li>)}
      </ul>

      <h2>Future plans</h2>
      <ul className="points">
        {project.future.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </main>
  );
}
