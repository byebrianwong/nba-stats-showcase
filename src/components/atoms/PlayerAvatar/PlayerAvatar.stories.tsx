import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerAvatar } from './PlayerAvatar'

const meta = {
  title: 'Atoms/PlayerAvatar',
  component: PlayerAvatar,
  args: {
    src: '/players/lebron-james.svg',
    alt: 'LeBron James',
    size: 'md',
    glowColor: '#b026ff',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    glowColor: { control: 'color' },
  },
} satisfies Meta<typeof PlayerAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <PlayerAvatar
          key={size}
          src="/players/stephen-curry.svg"
          alt="Stephen Curry"
          size={size}
          glowColor="#ffe600"
        />
      ))}
    </div>
  ),
}

export const DifferentColors: Story = {
  render: () => (
    <div className="flex gap-4">
      {['#00f0ff', '#b026ff', '#ff6b2b', '#39ff14', '#ff2d95'].map((color) => (
        <PlayerAvatar
          key={color}
          src="/players/lebron-james.svg"
          alt="Player"
          size="lg"
          glowColor={color}
        />
      ))}
    </div>
  ),
}

export const Fallback: Story = {
  args: {
    src: '/players/nonexistent.svg',
    alt: 'Unknown Player',
    size: 'lg',
    glowColor: '#00f0ff',
  },
}
