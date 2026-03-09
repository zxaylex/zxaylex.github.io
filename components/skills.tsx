import { skillGroups } from "@/lib/site-data"

export function SkillsSection() {
  return (
        <div className="space-y-8 px-4 py-8">
            {skillGroups.map((group) => (
                <section key={group.title}>
                    <h2 className="mb-4 text-center text-lg font-medium tracking-tight">{group.title}</h2>
                    <div className="grid items-center justify-items-center gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {group.skills.map((skill) => (
                            <article
                                key={skill.name}
                                className="w-full min-w-0 rounded-xl border border-border bg-card/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="mb-3 h-12 w-12 object-contain"
                                    />
                                    <span className="text-center text-sm font-medium md:text-base">{skill.name}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    
  );
}