export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponent {
  variant?: 'primary' | 'secondary' | 'outline' | 'hero-primary' | 'hero-outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps extends BaseComponent {
  title?: string
  description?: string
  image?: string
  href?: string
}

export interface SectionProps extends BaseComponent {
  id?: string
  title?: string
  subtitle?: string
}

export interface NavItem {
  href: string
  label: string
  icon?: React.ReactNode
}

export interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
}

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title: string
    description: string
    image: string
    type: 'website' | 'article'
  }
}
