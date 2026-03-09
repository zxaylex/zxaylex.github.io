"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type AnimatedContainerProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedContainer({
  children,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
