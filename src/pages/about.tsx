import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <motion.main className="text-white p-8 flex flex-col">
            <motion.div className="h-40 mt-4 bg-gray-400 rounded-2xl"></motion.div>
            <motion.h1 className="mt-8 text-xl font-bold">About Me</motion.h1>
            <motion.p className="mt-4 text-base">I am Zach, a current fourth year computer science student aiming to create wonderful ideas into reality. I usually play games, watch anime, or listen to music at my free time. 
                        <br /><br />
                        My first project was a discord bot that serves as the connection between possible love partners, it offers an omegle-like approach built in discord.py. I learned a lot from that project and I proceeded with developing more projects outside discord.
                        <br /><br />
                        I found comfort in software development and debugging, I lost a loved one months before I started programming and it really became my coping mechanism from grieving and sorrow. 
                        <br /><br />
                        I am now expanding my knowledge and I am starting to learn more outside software, I am learning hardware stuff such as arduino and physical server set up.</motion.p>
            <hr className="border-t-1 border-yellow-400 my-4 mb-4" />
            <motion.p>I host my projects in github (most of them are private or hosted in an organization). If you wish to follow my projects, you can check my <a href="#" className="text-yellow-400">github</a>.</motion.p>
        </motion.main>
    )
}