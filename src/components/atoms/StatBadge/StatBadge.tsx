export interface StatBadgeProps {
  label: string
  value: string | number
  color?: string
}

export function StatBadge({ label, value, color = '#00f0ff' }: StatBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
      style={{
        boxShadow: `0 0 12px ${color}20, inset 0 0 12px ${color}10`,
      }}
    >
      <span className="text-text-secondary text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  )
}
