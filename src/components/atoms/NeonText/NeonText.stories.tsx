import type { Meta, StoryObj } from '@storybook/react-vite'
import { NeonText } from './NeonText'

const meta = {
  title: 'Atoms/NeonText',
  component: NeonText,
  args: {
    children: 'NBA Showcase',
    color: 'cyan',
    size: 'lg',
    glow: true,
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['cyan', 'purple', 'orange', 'green', 'pink', 'blue', 'yellow', 'red'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'span', 'p'],
    },
  },
} satisfies Meta<typeof NeonText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllColors: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
  render: () => (
    <div className="flex flex-col gap-3">
      {(['cyan', 'purple', 'orange', 'green', 'pink', 'blue', 'yellow', 'red'] as const).map(
        (color) => (
          <NeonText key={color} color={color} size="lg">
            {color.charAt(0).toUpperCase() + color.slice(1)} Neon
          </NeonText>
        ),
      )}
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <NeonText key={size} size={size} color="cyan">
          Size: {size}
        </NeonText>
      ))}
    </div>
  ),
}

export const NoGlow: Story = {
  args: { glow: false, size: 'xl', children: 'No Glow Effect' },
}

export const Heading: Story = {
  args: { as: 'h1', size: '2xl', color: 'purple', children: 'GAME TIME' },
}

export const CustomColor: Story = {
  args: { color: '#ff00aa', size: 'xl', children: 'Custom Hex' },
}
