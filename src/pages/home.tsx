import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
    

    return (
        <motion.main className="mt-8 w-full flex flex-col text-white">
            <motion.div className="flex gap-4 justify-center">
                <motion.div className="w-32 h-32 bg-white rounded-lg">

                </motion.div>
                <motion.div className="flex flex-col h-32 justify-between">
                    <motion.h1 className="text-2xl font-bold">HI! I AM <br /><span className="text-yellow-400">ZACH DAVID</span></motion.h1>
                    <motion.div className="flex gap-2">

                        <Instagram width={24} height={24} className=""/>
                        <Facebook width={24} height={24} className=""/>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="p-8 mt-10">
                <motion.p>I am a passionate developer working with web2 and web3 apps. I am also a computer science student. </motion.p>
                <br />
                <motion.p>I have been an enthusiast in software development for almost 5 years. I learned a lot of things including frontend development, backend, blockchain, automation, and many more.</motion.p>
                <br />
                <motion.p>If you wish to share an idea or create a project with me, feel free to message me at any of my socials. :)</motion.p>
            </motion.div>
            <motion.button className="ml-8 w-32 h-10 justify-self-start bg-yellow-400 text-black border border-blue-300 rounded-3xl">
                EMAIL ME
            </motion.button>
        </motion.main>
    )
}