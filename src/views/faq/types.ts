export interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface FaqCategory {
  id: string
  name: string
  description?: string
}

export interface FaqPageProps {
  items: FaqItem[]
  categories?: FaqCategory[]
  title?: string
  subtitle?: string
}
