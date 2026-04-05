import { Player } from '../../../data/types'
import { RadarChart } from '../../molecules/RadarChart'
import { StatBar } from '../../molecules/StatBar'
import { SeasonHighlight } from '../../molecules/SeasonHighlight'
import { NeonText } from '../../atoms/NeonText'

export interface StatsSectionProps {
  player: Player
}

export function StatsSection({ player }: StatsSectionProps) {
  const { stats, seasonAverages, accentColor } = player

  return (
    <div className="space-y-8">
      <NeonText as="h2" size="lg" color={accentColor}>
        Player Ratings
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
              label={key}
              value={value}
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
