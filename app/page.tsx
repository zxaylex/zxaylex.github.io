import { AnimatedContainer } from "@/components/animated-container";
import { homeProfile } from "@/lib/site-data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 pt-28 pb-16">
      <AnimatedContainer className="grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]" delay={0.05}>
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card/80 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/profile.jpg"
            alt={homeProfile.name}
            className="aspect-[4/5] w-full rounded-xl object-cover"
            width={800}
            height={1000}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {homeProfile.greeting}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {homeProfile.name}
            </h1>
            <p className="text-lg text-primary md:text-2xl">{homeProfile.title}</p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {homeProfile.bio}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-background px-3 py-1.5">
              Age: {homeProfile.age}
            </span>
            <span className="rounded-full border border-border bg-background px-3 py-1.5">
              Status: {homeProfile.status}
            </span>
          </div>
        </div>
      </AnimatedContainer>
    </main>
  );
}
