import type { Meta, StoryObj } from '@storybook/react-vite'
import { GlassCard } from './GlassCard'

const meta = {
  title: 'Atoms/GlassCard',
  component: GlassCard,
  args: {
    children: (
      <div className="text-white">
        <h3 className="text-lg font-bold mb-2">Glass Card</h3>
        <p className="text-text-secondary text-sm">
          A frosted glass container with backdrop blur and subtle borders.
        </p>
      </div>
    ),
    hoverEffect: true,
  },
  argTypes: {
    hoverGlowColor: { control: 'color' },
  },
} satisfies Meta<typeof GlassCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithHoverGlow: Story = {
  args: {
    hoverGlowColor: '#b026ff',
    children: (
      <div className="text-white">
        <h3 className="text-lg font-bold mb-2">Purple Glow</h3>
        <p className="text-text-secondary text-sm">Hover to see the purple glow effect.</p>
      </div>
    ),
  },
}

export const NoHover: Story = {
  args: {
    hoverEffect: false,
    children: (
      <div className="text-white">
        <h3 className="text-lg font-bold mb-2">Static Card</h3>
        <p className="text-text-secondary text-sm">No hover animation on this card.</p>
      </div>
    ),
  },
}

export const Clickable: Story = {
  args: {
    onClick: () => alert('Clicked!'),
    children: (
      <div className="text-white text-center py-4">
        <p className="text-lg font-bold">Click Me</p>
      </div>
    ),
  },
}

export const Grid: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      {['#00f0ff', '#b026ff', '#ff6b2b', '#39ff14'].map((color) => (
        <GlassCard key={color} hoverGlowColor={color}>
          <div className="text-center py-4">
            <div
              className="w-8 h-8 rounded-full mx-auto mb-2"
              style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}60` }}
            />
            <p className="text-white text-sm font-medium">{color}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  ),
}
