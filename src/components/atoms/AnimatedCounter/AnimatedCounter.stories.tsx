import type { Meta, StoryObj } from '@storybook/react-vite'
import { AnimatedCounter } from './AnimatedCounter'

const meta = {
  title: 'Atoms/AnimatedCounter',
  component: AnimatedCounter,
  args: {
    value: 27,
    decimals: 1,
    className: 'text-4xl font-black text-white',
  },
} satisfies Meta<typeof AnimatedCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Points: Story = {
  args: { value: 30.1, decimals: 1, suffix: ' PPG' },
}

export const Percentage: Story = {
  args: { value: 52.3, decimals: 1, suffix: '%' },
}

export const LargeNumber: Story = {
  args: { value: 40474, decimals: 0, prefix: '', suffix: ' PTS' },
}

export const SlowAnimation: Story = {
  args: { value: 100, duration: 3, suffix: '%' },
}

export const MultipleCounters: Story = {
  render: () => (
    <div className="flex gap-8">
      {[
        { value: 27.1, label: 'PPG', color: '#00f0ff' },
        { value: 8.3, label: 'APG', color: '#b026ff' },
        { value: 8.4, label: 'RPG', color: '#ff6b2b' },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <AnimatedCounter
            value={stat.value}
            decimals={1}
            className="text-4xl font-black"
            suffix=""
          />
          <p className="text-text-secondary text-sm mt-1" style={{ color: stat.color }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  ),
}
