import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { PlayerGridPage } from './pages/PlayerGridPage'
import { PlayerDetailPage } from './pages/PlayerDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PlayerGridPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
