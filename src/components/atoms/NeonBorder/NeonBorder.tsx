import { ReactNode } from 'react'

export interface NeonBorderProps {
  children: ReactNode
  color?: string
  animated?: boolean
  className?: string
}

export function NeonBorder({
  children,
  color = '#00f0ff',
  animated = true,
  className = '',
}: NeonBorderProps) {
  return (
    <div className={`relative rounded-2xl p-[2px] ${className}`}>
      <div
        className={`absolute inset-0 rounded-2xl ${animated ? 'animate-spin-slow' : ''}`}
        style={{
          background: `conic-gradient(from 0deg, ${color}, transparent 40%, transparent 60%, ${color})`,
          filter: `blur(${animated ? '1px' : '0px'})`,
        }}
      />
      <div className="relative rounded-2xl bg-bg-primary">{children}</div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  )
}
