import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getPlayerById } from '../../data/players'
import { PlayerHero } from '../../components/organisms/PlayerHero'
import { StatsSection } from '../../components/organisms/StatsSection'
import { AchievementsSection } from '../../components/organisms/AchievementsSection'
import { GlowButton } from '../../components/atoms/GlowButton'
import { NeonText } from '../../components/atoms/NeonText'

export interface PlayerDetailPageProps {
  playerId?: string
}

export function PlayerDetailPage({ playerId }: PlayerDetailPageProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const player = getPlayerById(playerId || id || '')

  if (!player) {
    return (
      <div className="text-center py-20">
        <NeonText size="xl" color="red">
          Player not found
        </NeonText>
        <div className="mt-6">
          <GlowButton color="#a0a0b0" variant="outline" onClick={() => navigate('/')}>
            ← Back to Players
          </GlowButton>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back button */}
      <GlowButton color={player.accentColor} variant="outline" onClick={() => navigate('/')}>
        ← Back to Players
      </GlowButton>

      {/* Hero */}
      <PlayerHero player={player} />

      {/* Stats */}
      <StatsSection player={player} />

      {/* Achievements */}
      <AchievementsSection
        achievements={player.achievements}
        accentColor={player.accentColor}
      />
    </motion.div>
  )
}
