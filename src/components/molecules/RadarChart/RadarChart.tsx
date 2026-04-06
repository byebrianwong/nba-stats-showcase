import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import { PlayerStats, normalizeStats } from '../../../data/types'

export interface RadarChartProps {
  stats: PlayerStats
  color?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  showLabels?: boolean
  fillOpacity?: number
}

const sizeMap = {
  sm: 190,
  md: 260,
  lg: 360,
}

export function RadarChart({
  stats,
  color = '#00f0ff',
  size = 'md',
  animated = true,
  showLabels = true,
  fillOpacity = 0.2,
}: RadarChartProps) {
  const normalized = normalizeStats(stats)
  const data = Object.entries(normalized).map(([label, value]) => ({
    category: label,
    value,
    fullMark: 100,
  }))

  const dimension = sizeMap[size]

  return (
    <div style={{ width: dimension, height: dimension }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          {showLabels && (
            <PolarAngleAxis
              dataKey="category"
              tick={{
                fill: '#a0a0b0',
                fontSize: size === 'sm' ? 9 : size === 'md' ? 11 : 13,
              }}
            />
          )}
          <Radar
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={fillOpacity}
            strokeWidth={2}
            isAnimationActive={animated}
            animationDuration={1500}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
