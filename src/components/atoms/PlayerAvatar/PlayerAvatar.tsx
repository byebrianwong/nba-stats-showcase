export interface PlayerAvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glowColor?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
}

export function PlayerAvatar({
  src,
  alt,
  size = 'md',
  glowColor = '#00f0ff',
  className = '',
}: PlayerAvatarProps) {
  return (
    <div
      className={`relative rounded-full ${sizeClasses[size]} ${className}`}
      style={{
        boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, ${glowColor}40)`,
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full bg-bg-secondary overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.style.background = `linear-gradient(135deg, ${glowColor}40, ${glowColor}10)`
            }}
          />
        </div>
      </div>
    </div>
  )
}
