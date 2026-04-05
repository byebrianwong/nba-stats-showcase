import { motion, type Variants } from 'framer-motion'
import { Player } from '../../../data/types'
import { PlayerCard } from '../../molecules/PlayerCard'

export interface PlayerGridProps {
  players: Player[]
  onPlayerClick?: (id: string) => void
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } },
}

export function PlayerGrid({ players, onPlayerClick }: PlayerGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {players.map((player) => (
        <motion.div key={player.id} variants={item}>
          <PlayerCard player={player} onClick={onPlayerClick} />
        </motion.div>
      ))}
    </motion.div>
  )
}
