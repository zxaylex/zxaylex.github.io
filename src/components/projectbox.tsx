import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function ProjectBox(props: ProjectInterface) {
    return (
        <motion.div className="border border-yellow-400 rounded-lg">
            <motion.div className="h-36 bg-gray-700 rounded-t-lg">

            </motion.div>
            <motion.div className="h-30 p-4">
                <motion.div className="flex text-center gap-2 h-5">
                    <Github/>
                    <motion.h1 className="text-lg">{props.title}</motion.h1>
                </motion.div>
                <br/>
                <motion.div className="">
                    <motion.p className="text-sm font-light">{props.description}</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export interface ProjectInterface {
    github: string, 
    title: string,
    description: string,
    image: string
}