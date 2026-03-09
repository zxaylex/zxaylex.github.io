import ProjectCard from "@/components/card"
import { AnimatedContainer } from "@/components/animated-container"
import { projects } from "@/lib/site-data"

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 pt-28 pb-16">
      <AnimatedContainer delay={0.05}>
        <h1 className="section-title">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </AnimatedContainer>
    </main>
  )
}
