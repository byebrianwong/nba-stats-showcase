import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatBadge } from './StatBadge'

const meta = {
  title: 'Atoms/StatBadge',
  component: StatBadge,
  args: {
    label: 'PPG',
    value: '27.1',
    color: '#00f0ff',
  },
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof StatBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllStats: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatBadge label="PPG" value="27.1" color="#00f0ff" />
      <StatBadge label="APG" value="8.3" color="#b026ff" />
      <StatBadge label="RPG" value="8.4" color="#ff6b2b" />
      <StatBadge label="FG%" value="48.7" color="#39ff14" />
      <StatBadge label="3P%" value="35.4" color="#ffe600" />
      <StatBadge label="STL" value="1.4" color="#ff2d95" />
    </div>
  ),
}

export const HighValue: Story = {
  args: { label: 'PTS', value: 61, color: '#ff3c3c' },
}
