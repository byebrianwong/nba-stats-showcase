import type { Meta, StoryObj } from '@storybook/react-vite'
import { AchievementCard } from './AchievementCard'

const meta = {
  title: 'Molecules/AchievementCard',
  component: AchievementCard,
  args: {
    achievement: { title: 'NBA Champion', count: 4, year: '2012-2020', icon: '🏆' },
    accentColor: '#ffe600',
  },
  argTypes: {
    accentColor: { control: 'color' },
  },
} satisfies Meta<typeof AchievementCard>

export default meta
type Story = StoryObj<typeof meta>

export const Champion: Story = {}

export const MVP: Story = {
  args: {
    achievement: { title: 'MVP', count: 3, year: '2021-2024', icon: '🏅' },
    accentColor: '#00f0ff',
  },
}

export const AllStar: Story = {
  args: {
    achievement: { title: 'All-Star', count: 20, year: '2005-2025', icon: '⭐' },
    accentColor: '#b026ff',
  },
}

export const DPOY: Story = {
  args: {
    achievement: { title: 'DPOY', count: 1, year: '2025', icon: '🛡️' },
    accentColor: '#39ff14',
  },
}

export const Collection: Story = {
  render: () => (
    <div className="flex gap-3">
      <AchievementCard
        achievement={{ title: 'NBA Champion', count: 4, year: '2012-2020', icon: '🏆' }}
        accentColor="#ffe600"
      />
      <AchievementCard
        achievement={{ title: 'MVP', count: 4, year: '2009-2013', icon: '🏅' }}
        accentColor="#00f0ff"
      />
      <AchievementCard
        achievement={{ title: 'All-Star', count: 20, year: '2005-2025', icon: '⭐' }}
        accentColor="#b026ff"
      />
    </div>
  ),
}
