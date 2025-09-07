'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio (o Netlify processará automaticamente)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };


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
        className="py-24 bg-black" 
        id="contato"
        aria-labelledby="contact-heading"
      >
        <Container>
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <h1 
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            <span className="text-white">Entre em</span>{" "}
            <span className="text-red-500">Contato</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 font-medium">
            Vamos criar algo incrível juntos!
          </h2>
        </div>

        {/* Layout de 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Coluna Esquerda - Informações de Contato */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-8">
              {/* Descrição */}
              <p className="text-lg text-gray-200 leading-relaxed">
                Transforme sua visão em realidade digital. Desenvolva soluções web únicas que elevam sua marca e geram resultados.
              </p>
            </div>

            {/* Informações de Contato - Centralizadas verticalmente */}
            <div className="flex-1 flex items-center justify-center">
              <address className="space-y-6 not-italic text-center">
                {/* Email */}
                <div className="flex items-center justify-center space-x-4">
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
                <div className="flex items-center justify-center space-x-4">
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
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Torres, Brasil</span>
                </div>
              </address>
            </div>

            {/* Botões de CTA - Movidos para baixo */}
            <div className="space-y-4 mt-8">
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

          {/* Coluna Direita - Formulário */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <form 
              name="contato-site"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Formulário de contato"
            >
              {/* Campos ocultos para Netlify Forms */}
              <input type="hidden" name="form-name" value="contato-site" />
              <p style={{display:"none"}}>
                <label>Não preencha: <input name="bot-field" /></label>
              </p>

              {/* Nome */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                  aria-required="true"
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Endereço de email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  aria-required="true"
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                />
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="subject" className="sr-only">
                  Assunto da mensagem
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject || ''}
                  onChange={handleInputChange}
                  placeholder="Assunto"
                  required
                  aria-required="true"
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sua Mensagem"
                  rows={6}
                  required
                  aria-required="true"
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Mensagem de Sucesso */}
              {isSubmitted && (
                <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Mensagem Enviada!</span>
                  </div>
                  <p className="text-sm mb-3">Obrigado pelo seu contato. Retornaremos em breve!</p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition-colors duration-200"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              )}

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 focus:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-200"
                aria-describedby="form-description"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
