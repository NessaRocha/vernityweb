// ===== NAVBAR TYPES =====
export interface NavbarProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  navItems: Array<{
    href: string
    label: string
  }>
}

// ===== HERO TYPES =====
export interface HeroProps {
  title: {
    lines: Array<{
      text: string
      color: 'white' | 'red'
    }>
  }
  description: string
  buttons: Array<{
    text: string
    variant: 'hero-primary' | 'hero-outline'
    href: string
    icon?: string
  }>
  image: {
    src: string
    alt: string
    className: string
  }
  geometricElements: Array<{
    className: string
    animation: {
      x: number[]
      y: number[]
      rotate?: number[]
      scale?: number[]
      duration: number
    }
  }>
}

// ===== ABOUT TYPES =====
export interface AboutProps {
  title: {
    text: string
    highlight: string
  }
  paragraphs: string[]
  skills: {
    title: {
      text: string
      highlight: string
    }
    list: string[]
  }
  githubButton: {
    text: string
    href: string
    icon: string
  }
}

// ===== SERVICES TYPES =====
export interface Service {
  icon: string
  title: string
  description: string
}

export interface ServicesProps {
  title: {
    text: string
  }
  services: Service[]
}

// ===== PORTFOLIO TYPES =====
export interface Project {
  title: string
  description: string
  image: string
  url: string
  tech: string[]
}

export interface PortfolioProps {
  title: {
    text: string
    highlight: string
  }
  projects: Project[]
}

// ===== CONTACT TYPES =====
export interface ContactInfo {
  icon: string
  text: string
}

export interface ContactButton {
  text: string
  href: string
  variant: 'whatsapp' | 'email'
  icon: string
}

export interface ContactProps {
  title: {
    text: string
    highlight: string
  }
  heading: string
  description: string
  contactInfo: ContactInfo[]
  buttons: ContactButton[]
}

// ===== FOOTER TYPES =====
export interface QuickLink {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
}

export interface FooterProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  description: string
  quickLinks: QuickLink[]
  socialLinks: SocialLink[]
  copyright: {
    text: string
  }
}
