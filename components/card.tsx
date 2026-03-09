import React from "react"

type ProjectCardProps = {
    image: string, 
    title: string,
    subtitle: string,
    description: string,
    link: string
}

export default function ProjectCard({ image, title, subtitle, description, link }: ProjectCardProps) {
    return (
        <article className="mx-auto mt-4 max-w-md overflow-hidden rounded-xl border border-border bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:max-w-2xl">
            <div>
                <div className="md:shrink-0">
                <img
                    className="h-48 w-full object-cover md:h-full"
                    src={image}
                    alt={image}
                />
                </div>
                <div className="p-8">
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">{title}</p>
                <a href={link} className="mt-1 block text-lg leading-tight font-medium text-foreground hover:underline">
                    {subtitle}
                </a>
                <p className="mt-2 text-muted-foreground">
                    {description}
                </p>
                </div>
            </div>
        </article>
    )
}