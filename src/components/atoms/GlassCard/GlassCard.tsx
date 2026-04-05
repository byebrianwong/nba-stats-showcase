import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  hoverGlowColor?: string
  onClick?: () => void
}

export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  hoverGlowColor = '#00f0ff',
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={
        hoverEffect
          ? {
              scale: 1.02,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          : undefined
      }
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={
        hoverEffect
          ? {
              // @ts-expect-error CSS custom property for hover glow
              '--hover-glow': `0 0 30px ${hoverGlowColor}30, 0 0 60px ${hoverGlowColor}15`,
            }
          : undefined
      }
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
