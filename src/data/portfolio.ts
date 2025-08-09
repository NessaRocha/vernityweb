export const portfolioItems = [
  {
    id: 'domma-electra',
    title: 'Domma Electra',
    description: 'Site institucional moderno para empresa do setor elétrico, focado em apresentar serviços e projetos de forma profissional.',
    image: '/images/dommaelectrasite.webp',
    category: 'Site Institucional',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    url: 'https://dommaelectra.com.br',
    featured: true,
    completedAt: '2024-01-15'
  },
  {
    id: 'cris-psicologo',
    title: 'Cris Psicólogo',
    description: 'Landing page profissional para psicólogo, com foco em conversão e agendamento de consultas online.',
    image: '/images/crispsicologosite.webp',
    category: 'Landing Page',
    technologies: ['WordPress', 'PHP', 'CSS3'],
    url: 'https://crispsico.com.br',
    featured: true,
    completedAt: '2024-02-20'
  }
] as const

export const portfolioCategories = [
  'Todos',
  'Site Institucional',
  'Landing Page',
  'E-commerce',
  'Aplicação Web'
] as const

export type PortfolioItem = typeof portfolioItems[number]
export type PortfolioCategory = typeof portfolioCategories[number]
