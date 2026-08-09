import Link from 'next/link'

// This page exists purely to demonstrate file-based routing: this
// file living at app/projects/page.js is the entire implementation
// of the /projects route. No router setup, no route config file.
export const metadata = {
  title: 'Projects — Sulagna Ghosh',
  description: 'A few things I have built.',
}

const projects = [
  {
    id: 'portfolio-three-ways',
    title: 'This portfolio, three ways',
    description:
      'The same site rebuilt in HTML/CSS/JS, React, and Next.js, as a teaching tool for a frontend workshop.',
  },
  {
    id: 'project-two',
    title: 'Your next project',
    description: 'Describe a project you have built here.',
  },
]

export default function Projects() {
  return (
    <>
      <div className="top-container">
        <h1>Projects</h1>
        <h3>a few things I&apos;ve built</h3>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
        <Link className="back-link" href="/">
          ← Back home
        </Link>
      </div>
    </>
  )
}
