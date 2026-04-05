import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerCard } from './PlayerCard'
import { players } from '../../../data/players'

const meta = {
  title: 'Molecules/PlayerCard',
  component: PlayerCard,
  args: {
    player: players[0],
  },
  argTypes: {
    player: {
      control: 'select',
      options: players.map((p) => p.id),
      mapping: Object.fromEntries(players.map((p) => [p.id, p])),
    },
  },
} satisfies Meta<typeof PlayerCard>

export default meta
type Story = StoryObj<typeof meta>

export const LeBron: Story = {
  args: { player: players[0] },
}

export const Curry: Story = {
  args: { player: players[1] },
}

export const Giannis: Story = {
  args: { player: players[3] },
}

export const Wembanyama: Story = {
  args: { player: players[11] },
}

export const SGA: Story = {
  args: { player: players[10] },
}
