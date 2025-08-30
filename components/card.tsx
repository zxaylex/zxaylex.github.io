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
        <div className="mt-4 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
            <div className="">
                <div className="md:shrink-0">
                <img
                    className="h-48 w-full object-cover md:h-full"
                    src={image}
                    alt={image}
                />
                </div>
                <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{title}</div>
                <a href={link} className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                    {subtitle}
                </a>
                <p className="mt-2 text-gray-500">
                    {description}
                </p>
                </div>
            </div>
        </div>
    )
}