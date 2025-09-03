/**
 * Breakpoints responsivos
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

/**
 * Delays de animação
 */
export const ANIMATION_DELAYS = {
  fast: 100,
  normal: 300,
  slow: 500,
  slower: 700
} as const;

/**
 * Durações de transição
 */
export const TRANSITION_DURATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms'
} as const;

/**
 * Z-index padrões
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070
} as const;

/**
 * Cores do tema
 */
export const THEME_COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  }
} as const;

/**
 * Mensagens de erro padrão
 */
export const ERROR_MESSAGES = {
  required: 'Este campo é obrigatório',
  email: 'Digite um email válido',
  phone: 'Digite um telefone válido',
  minLength: (min: number) => `Mínimo de ${min} caracteres`,
  maxLength: (max: number) => `Máximo de ${max} caracteres`,
  invalidUrl: 'Digite uma URL válida',
  invalidCPF: 'CPF inválido',
  invalidCNPJ: 'CNPJ inválido'
} as const;

/**
 * Mensagens de sucesso
 */
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Formulário enviado com sucesso!',
  dataSaved: 'Dados salvos com sucesso!',
  emailSent: 'Email enviado com sucesso!',
  whatsappOpened: 'WhatsApp aberto com sucesso!'
} as const;

/**
 * Configurações de scroll
 */
export const SCROLL_CONFIG = {
  smooth: { behavior: 'smooth' as const },
  instant: { behavior: 'auto' as const }
} as const;
