import { siteConfig } from '@/data/site';

/**
 * Interface para dados do formulário de contato
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  company?: string;
  budget?: string;
  timeline?: string;
}

/**
 * Serviço para envio de formulário de contato
 */
export async function sendContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Em produção, aqui seria uma chamada para API real
    // Por enquanto, simulamos o envio
    
    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Todos os campos obrigatórios devem ser preenchidos');
    }

    // Simula delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Em produção, enviaria para API
    console.log('Dados do formulário:', data);

    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    };
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.'
    };
  }
}

/**
 * Abre WhatsApp com mensagem pré-formatada
 */
export function openWhatsApp(message?: string): void {
  const defaultMessage = "Olá! Gostaria de conversar sobre um projeto web.";
  const phoneNumber = siteConfig.contact.whatsapp;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Abre cliente de email com dados pré-preenchidos
 */
export function openEmail(subject?: string, body?: string): void {
  const defaultSubject = "Projeto Web - Consulta";
  const defaultBody = "Olá! Gostaria de conversar sobre um projeto web.";
  
  const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject || defaultSubject)}&body=${encodeURIComponent(body || defaultBody)}`;
  
  window.open(mailtoUrl);
}

/**
 * Formata dados de contato para exibição
 */
export function formatContactInfo() {
  return {
    email: siteConfig.contact.email,
    phone: siteConfig.contact.phone,
    location: siteConfig.contact.location,
    whatsapp: siteConfig.contact.whatsapp
  };
}

/**
 * Valida dados do formulário de contato
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push('Nome é obrigatório');
  }

  if (!data.email.trim()) {
    errors.push('Email é obrigatório');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.subject.trim()) {
    errors.push('Assunto é obrigatório');
  }

  if (!data.message.trim()) {
    errors.push('Mensagem é obrigatória');
  } else if (data.message.length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
