import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
import { PlayerDetailPage } from './PlayerDetailPage'

const meta = {
  title: 'Pages/PlayerDetailPage',
  component: PlayerDetailPage,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="bg-bg-primary min-h-screen p-8">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PlayerDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const LeBron: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
  args: { playerId: 'lebron-james' },
}

export const Curry: Story = {
  args: { playerId: 'stephen-curry' },
}

export const Jokic: Story = {
  args: { playerId: 'nikola-jokic' },
}

export const Wembanyama: Story = {
  parameters: { chromatic: { disableSnapshot: false } },
  args: { playerId: 'victor-wembanyama' },
}
