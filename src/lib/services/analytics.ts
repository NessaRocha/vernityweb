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
 * Serviço de Facebook Pixel
 */
class FacebookPixel {
  private isInitialized = false;

  /**
   * Inicializa o Facebook Pixel
   */
  initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    if (config.analytics.facebookPixelId) {
      // Carrega o script do Facebook Pixel
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${config.analytics.facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      this.isInitialized = true;
    }
  }

  /**
   * Envia evento de página visualizada
   */
  trackPageView(): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.fbq('track', 'PageView');
  }

  /**
   * Envia evento customizado
   */
  trackEvent(eventName: string, parameters?: Record<string, unknown>): void {
    if (!this.isInitialized || typeof window === 'undefined') return;

    window.fbq('track', eventName, parameters);
  }
}

/**
 * Serviço principal de analytics
 */
export class AnalyticsService {
  private googleAnalytics: GoogleAnalytics;
  private facebookPixel: FacebookPixel;

  constructor() {
    this.googleAnalytics = new GoogleAnalytics();
    this.facebookPixel = new FacebookPixel();
  }

  /**
   * Inicializa todos os serviços de analytics
   */
  initialize(): void {
    this.googleAnalytics.initialize();
    this.facebookPixel.initialize();
  }

  /**
   * Envia evento de página visualizada
   */
  trackPageView(data: PageViewData): void {
    this.googleAnalytics.trackPageView(data);
    this.facebookPixel.trackPageView();
  }

  /**
   * Envia evento customizado
   */
  trackEvent(event: AnalyticsEvent): void {
    this.googleAnalytics.trackEvent(event);
    this.facebookPixel.trackEvent(event.action, event.customParameters);
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
