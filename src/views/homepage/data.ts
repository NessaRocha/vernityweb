// ===== NAVBAR DATA =====
export const navbarData = {
  logo: {
    src: '/images/logo.svg',
    alt: 'Vernity Web',
    width: 300,
    height: 100
  },
  navItems: [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: 'https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web.', label: 'Contato' }
  ]
}

// ===== HERO DATA =====
export const heroData = {
  title: {
    lines: [
      { text: 'DESENVOLVIMENTO', color: 'white' as const },
      { text: 'QUE TRADUZ', color: 'red' as const },
      { text: 'SUA MARCA EM', color: 'white' as const },
      { text: 'PERFORMANCE,', color: 'red' as const },
      { text: 'ELEGÂNCIA E', color: 'white' as const },
      { text: 'RESULTADOS.', color: 'red' as const }
    ]
  },
  description: 'Sou uma desenvolvedora web profissional\nespecializada em criar soluções digitais únicas.',
  buttons: [
    {
      text: 'Ver Portfólio',
      variant: 'hero-primary' as const,
      href: '#portfolio'
    },
    {
      text: 'Fale Comigo',
      variant: 'hero-outline' as const,
      href: 'https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web para minha empresa.',
      icon: 'whatsapp'
    }
  ],
  image: {
    src: '/images/banner.png',
    alt: 'Vernity Web - Desenvolvedora Web',
    className: 'w-96 h-[500px] md:w-[500px] md:h-[650px] lg:w-[550px] lg:h-[700px]'
  },
  geometricElements: [
    {
      className: 'top-12 -left-12 w-24 h-24 bg-gray-500/14 rounded-sm border border-gray-400/30 shadow-md shadow-gray-500/10',
      animation: {
        x: [0, 15, 0],
        y: [0, -12, 0],
        rotate: [0, 360, 0],
        duration: 5.2
      }
    },
    {
      className: 'top-1/3 -left-8 w-16 h-16 bg-red-600/18 rounded-sm border border-red-500/35 shadow-md shadow-red-600/12',
      animation: {
        x: [0, -12, 0],
        y: [0, 8, 0],
        rotate: [0, -360, 0],
        duration: 3.9
      }
    },
    {
      className: 'top-1/2 -left-16 w-32 h-32 bg-red-600/21 rounded-sm border border-red-500/40 shadow-md shadow-red-600/15',
      animation: {
        x: [0, -20, 0],
        y: [0, 15, 0],
        rotate: [0, 360, 0],
        duration: 6.5
      }
    },
    {
      className: 'bottom-1/3 left-80 w-20 h-20 bg-red-600/14 rounded-sm border border-red-500/30 shadow-md shadow-red-600/10',
      animation: {
        x: [0, 10, 0],
        y: [0, -8, 0],
        rotate: [0, -360, 0],
        duration: 5.2
      }
    },
    {
      className: '-top-4 -right-2 w-40 h-40 bg-red-500/40 rounded-full border border-red-500/80 shadow-lg shadow-red-500/30',
      animation: {
        x: [0, -40, 0],
        y: [0, 30, 0],
        scale: [1, 1.3, 1],
        rotate: [0, 360, 0],
        duration: 6
      }
    },
    {
      className: '-bottom-6 -left-12 w-28 h-28 bg-gray-500/50 rounded-full border border-gray-500/90 shadow-lg shadow-gray-500/40',
      animation: {
        x: [0, 35, 0],
        y: [0, -25, 0],
        scale: [1, 0.7, 1],
        rotate: [0, -360, 0],
        duration: 5
      }
    }
  ]
}

// ===== ABOUT DATA =====
export const aboutData = {
  title: {
    text: 'Sobre',
    highlight: 'Mim'
  },
  paragraphs: [
    'Tenho uma trajetória sólida no desenvolvimento web, transformando código em experiências digitais significativas para usuários e clientes. Minha missão vai além de projetos funcionais - busco criar soluções que sejam envolventes desde o primeiro contato e consistentes com os objetivos de negócio.',
    'Especializo-me em tecnologias como React, Node.js, WordPress e Shopify, além de expertise em UX, design responsivo e melhores práticas para performance, acessibilidade e SEO. Foco em criar interfaces intuitivas, sistemas escaláveis e projetos customizados, do código ao comportamento do usuário.',
    'Cada linha de código que escrevo incorpora estratégia, atenção à experiência do usuário e uma abordagem inovadora. Meu foco, do planejamento à entrega, é consistentemente construir experiências digitais completas, otimizadas e orientadas pela identidade.'
  ],
  skills: {
    title: {
      text: 'Minhas',
      highlight: 'Habilidades'
    },
    list: [
      'React.js', 'Node.js', 'WordPress', 'Shopify', 'JavaScript',
      'HTML5', 'CSS3', 'Responsive Design', 'UI/UX Design', 'SEO',
      'Acessibilidade'
    ]
  },
  githubButton: {
    text: 'Ver meus projetos no GitHub',
    href: 'https://github.com/NessaRocha',
    icon: 'github'
  }
}

// ===== SERVICES DATA =====
export const servicesData = {
  title: {
    text: 'Serviços'
  },
  services: [
    {
      icon: 'desktop',
      title: 'Arquitetura Web Sob Medida',
      description: 'Sites rápidos, seguros e alinhados ao seu propósito digital.'
    },
    {
      icon: 'design',
      title: 'Design Centrado no Usuário',
      description: 'Experiências visuais que encantam e facilitam a navegação.'
    },
    {
      icon: 'performance',
      title: 'Alta Performance e Resultados',
      description: 'Otimizações técnicas para velocidade, SEO e conversão.'
    }
  ]
}

// ===== PORTFOLIO DATA =====
export const portfolioData = {
  title: {
    text: 'Meu',
    highlight: 'Portfólio'
  },
  projects: [
    {
      title: 'Domma Electra',
      description: 'Site institucional para empresa de automação residencial, com design moderno e foco em conversão.',
      image: '/images/dommaelectrasite.webp',
      url: 'https://www.dommaelectra.com.br',
      tech: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Cris Psicólogo',
      description: 'Site profissional para psicólogo, com blog integrado e sistema de agendamento.',
      image: '/images/crispsicologosite.webp',
      url: 'https://www.crispsicologo.com.br',
      tech: ['WordPress', 'PHP', 'CSS3']
    }
  ]
}

// ===== CONTACT DATA =====
export const contactData = {
  title: {
    text: 'Entre em',
    highlight: 'Contato'
  },
  heading: 'Vamos criar algo incrível juntas!',
  description: 'Transforme sua visão em realidade digital. Estou pronta para desenvolver soluções web únicas que elevem sua marca e gerem resultados excepcionais.',
  contactInfo: [
    {
      icon: 'email',
      text: 'nessasim@hotmail.com'
    },
    {
      icon: 'phone',
      text: '+55 (51) 99613-8467'
    },
    {
      icon: 'location',
      text: 'Torres, RS - Brasil'
    }
  ],
  buttons: [
    {
      text: 'Falar no WhatsApp',
      href: 'https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web para minha empresa.',
      variant: 'whatsapp' as const,
      icon: 'whatsapp'
    },
    {
      text: 'Enviar Email',
      href: 'mailto:nessasim@hotmail.com',
      variant: 'email' as const,
      icon: 'email'
    }
  ]
}

// ===== FOOTER DATA =====
export const footerData = {
  logo: {
    src: '/images/logo.svg',
    alt: 'Vernity Web',
    width: 150,
    height: 50
  },
  description: 'Desenvolvimento que traduz sua marca em performance, elegância e resultados.',
  quickLinks: [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' }
  ],
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nessarocha' },
    { name: 'GitHub', url: 'https://github.com/NessaRocha' },
    { name: 'WhatsApp', url: 'https://wa.me/5551996138467' },
    { name: 'Instagram', url: 'https://instagram.com/vernityweb' }
  ],
  copyright: {
    text: 'Vernity Web. Todos os direitos reservados.'
  }
}

// ===== ICONS DATA =====
export const icons = {
  whatsapp: 'whatsapp',
  github: 'github',
  desktop: 'desktop',
  design: 'design',
  performance: 'performance',
  email: 'email',
  phone: 'phone',
  location: 'location'
}
