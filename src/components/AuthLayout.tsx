import React from 'react'
import { motion } from 'framer-motion'

interface AuthLayoutProps {
  children: React.ReactNode
  illustration: string
  isReversed?: boolean
}


// Changing layout UI base on Login & Register
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, illustration, isReversed = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen w-full flex ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Form Side */}
      <motion.div 
        initial={{ x: isReversed ? 50 : -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-8"
      >
        {children}
      </motion.div>

      {/* Illustration Side */}
      <motion.div 
        initial={{ x: isReversed ? -50 : 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex flex-1 bg-[#EEF2FF]"
      >
        <img
          src={illustration}
          alt="Medical illustration"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}

export default AuthLayout

