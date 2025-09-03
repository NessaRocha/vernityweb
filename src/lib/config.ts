import { siteConfig } from '@/data/site';

/**
 * Configurações globais do projeto
 */
export const config = {
  // Configurações da API
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    timeout: 5000,
    retries: 3
  },

  // Configurações de SEO
  seo: {
    defaultTitle: siteConfig.seo.defaultTitle,
    defaultDescription: siteConfig.seo.defaultDescription,
    defaultKeywords: siteConfig.seo.keywords.join(', '),
    siteName: siteConfig.name,
    siteUrl: siteConfig.url,
    author: siteConfig.author,
    twitterHandle: '@vernityweb',
    ogImage: '/assets/images/og-image.jpg'
  },

  // Configurações de analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''
  },

  // Configurações de contato
  contact: {
    email: siteConfig.contact.email,
    phone: siteConfig.contact.phone,
    whatsapp: siteConfig.contact.whatsapp,
    location: siteConfig.contact.location,
    businessHours: {
      monday: '09:00 - 18:00',
      tuesday: '09:00 - 18:00',
      wednesday: '09:00 - 18:00',
      thursday: '09:00 - 18:00',
      friday: '09:00 - 18:00',
      saturday: '09:00 - 12:00',
      sunday: 'Fechado'
    }
  },

  // Configurações de redes sociais
  social: {
    linkedin: siteConfig.social.linkedin,
    github: siteConfig.social.github,
    instagram: siteConfig.social.instagram
  },

  // Configurações de performance
  performance: {
    imageOptimization: {
      quality: 85,
      formats: ['webp', 'avif'],
      sizes: [640, 768, 1024, 1280, 1536]
    },
    lazyLoading: {
      threshold: 0.1,
      rootMargin: '50px'
    }
  },

  // Configurações de acessibilidade
  accessibility: {
    skipToContent: true,
    focusVisible: true,
    reducedMotion: true,
    highContrast: false
  },

  // Configurações de cache
  cache: {
    staticAssets: 31536000, // 1 ano
    apiResponses: 3600, // 1 hora
    images: 86400 // 1 dia
  }
} as const;

/**
 * Configurações de ambiente
 */
export const env = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
} as const;

/**
 * Configurações de debug
 */
export const debug = {
  enabled: env.isDevelopment,
  logLevel: env.isDevelopment ? 'debug' : 'error',
  showPerformanceMetrics: env.isDevelopment
} as const;
