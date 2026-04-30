import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agnopol | One World, One Breath',
  description: 'A decentralized coordinate for humanitarian support and ecological action.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 目前默认使用 en，后续我们将通过路径实现多语言跳转
    <html lang="en">
      <body className="antialiased">
        <div className="bg-glow" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
