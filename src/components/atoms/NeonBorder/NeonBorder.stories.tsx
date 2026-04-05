import type { Meta, StoryObj } from '@storybook/react-vite'
import { NeonBorder } from './NeonBorder'

const meta = {
  title: 'Atoms/NeonBorder',
  component: NeonBorder,
  args: {
    color: '#00f0ff',
    animated: true,
    children: (
      <div className="p-8 text-center">
        <p className="text-white text-lg font-bold">Neon Border</p>
        <p className="text-text-secondary text-sm mt-1">Animated gradient border</p>
      </div>
    ),
  },
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof NeonBorder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Purple: Story = {
  args: { color: '#b026ff' },
}

export const Orange: Story = {
  args: { color: '#ff6b2b' },
}

export const Static: Story = {
  args: { animated: false, color: '#39ff14' },
}

export const WithCard: Story = {
  args: {
    color: '#ff2d95',
    children: (
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-neon-pink/20" />
          <div>
            <p className="text-white font-bold">Featured Player</p>
            <p className="text-text-secondary text-sm">#23 • Small Forward</p>
          </div>
        </div>
      </div>
    ),
  },
}
