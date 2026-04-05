import type { Meta, StoryObj } from '@storybook/react-vite'
import { SeasonHighlight } from './SeasonHighlight'

const meta = {
  title: 'Molecules/SeasonHighlight',
  component: SeasonHighlight,
  args: {
    label: 'Points Per Game',
    value: 27.1,
    color: '#00f0ff',
    decimals: 1,
  },
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof SeasonHighlight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Assists: Story = {
  args: { label: 'Assists Per Game', value: 9.8, color: '#b026ff' },
}

export const Rebounds: Story = {
  args: { label: 'Rebounds Per Game', value: 12.4, color: '#ff6b2b' },
}

export const Percentage: Story = {
  args: { label: 'Field Goal %', value: 52.3, suffix: '%', color: '#39ff14' },
}

export const StatRow: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-3 w-[600px]">
      <SeasonHighlight label="PPG" value={26.4} color="#00f0ff" />
      <SeasonHighlight label="APG" value={9.8} color="#b026ff" />
      <SeasonHighlight label="RPG" value={12.4} color="#ff6b2b" />
      <SeasonHighlight label="FG%" value={58.3} suffix="%" color="#39ff14" />
    </div>
  ),
}
