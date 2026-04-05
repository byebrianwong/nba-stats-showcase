import { motion } from 'framer-motion'
import { Player } from '../../../data/types'
import { NeonText } from '../../atoms/NeonText'
import { PlayerAvatar } from '../../atoms/PlayerAvatar'
import { StatBadge } from '../../atoms/StatBadge'

export interface PlayerHeroProps {
  player: Player
}

export function PlayerHero({ player }: PlayerHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${player.accentColor}15 0%, transparent 70%), radial-gradient(ellipse at 80% 20%, ${player.accentColor}10 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <PlayerAvatar
            src={player.imageUrl}
            alt={`${player.firstName} ${player.lastName}`}
            size="xl"
            glowColor={player.accentColor}
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <NeonText color={player.accentColor} size="sm" glow={false}>
            #{player.jerseyNumber} • {player.position} • {player.teamAbbr}
          </NeonText>

          <h1 className="text-4xl md:text-6xl font-black text-white mt-1 leading-tight">
            {player.firstName}
            <br />
            <span style={{ color: player.accentColor }}>{player.lastName}</span>
          </h1>

          <p className="text-text-secondary mt-3 max-w-lg text-sm md:text-base leading-relaxed">
            {player.bio}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <StatBadge label="PPG" value={player.seasonAverages.points} color={player.accentColor} />
            <StatBadge label="APG" value={player.seasonAverages.assists} color={player.accentColor} />
            <StatBadge label="RPG" value={player.seasonAverages.rebounds} color={player.accentColor} />
          </div>

          <div className="flex items-center gap-3 mt-4 text-text-muted text-sm justify-center md:justify-start">
            <span>{player.height}</span>
            <span>•</span>
            <span>{player.weight} lbs</span>
            <span>•</span>
            <span>Age {player.age}</span>
            <span>•</span>
            <span>{player.team}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${player.accentColor}, transparent)`,
        }}
      />
    </div>
  )
}
