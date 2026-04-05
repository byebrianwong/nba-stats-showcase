import { Outlet } from 'react-router-dom'
import { NeonText } from '../../components/atoms/NeonText'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* Background gradient mesh */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 10% 20%, rgba(0, 240, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(176, 38, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 107, 43, 0.02) 0%, transparent 60%)
          `,
        }}
      />

      {/* Nav */}
      <nav className="relative border-b border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 no-underline">
            <span className="text-2xl">🏀</span>
            <NeonText color="cyan" size="md" glow>
              NBA Showcase
            </NeonText>
          </a>
          <span className="text-text-muted text-xs tracking-widest uppercase">
            Storybook Demo
          </span>
        </div>
      </nav>

      {/* Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}
