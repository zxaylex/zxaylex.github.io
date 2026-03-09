import { SkillsSection } from "@/components/skills"
import { AnimatedContainer } from "@/components/animated-container"

export default function SkillsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 pt-28 pb-16">
      <AnimatedContainer delay={0.05}>
        <h1 className="section-title">Skills</h1>
        <SkillsSection />
      </AnimatedContainer>
    </main>
  )
}
