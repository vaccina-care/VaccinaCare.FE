import type React from "react"
import { motion } from "framer-motion"
import { useFadeIn } from "../hooks/useFadeIn"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const { ref, controls } = useFadeIn(delay)

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {children}
    </motion.div>
  )
}

