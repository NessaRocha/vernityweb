export const APP_CONFIG = {
  name: 'Vernity Web',
  description: 'Desenvolvimento web profissional especializado em soluções digitais únicas',
  url: 'https://vernity.com.br',
  author: 'Vernity Web',
  keywords: ['desenvolvimento web', 'react', 'next.js', 'tailwind css', 'typescript']
} as const

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/5551996138467',
  email: 'contato@vernity.com.br',
  instagram: 'https://instagram.com/vernity',
  linkedin: 'https://linkedin.com/company/vernity'
} as const

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: SOCIAL_LINKS.whatsapp, label: 'Contato' }
] as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500
} as const
