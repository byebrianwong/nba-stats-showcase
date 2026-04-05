import type { Meta, StoryObj } from '@storybook/react-vite'
import { AchievementsSection } from './AchievementsSection'
import { players } from '../../../data/players'

const meta = {
  title: 'Organisms/AchievementsSection',
  component: AchievementsSection,
  parameters: { layout: 'padded' },
  args: {
    achievements: players[0].achievements,
    accentColor: players[0].accentColor,
  },
} satisfies Meta<typeof AchievementsSection>

export default meta
type Story = StoryObj<typeof meta>

export const LeBron: Story = {}

export const Curry: Story = {
  args: {
    achievements: players[1].achievements,
    accentColor: players[1].accentColor,
  },
}

export const Wembanyama: Story = {
  args: {
    achievements: players[11].achievements,
    accentColor: players[11].accentColor,
  },
}
