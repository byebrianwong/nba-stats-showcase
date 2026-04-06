import { ReactNode } from 'react'

type NeonColor = 'cyan' | 'purple' | 'orange' | 'green' | 'pink' | 'blue' | 'yellow' | 'red'

const colorMap: Record<NeonColor, string> = {
  cyan: '#00f0ff',
  purple: '#b026ff',
  orange: '#ff6b2b',
  green: '#39ff14',
  pink: '#ff2d95',
  blue: '#4d6dff',
  yellow: '#ffe600',
  red: '#ff3c3c',
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-3xl font-bold',
  xl: 'text-5xl font-extrabold',
  '2xl': 'text-7xl font-black',
}

export interface NeonTextProps {
  children: ReactNode
  color?: NeonColor | string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
  size?: keyof typeof sizeMap
  glow?: boolean
  className?: string
}

export function NeonText({
  children,
  color = 'cyan',
  as: Tag = 'span',
  size = 'md',
  glow = true,
  className = '',
}: NeonTextProps) {
  const hex = colorMap[color as NeonColor] || color

  return (
    <Tag
      className={`${sizeMap[size]} tracking-tight ${className}`}
      style={{
        color: hex,
        textShadow: glow
          ? `0 0 10px ${hex}, 0 0 30px ${hex}90, 0 0 60px ${hex}50, 0 0 100px ${hex}20`
          : undefined,
      }}
    >
      {children}
    </Tag>
  )
}
