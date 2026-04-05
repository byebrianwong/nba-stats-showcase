export interface PlayerStats {
  scoring: number
  passing: number
  rebounding: number
  defense: number
  athleticism: number
}

export interface SeasonAverages {
  points: number
  assists: number
  rebounds: number
  steals: number
  blocks: number
  fieldGoalPct: number
  threePointPct: number
  freeThrowPct: number
  minutesPerGame: number
}

export interface Achievement {
  title: string
  count: number
  year?: string
  icon: string
}

export interface Player {
  id: string
  firstName: string
  lastName: string
  team: string
  teamAbbr: string
  jerseyNumber: number
  position: string
  height: string
  weight: number
  age: number
  imageUrl: string
  accentColor: string
  stats: PlayerStats
  seasonAverages: SeasonAverages
  achievements: Achievement[]
  bio: string
}
