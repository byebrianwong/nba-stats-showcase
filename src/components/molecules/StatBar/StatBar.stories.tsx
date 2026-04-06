import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatBar } from './StatBar'

const meta = {
  title: 'Molecules/StatBar',
  component: StatBar,
  args: {
    label: 'TS%: 63.2%',
    value: 76,
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
  args: { value: 92, label: 'PER: 31.2', color: '#ff6b2b' },
}

export const LowValue: Story = {
  args: { value: 32, label: 'EPM: +1.2', color: '#ffe600' },
}

export const MultipleStats: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <StatBar label="TS%: 64.8%" value={84} color="#00f0ff" />
      <StatBar label="Def Rtg: 107.8" value={48} color="#b026ff" />
      <StatBar label="EPM: +8.9" value={92} color="#ff6b2b" />
      <StatBar label="PER: 32.5" value={91} color="#39ff14" />
      <StatBar label="BPM: +12.5" value={100} color="#ff2d95" />
    </div>
  ),
}
