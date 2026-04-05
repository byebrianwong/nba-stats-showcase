import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './AppLayout'

const meta = {
  title: 'Layouts/AppLayout',
  component: AppLayout,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route element={<Story />}>
            <Route
              path="*"
              element={
                <div className="text-text-secondary text-center py-20">
                  <p className="text-lg">Page content renders here</p>
                </div>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
