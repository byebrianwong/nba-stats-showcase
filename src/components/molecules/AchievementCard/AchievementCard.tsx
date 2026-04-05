import { Achievement } from '../../../data/types'

export interface AchievementCardProps {
  achievement: Achievement
  accentColor?: string
}

export function AchievementCard({ achievement, accentColor = '#ffe600' }: AchievementCardProps) {
  return (
    <div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center min-w-[140px]"
      style={{
        boxShadow: `0 0 15px ${accentColor}10`,
      }}
    >
      <span className="text-3xl block mb-2">{achievement.icon}</span>
      <p className="text-white font-bold text-sm">{achievement.title}</p>
      <p className="text-2xl font-black mt-1" style={{ color: accentColor }}>
        {achievement.count}×
      </p>
      {achievement.year && (
        <p className="text-text-muted text-xs mt-1">{achievement.year}</p>
      )}
    </div>
  )
}
