import { motion } from 'framer-motion'

export interface StatBarProps {
  label: string
  value: number
  maxValue?: number
  color?: string
  animated?: boolean
}

export function StatBar({
  label,
  value,
  maxValue = 100,
  color = '#00f0ff',
  animated = true,
}: StatBarProps) {
  const pct = Math.min((value / maxValue) * 100, 100)

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1.5">
        <span className="text-text-secondary text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
        <span className="text-xs font-bold" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 10px ${color}40`,
          }}
          initial={animated ? { width: 0 } : { width: `${pct}%` }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}
