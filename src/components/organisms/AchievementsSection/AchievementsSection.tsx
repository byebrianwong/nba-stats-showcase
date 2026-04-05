import { motion } from 'framer-motion'
import { Achievement } from '../../../data/types'
import { AchievementCard } from '../../molecules/AchievementCard'
import { NeonText } from '../../atoms/NeonText'

export interface AchievementsSectionProps {
  achievements: Achievement[]
  accentColor?: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AchievementsSection({
  achievements,
  accentColor = '#ffe600',
}: AchievementsSectionProps) {
  return (
    <div>
      <NeonText as="h2" size="lg" color={accentColor}>
        Achievements
      </NeonText>

      <motion.div
        className="flex flex-wrap gap-4 mt-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {achievements.map((achievement) => (
          <motion.div key={achievement.title} variants={item}>
            <AchievementCard achievement={achievement} accentColor={accentColor} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
