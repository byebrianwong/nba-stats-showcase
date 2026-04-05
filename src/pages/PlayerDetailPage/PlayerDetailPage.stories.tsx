import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { PlayerDetailPage } from './PlayerDetailPage'

const meta = {
  title: 'Pages/PlayerDetailPage',
  component: PlayerDetailPage,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/player/lebron-james']}>
        <Routes>
          <Route
            path="/player/:id"
            element={
              <div className="bg-bg-primary min-h-screen p-8">
                <Story />
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PlayerDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const LeBron: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/player/lebron-james']}>
        <Routes>
          <Route
            path="/player/:id"
            element={
              <div className="bg-bg-primary min-h-screen p-8">
                <Story />
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
}

export const Curry: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/player/stephen-curry']}>
        <Routes>
          <Route
            path="/player/:id"
            element={
              <div className="bg-bg-primary min-h-screen p-8">
                <Story />
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
}

export const Jokic: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/player/nikola-jokic']}>
        <Routes>
          <Route
            path="/player/:id"
            element={
              <div className="bg-bg-primary min-h-screen p-8">
                <Story />
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
}

export const Wembanyama: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/player/victor-wembanyama']}>
        <Routes>
          <Route
            path="/player/:id"
            element={
              <div className="bg-bg-primary min-h-screen p-8">
                <Story />
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
}
