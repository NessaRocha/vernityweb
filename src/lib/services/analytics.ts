import { config } from '@/lib/config';

/**
 * Interface para eventos de analytics
 */
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, unknown>;
}

/**
 * Interface para dados de página
 */
export interface PageViewData {
  page_title: string;
  page_location: string;
  page_referrer?: string;
}

/**
 * Serviço de Google Analytics
 */
class GoogleAnalytics {
  private isInitialized = false;

  /**
   * Inicializa o Google Analytics
   */
  initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    if (config.analytics.googleAnalyticsId) {
      // Carrega o script do Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`;
      document.head.appendChild(script);

      // Configura o gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };

      window.gtag('js', new Date());
      window.gtag('config', config.analytics.googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href
      });

      this.isInitialized = true;
    }
  }

  /**
   * Envia evento de página visualizada
   */
  trackPageView(data: PageViewData): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.gtag('config', config.analytics.googleAnalyticsId, {
      page_title: data.page_title,
      page_location: data.page_location,
      page_referrer: data.page_referrer
    });
  }

  /**
   * Envia evento customizado
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.customParameters
    });
  }

  /**
   * Envia evento de conversão
   */
  trackConversion(conversionId: string, conversionLabel: string, value?: number): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value
    });
  }
}

/**
 * Serviço de Meta Pixel (versão moderna)
 */
class MetaPixel {
  private isInitialized = false;

  /**
   * Inicializa o Meta Pixel com consentimento
   */
  initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    if (config.analytics.facebookPixelId) {
      // Carrega o script do Meta Pixel (versão moderna)
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);

      // Configura o Meta Pixel com consentimento
      window.fbq = window.fbq || function(...args: unknown[]) {
        (window.fbq as any).q = (window.fbq as any).q || [];
        (window.fbq as any).q.push(args);
      };

      // Inicializa com consentimento (GDPR compliant)
      window.fbq('consent', 'grant');
      window.fbq('init', config.analytics.facebookPixelId, {
        autoConfig: true,
        debug: false
      });
      
      // Só tracka PageView se consentimento foi dado
      if (this.hasConsent()) {
        window.fbq('track', 'PageView');
      }

      this.isInitialized = true;
    }
  }

  /**
   * Verifica se o usuário deu consentimento
   */
  private hasConsent(): boolean {
    return localStorage.getItem('cookie-consent') === 'accepted';
  }

  /**
   * Envia evento de página visualizada (com consentimento)
   */
  trackPageView(): void {
    if (!this.isInitialized || typeof window === 'undefined' || !this.hasConsent()) return;

    window.fbq('track', 'PageView');
  }

  /**
   * Envia evento customizado (com consentimento)
   */
  trackEvent(eventName: string, parameters?: Record<string, unknown>): void {
    if (!this.isInitialized || typeof window === 'undefined' || !this.hasConsent()) return;

    window.fbq('track', eventName, parameters);
  }
}

/**
 * Serviço principal de analytics
 */
export class AnalyticsService {
  private googleAnalytics: GoogleAnalytics;
  private metaPixel: MetaPixel;

  constructor() {
    this.googleAnalytics = new GoogleAnalytics();
    this.metaPixel = new MetaPixel();
  }

  /**
   * Inicializa todos os serviços de analytics
   */
  initialize(): void {
    this.googleAnalytics.initialize();
    this.metaPixel.initialize();
  }

  /**
   * Envia evento de página visualizada
   */
  trackPageView(data: PageViewData): void {
    this.googleAnalytics.trackPageView(data);
    this.metaPixel.trackPageView();
  }

  /**
   * Envia evento customizado
   */
  trackEvent(event: AnalyticsEvent): void {
    this.googleAnalytics.trackEvent(event);
    this.metaPixel.trackEvent(event.action, event.customParameters);
  }

  /**
   * Envia evento de conversão
   */
  trackConversion(conversionId: string, conversionLabel: string, value?: number): void {
    this.googleAnalytics.trackConversion(conversionId, conversionLabel, value);
  }

  /**
   * Envia evento de contato
   */
  trackContact(method: 'email' | 'whatsapp' | 'form'): void {
    this.trackEvent({
      action: 'contact',
      category: 'engagement',
      label: method
    });
  }

  /**
   * Envia evento de visualização de portfólio
   */
  trackPortfolioView(projectName: string): void {
    this.trackEvent({
      action: 'view_item',
      category: 'portfolio',
      label: projectName
    });
  }

  /**
   * Envia evento de clique em CTA
   */
  trackCTAClick(ctaType: string, location: string): void {
    this.trackEvent({
      action: 'click',
      category: 'cta',
      label: `${ctaType}_${location}`
    });
  }
}

/**
 * Instância global do serviço de analytics
 */
export const analytics = new AnalyticsService();

/**
 * Funções de conveniência para tracking
 */
export function trackEvent(event: AnalyticsEvent): void {
  analytics.trackEvent(event);
}

export function trackPageView(data: PageViewData): void {
  analytics.trackPageView(data);
}

export function trackContact(method: 'email' | 'whatsapp' | 'form'): void {
  analytics.trackContact(method);
}

export function trackPortfolioView(projectName: string): void {
  analytics.trackPortfolioView(projectName);
}

export function trackCTAClick(ctaType: string, location: string): void {
  analytics.trackCTAClick(ctaType, location);
}
