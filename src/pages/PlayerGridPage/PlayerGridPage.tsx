import { useNavigate } from 'react-router-dom'
import { players } from '../../data/players'
import { PlayerGrid } from '../../components/organisms/PlayerGrid'
import { NeonText } from '../../components/atoms/NeonText'

export function PlayerGridPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-center mb-10">
        <NeonText as="h1" size="2xl" color="cyan">
          TOP PLAYERS
        </NeonText>
        <p className="text-text-secondary mt-3 text-sm">
          Click a player to explore their stats and achievements
        </p>
      </div>

      <PlayerGrid
        players={players}
        onPlayerClick={(id) => navigate(`/player/${id}`)}
      />
    </div>
  )
}
