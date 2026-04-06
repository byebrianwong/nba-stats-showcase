// Advanced NBA metrics used for radar chart visualization
export interface PlayerStats {
  trueShooting: number    // TS% — typically 50-70
  defensiveRating: number // DRtg — typically 100-115 (lower is better)
  epm: number             // EPM — typically -3 to +10
  per: number             // PER — typically 10-35 (league avg 15)
  bpm: number             // BPM — typically -3 to +10
}

// Normalize raw stats to 0-100 scale for the radar chart
export function normalizeStats(stats: PlayerStats): Record<string, number> {
  return {
    'TS%': clamp(((stats.trueShooting - 48) / (68 - 48)) * 100),
    'Def Rtg': clamp(((115 - stats.defensiveRating) / (115 - 100)) * 100), // inverted — lower is better
    'EPM': clamp(((stats.epm - -3) / (10 - -3)) * 100),
    'PER': clamp(((stats.per - 8) / (35 - 8)) * 100),
    'BPM': clamp(((stats.bpm - -3) / (10 - -3)) * 100),
  }
}

function clamp(v: number): number {
  return Math.max(0, Math.min(100, v))
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
