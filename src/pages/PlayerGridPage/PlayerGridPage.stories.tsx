import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
import { PlayerGridPage } from './PlayerGridPage'

const meta = {
  title: 'Pages/PlayerGridPage',
  component: PlayerGridPage,
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
} satisfies Meta<typeof PlayerGridPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
