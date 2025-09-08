'use client';

import React from 'react';
import { Container, GhlFormIframe } from '@/components/ui';

export default function Connect() {
  // URL do formulário GHL - Sites → Forms → (seu formulário) → Integrate/Embed → copiar URL completa
  const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/0aIDsHXZl6w4uZQXecUo";

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Entre em Contato",
            "description": "Transforme sua visão em realidade digital. Desenvolva soluções web únicas que elevam sua marca e geram resultados.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Vernity Web",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+55-51-99613-8467",
                  "contactType": "customer service",
                  "email": "nessasim@hotmail.com",
                  "areaServed": "BR",
                  "availableLanguage": "Portuguese"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Torres",
                "addressCountry": "BR"
              }
            }
          })
        }}
      />
      
      <section 
        className="pt-12 pb-24 bg-black" 
        id="contato"
        aria-labelledby="contact-heading"
      >
        <Container>
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <h1 
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            <span className="text-white">Entre em</span>{" "}
            <span className="text-red-500">Contato</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 font-medium">
            Vamos criar algo incrível juntos!
          </h2>
        </div>

        {/* Layout de 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          
          {/* Coluna Esquerda - Informações de Contato */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 flex-1">
              {/* Descrição */}
              <p className="text-lg text-gray-200 leading-relaxed">
                Transforme sua visão em realidade digital. Desenvolva soluções web únicas que elevam sua marca e geram resultados.
              </p>

              {/* Soluções e Benefícios */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Nossas Soluções</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" style={{ width: '8px', height: '8px' }}></div>
                    <div>
                      <h4 className="text-white font-medium">Sites Responsivos</h4>
                      <p className="text-gray-300 text-sm">Design moderno que funciona perfeitamente em todos os dispositivos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" style={{ width: '8px', height: '8px' }}></div>
                    <div>
                      <h4 className="text-white font-medium">Performance Otimizada</h4>
                      <p className="text-gray-300 text-sm">Carregamento rápido e otimização para SEO e conversões</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" style={{ width: '8px', height: '8px' }}></div>
                    <div>
                      <h4 className="text-white font-medium">Suporte Contínuo</h4>
                      <p className="text-gray-300 text-sm">Acompanhamento e manutenção para garantir o melhor desempenho</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantia de Qualidade */}
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Garantia de Qualidade</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Trabalhamos com as melhores práticas de desenvolvimento, garantindo código limpo, 
                  segurança e performance excepcional para seu projeto.
                </p>
              </div>

              {/* Informações de Contato */}
              <address className="space-y-4 not-italic">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:nessasim@hotmail.com" 
                    className="text-white hover:text-red-400 transition-colors duration-200"
                    aria-label="Enviar email para nessasim@hotmail.com"
                  >
                    nessasim@hotmail.com
                  </a>
                </div>

                {/* Telefone */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+5551996138467" 
                    className="text-white hover:text-red-400 transition-colors duration-200"
                    aria-label="Ligar para +55 51 99613-8467"
                  >
                    +55 (51) 99613-8467
                  </a>
                </div>

                {/* Localização */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Torres, Brasil</span>
                </div>
              </address>
            </div>

            {/* Botões de CTA - Alinhados com a parte inferior do formulário */}
            <div className="space-y-3 mt-8">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5551996138467" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Falar no WhatsApp
              </a>

              {/* Email */}
              <a 
                href="mailto:nessasim@hotmail.com"
                className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Enviar Email
              </a>
            </div>
          </div>

          {/* Coluna Direita - Formulário GHL */}
          <div>
            <GhlFormIframe url={GHL_FORM_URL} />
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
