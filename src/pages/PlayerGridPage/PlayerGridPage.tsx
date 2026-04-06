import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { players } from '../../data/players'
import { PlayerGrid } from '../../components/organisms/PlayerGrid'
import { NeonText } from '../../components/atoms/NeonText'
import { GlowButton } from '../../components/atoms/GlowButton'

export function PlayerGridPage() {
  const navigate = useNavigate()
  const [lastUpdated, setLastUpdated] = useState('Apr 5, 2026')
  const [refreshing, setRefreshing] = useState(false)

  function handleRefresh() {
    setRefreshing(true)
    // Simulate fetching updated stats — in the future, this could call a real API
    setTimeout(() => {
      setRefreshing(false)
      setLastUpdated(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
    }, 1200)
  }

  return (
    <div>
      <div className="text-center mb-10">
        <NeonText as="h1" size="2xl" color="cyan">
          TOP PLAYERS
        </NeonText>
        <p className="text-text-secondary mt-3 text-sm">
          Click a player to explore their stats and achievements
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="text-text-muted text-xs">
            Stats updated: {lastUpdated}
          </span>
          <GlowButton
            color="#00f0ff"
            variant="outline"
            onClick={handleRefresh}
          >
            {refreshing ? 'Refreshing...' : '↻ Update Stats'}
          </GlowButton>
        </div>
      </div>

      <PlayerGrid
        players={players}
        onPlayerClick={(id) => navigate(`/player/${id}`)}
      />
    </div>
  )
}
