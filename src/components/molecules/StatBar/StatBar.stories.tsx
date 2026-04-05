import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatBar } from './StatBar'

const meta = {
  title: 'Molecules/StatBar',
  component: StatBar,
  args: {
    label: 'Scoring',
    value: 85,
    maxValue: 100,
    color: '#00f0ff',
    animated: true,
  },
  argTypes: {
    color: { control: 'color' },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HighValue: Story = {
  args: { value: 97, label: 'Scoring', color: '#ff6b2b' },
}

export const LowValue: Story = {
  args: { value: 32, label: 'Three-Point', color: '#ffe600' },
}

export const MultipleStats: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <StatBar label="Scoring" value={95} color="#00f0ff" />
      <StatBar label="Passing" value={88} color="#b026ff" />
      <StatBar label="Rebounding" value={78} color="#ff6b2b" />
      <StatBar label="Defense" value={72} color="#39ff14" />
      <StatBar label="Athleticism" value={85} color="#ff2d95" />
    </div>
  ),
}
