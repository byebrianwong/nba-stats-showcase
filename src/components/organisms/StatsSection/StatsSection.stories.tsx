import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatsSection } from './StatsSection'
import { players } from '../../../data/players'

const meta = {
  title: 'Organisms/StatsSection',
  component: StatsSection,
  parameters: { layout: 'padded' },
  args: {
    player: players[5], // Jokic - great all-rounder stats
  },
  argTypes: {
    player: {
      control: 'select',
      options: players.map((p) => p.id),
      mapping: Object.fromEntries(players.map((p) => [p.id, p])),
    },
  },
} satisfies Meta<typeof StatsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Jokic: Story = {}

export const LeBron: Story = {
  args: { player: players[0] },
}

export const Wembanyama: Story = {
  args: { player: players[11] },
}
