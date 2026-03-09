import ExperienceTimeline from "@/components/timeline"
import { AnimatedContainer } from "@/components/animated-container"

export default function ExperiencePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 pt-28 pb-16">
      <AnimatedContainer delay={0.05}>
        <h1 className="section-title">Experience</h1>
        <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm">
          <ExperienceTimeline />
        </div>
      </AnimatedContainer>
    </main>
  )
}
