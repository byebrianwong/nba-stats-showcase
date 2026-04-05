import type { Meta, StoryObj } from '@storybook/react-vite'
import { GlowButton } from './GlowButton'

const meta = {
  title: 'Atoms/GlowButton',
  component: GlowButton,
  args: {
    children: 'View Profile',
    color: '#00f0ff',
    variant: 'solid',
  },
  argTypes: {
    color: { control: 'color' },
    variant: { control: 'select', options: ['solid', 'outline'] },
  },
} satisfies Meta<typeof GlowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {[
        { color: '#00f0ff', label: 'Cyan' },
        { color: '#b026ff', label: 'Purple' },
        { color: '#ff6b2b', label: 'Orange' },
        { color: '#39ff14', label: 'Green' },
        { color: '#ff2d95', label: 'Pink' },
      ].map((item) => (
        <GlowButton key={item.color} color={item.color}>
          {item.label}
        </GlowButton>
      ))}
    </div>
  ),
}

export const OutlineVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {[
        { color: '#00f0ff', label: 'Cyan' },
        { color: '#b026ff', label: 'Purple' },
        { color: '#ff6b2b', label: 'Orange' },
        { color: '#39ff14', label: 'Green' },
        { color: '#ff2d95', label: 'Pink' },
      ].map((item) => (
        <GlowButton key={item.color} color={item.color} variant="outline">
          {item.label}
        </GlowButton>
      ))}
    </div>
  ),
}

export const BackButton: Story = {
  args: {
    children: '← Back to Players',
    variant: 'outline',
    color: '#a0a0b0',
  },
}
