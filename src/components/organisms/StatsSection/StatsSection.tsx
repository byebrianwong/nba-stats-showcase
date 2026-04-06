import { Player, normalizeStats } from '../../../data/types'
import { RadarChart } from '../../molecules/RadarChart'
import { StatBar } from '../../molecules/StatBar'
import { SeasonHighlight } from '../../molecules/SeasonHighlight'
import { NeonText } from '../../atoms/NeonText'

export interface StatsSectionProps {
  player: Player
}

const rawLabels: Record<string, string> = {
  trueShooting: 'TS%',
  defensiveRating: 'Def Rtg',
  epm: 'EPM',
  per: 'PER',
  bpm: 'BPM',
}

const rawFormats: Record<string, (v: number) => string> = {
  trueShooting: (v) => `${v.toFixed(1)}%`,
  defensiveRating: (v) => v.toFixed(1),
  epm: (v) => (v >= 0 ? '+' : '') + v.toFixed(1),
  per: (v) => v.toFixed(1),
  bpm: (v) => (v >= 0 ? '+' : '') + v.toFixed(1),
}

export function StatsSection({ player }: StatsSectionProps) {
  const { stats, seasonAverages, accentColor } = player
  const normalized = normalizeStats(stats)

  return (
    <div className="space-y-8">
      <NeonText as="h2" size="lg" color={accentColor}>
        Advanced Ratings
      </NeonText>

      {/* Radar + Bars side by side */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div className="flex-shrink-0">
          <RadarChart stats={stats} color={accentColor} size="lg" fillOpacity={0.25} />
        </div>

        <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
          {Object.entries(stats).map(([key, value]) => (
            <StatBar
              key={key}
              label={`${rawLabels[key] || key}: ${rawFormats[key]?.(value) ?? value}`}
              value={normalized[rawLabels[key] || key] ?? 0}
              color={accentColor}
            />
          ))}
        </div>
      </div>

      {/* Season Averages */}
      <NeonText as="h2" size="lg" color={accentColor}>
        Season Averages
      </NeonText>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <SeasonHighlight label="PPG" value={seasonAverages.points} color={accentColor} />
        <SeasonHighlight label="APG" value={seasonAverages.assists} color={accentColor} />
        <SeasonHighlight label="RPG" value={seasonAverages.rebounds} color={accentColor} />
        <SeasonHighlight label="FG%" value={seasonAverages.fieldGoalPct} suffix="%" color={accentColor} />
        <SeasonHighlight label="3P%" value={seasonAverages.threePointPct} suffix="%" color={accentColor} />
        <SeasonHighlight label="FT%" value={seasonAverages.freeThrowPct} suffix="%" color={accentColor} />
        <SeasonHighlight label="STL" value={seasonAverages.steals} color={accentColor} />
        <SeasonHighlight label="BLK" value={seasonAverages.blocks} color={accentColor} />
        <SeasonHighlight label="MPG" value={seasonAverages.minutesPerGame} color={accentColor} />
      </div>
    </div>
  )
}
