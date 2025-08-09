import { FaqItem, FaqCategory } from './types'

export const faqCategories: FaqCategory[] = [
  {
    id: 'geral',
    name: 'Geral',
    description: 'Perguntas gerais sobre nossos serviços'
  },
  {
    id: 'desenvolvimento',
    name: 'Desenvolvimento',
    description: 'Dúvidas sobre o processo de desenvolvimento'
  },
  {
    id: 'manutencao',
    name: 'Manutenção',
    description: 'Informações sobre manutenção e suporte'
  }
]

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O tempo de desenvolvimento varia conforme a complexidade do projeto. Sites simples podem levar de 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas. Fornecemos um cronograma detalhado após a análise dos requisitos.',
    category: 'desenvolvimento'
  },
  {
    id: '2',
    question: 'Vocês fazem manutenção do site após a entrega?',
    answer: 'Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backup automático, monitoramento de performance e pequenas alterações de conteúdo.',
    category: 'manutencao'
  },
  {
    id: '3',
    question: 'O site será responsivo (mobile-friendly)?',
    answer: 'Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em smartphones, tablets e desktops. Testamos em diversos dispositivos.',
    category: 'desenvolvimento'
  },
  {
    id: '4',
    question: 'Vocês trabalham com SEO?',
    answer: 'Sim, aplicamos as melhores práticas de SEO técnico durante o desenvolvimento, incluindo otimização de velocidade, meta tags, estrutura de dados estruturados e otimização de imagens.',
    category: 'desenvolvimento'
  },
  {
    id: '5',
    question: 'Qual é o processo de desenvolvimento?',
    answer: 'Nosso processo inclui: 1) Briefing e análise de requisitos, 2) Criação do design e protótipo, 3) Desenvolvimento e programação, 4) Testes e revisões, 5) Entrega e treinamento.',
    category: 'geral'
  },
  {
    id: '6',
    question: 'Vocês oferecem suporte técnico?',
    answer: 'Sim, oferecemos suporte técnico completo. Temos diferentes planos de suporte que incluem resolução de problemas, atualizações, backups e monitoramento 24/7.',
    category: 'manutencao'
  }
]
