import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerGrid } from './PlayerGrid'
import { players } from '../../../data/players'

const meta = {
  title: 'Organisms/PlayerGrid',
  component: PlayerGrid,
  parameters: { layout: 'padded' },
  args: {
    players,
  },
} satisfies Meta<typeof PlayerGrid>

export default meta
type Story = StoryObj<typeof meta>

export const AllPlayers: Story = {}

export const FourPlayers: Story = {
  args: { players: players.slice(0, 4) },
}

export const SinglePlayer: Story = {
  args: { players: [players[0]] },
}
