export const siteConfig = {
  name: 'Vernity Web',
  description: 'Desenvolvimento web profissional especializado em soluções digitais únicas',
  url: 'https://vernity.com.br',
  ogImage: '/images/og-image.jpg',
  creator: 'Vernity Web',
  themeColor: '#ef4444',
  locale: 'pt-BR',
  version: '1.0.0'
} as const

export const contactConfig = {
  whatsapp: {
    number: '+5551996138467',
    message: 'Olá! Gostaria de conversar sobre um projeto web.'
  },
  email: 'contato@vernity.com.br',
  location: 'Rio Grande do Sul, Brasil'
} as const

export const servicesConfig = [
  {
    id: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    description: 'Sites modernos e responsivos usando as melhores tecnologias',
    icon: 'code',
    features: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Lojas virtuais completas e otimizadas para vendas',
    icon: 'shopping-cart',
    features: ['Pagamentos', 'Estoque', 'SEO', 'Analytics']
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Páginas de conversão otimizadas para campanhas',
    icon: 'target',
    features: ['Alta conversão', 'Responsivo', 'Rápido', 'SEO']
  }
] as const
