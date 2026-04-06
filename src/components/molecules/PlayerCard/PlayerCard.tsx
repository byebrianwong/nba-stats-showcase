import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Player } from '../../../data/types'
import { PlayerAvatar } from '../../atoms/PlayerAvatar'
import { NeonText } from '../../atoms/NeonText'
import { RadarChart } from '../RadarChart'

export interface PlayerCardProps {
  player: Player
  onClick?: (id: string) => void
}

export function PlayerCard({ player, onClick }: PlayerCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 cursor-pointer overflow-hidden group"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick?.(player.id)}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `inset 0 0 30px ${player.accentColor}15, 0 0 30px ${player.accentColor}20`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${player.accentColor}, transparent)`,
        }}
      />

      <div className="relative flex flex-col items-center gap-3" style={{ transform: 'translateZ(20px)' }}>
        <PlayerAvatar
          src={player.imageUrl}
          alt={`${player.firstName} ${player.lastName}`}
          size="lg"
          glowColor={player.accentColor}
        />

        <div className="text-center">
          <NeonText color={player.accentColor} size="sm" glow={false}>
            #{player.jerseyNumber} • {player.position}
          </NeonText>
          <h3 className="text-white font-bold text-lg mt-0.5">
            {player.firstName}{' '}
            <span style={{ color: player.accentColor }}>{player.lastName}</span>
          </h3>
          <p className="text-text-muted text-xs">{player.team}</p>
        </div>

        <RadarChart
          stats={player.stats}
          color={player.accentColor}
          size="sm"
          showLabels={true}
          fillOpacity={0.15}
        />
      </div>
    </motion.div>
  )
}
