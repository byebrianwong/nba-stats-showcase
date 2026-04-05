import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadarChart } from './RadarChart'

const allRounder = { scoring: 85, passing: 85, rebounding: 80, defense: 82, athleticism: 88 }
const scorer = { scoring: 97, passing: 50, rebounding: 40, defense: 45, athleticism: 72 }
const defender = { scoring: 55, passing: 45, rebounding: 88, defense: 95, athleticism: 90 }

const meta = {
  title: 'Molecules/RadarChart',
  component: RadarChart,
  args: {
    stats: allRounder,
    color: '#00f0ff',
    size: 'md',
    animated: true,
    showLabels: true,
    fillOpacity: 0.2,
  },
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fillOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
  },
} satisfies Meta<typeof RadarChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'sm', stats: allRounder, color: '#b026ff' },
}

export const Large: Story = {
  args: { size: 'lg', stats: allRounder, color: '#39ff14' },
}

export const PureScorer: Story = {
  args: { stats: scorer, color: '#ff6b2b' },
}

export const EliteDefender: Story = {
  args: { stats: defender, color: '#4d6dff' },
}

export const NoLabels: Story = {
  args: { showLabels: false, color: '#ff2d95' },
}

export const CompareProfiles: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="text-center">
        <RadarChart stats={allRounder} color="#00f0ff" size="sm" />
        <p className="text-text-secondary text-xs mt-2">All-Rounder</p>
      </div>
      <div className="text-center">
        <RadarChart stats={scorer} color="#ff6b2b" size="sm" />
        <p className="text-text-secondary text-xs mt-2">Scorer</p>
      </div>
      <div className="text-center">
        <RadarChart stats={defender} color="#39ff14" size="sm" />
        <p className="text-text-secondary text-xs mt-2">Defender</p>
      </div>
    </div>
  ),
}
