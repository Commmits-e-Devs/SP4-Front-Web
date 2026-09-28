import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// next/font baixa as fontes no build e cria uma CSS variable para cada uma.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Jovi SmartFlow Camera — Aponte. Ele calibra.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${space.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="bg-fundo-claro font-main leading-[1.6] text-texto antialiased">
        {children}
      </body>
    </html>
  )
}
