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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-large.ico" sizes="72x72" />
        <link rel="icon" href="/favicon-large.ico" sizes="96x96" />
        <link rel="apple-touch-icon" href="/favicon-large.ico" sizes="270x270" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
