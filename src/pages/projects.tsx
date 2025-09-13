import { motion } from "framer-motion"
import ProjectBox, { type ProjectInterface }  from "@/components/projectbox"

const projects: ProjectInterface[] = [
    {github: "https://github.com/npesaras/TidalChain",title: "TidalChain", description: "Where farmers meet blockchain", image: ""},
    {github: "https://github.com/Web3-Iligan/LikAI",title: "LikAI", description: "Where farmers meet blockchain", image: ""},
]

export default function ProjectsPage() {
    return (
        <motion.main className="mt-4 m-8 flex flex-col text-white">
            <motion.div>
                <motion.h1 className="font-bold text-md">MY PROJECTS</motion.h1>
                <br />
                <motion.p>
                    I am a backend developer at Sentient, a community of developers who are eager to learn in any sort of software/hardware related systems. Here are the projects where I developed the backend on,
                </motion.p>
            </motion.div>
            <motion.div className="grid grid-cols-1 mt-8 gap-4">
                {projects.map(project => (
                    <ProjectBox {...project} key={project.github} />
                ))}
            </motion.div>
        </motion.main>
    )
}