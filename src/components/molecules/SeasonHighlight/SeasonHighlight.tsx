import { AnimatedCounter } from '../../atoms/AnimatedCounter'

export interface SeasonHighlightProps {
  label: string
  value: number
  suffix?: string
  color?: string
  decimals?: number
}

export function SeasonHighlight({
  label,
  value,
  suffix = '',
  color = '#00f0ff',
  decimals = 1,
}: SeasonHighlightProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
      <AnimatedCounter
        value={value}
        decimals={decimals}
        suffix={suffix}
        className="text-3xl font-black"
      />
      <p
        className="text-xs font-semibold uppercase tracking-widest mt-2"
        style={{ color }}
      >
        {label}
      </p>
    </div>
  )
}
