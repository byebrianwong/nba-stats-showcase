import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerHero } from './PlayerHero'
import { players } from '../../../data/players'

const meta = {
  title: 'Organisms/PlayerHero',
  component: PlayerHero,
  parameters: { layout: 'padded' },
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
} satisfies Meta<typeof PlayerHero>

export default meta
type Story = StoryObj<typeof meta>

export const LeBron: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
}

export const Curry: Story = {
  args: { player: players[1] },
}

export const Wembanyama: Story = {
  args: { player: players[11] },
}

export const Jokic: Story = {
  args: { player: players[5] },
}
