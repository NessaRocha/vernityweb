import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vernity Web - Desenvolvimento Web Profissional',
  description: 'Desenvolvimento que traduz sua marca em performance, elegância e resultados.',
  keywords: 'desenvolvimento web, React, Next.js, TypeScript, Tailwind CSS',
  authors: [{ name: 'Vernity Web' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Vernity Web - Desenvolvimento Web Profissional',
    description: 'Desenvolvimento que traduz sua marca em performance, elegância e resultados.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
