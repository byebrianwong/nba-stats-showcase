import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface GlowButtonProps {
  children: ReactNode
  color?: string
  variant?: 'solid' | 'outline'
  onClick?: () => void
  className?: string
}

export function GlowButton({
  children,
  color = '#00f0ff',
  variant = 'solid',
  onClick,
  className = '',
}: GlowButtonProps) {
  const isSolid = variant === 'solid'

  return (
    <motion.button
      className={`
        relative px-6 py-2.5 rounded-xl font-semibold text-sm
        transition-shadow duration-300
        ${isSolid ? 'text-black' : 'bg-transparent'}
        ${className}
      `}
      style={{
        backgroundColor: isSolid ? color : 'transparent',
        border: isSolid ? 'none' : `2px solid ${color}`,
        color: isSolid ? '#0a0a0f' : color,
      }}
      whileHover={{
        boxShadow: `0 0 20px ${color}60, 0 0 40px ${color}30`,
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
