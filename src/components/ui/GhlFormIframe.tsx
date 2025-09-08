"use client";

import { useEffect, useState } from 'react';

type Props = { url: string };

export default function GhlFormIframe({ url }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // Nota: Iframes de domínios diferentes (como GHL) não podem ser customizados via CSS externo
    // devido à política Same-Origin Policy do navegador
    // A customização deve ser feita no próprio painel do GHL
    console.log('GHL Form iframe carregado - customização deve ser feita no painel GHL');
    
    // Verificar submissão a cada 2 segundos
    const interval = setInterval(detectFormSubmission, 2000);
    
    return () => clearInterval(interval);
  }, [formSubmitted]);

  // Função para corrigir IDs duplicados no iframe (quando possível)
  const fixDuplicateIds = () => {
    try {
      // Tentativa de acessar o iframe (pode falhar devido à Same-Origin Policy)
      const iframe = document.querySelector('iframe[src*="leadconnectorhq.com"]') as HTMLIFrameElement;
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument;
        const inputs = doc.querySelectorAll('input, textarea, select');
        const idCounts: { [key: string]: number } = {};
        
        // Contar IDs
        inputs.forEach((input) => {
          const id = input.getAttribute('id');
          if (id) {
            idCounts[id] = (idCounts[id] || 0) + 1;
          }
        });
        
        // Corrigir IDs duplicados
        Object.keys(idCounts).forEach((id) => {
          if (idCounts[id] > 1) {
            const elements = doc.querySelectorAll(`#${id}`);
            elements.forEach((element, index) => {
              if (index > 0) {
                element.setAttribute('id', `${id}_${index + 1}`);
              }
            });
          }
        });
        
        console.log('IDs duplicados corrigidos no formulário GHL');
      }
    } catch (error) {
      // Same-Origin Policy impede acesso - isso é normal e esperado
      console.log('Não foi possível acessar o iframe GHL (Same-Origin Policy) - IDs devem ser únicos no painel GHL');
    }
  };

  const handleIframeLoad = () => {
    setIsLoaded(true);
    setFormSubmitted(false);
    // Tentar corrigir IDs duplicados após o iframe carregar
    setTimeout(fixDuplicateIds, 1000);
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setFormSubmitted(false);
    setResetKey(prev => prev + 1);
    setIsLoaded(false);
  };

  // Função para detectar submissão do formulário
  const detectFormSubmission = () => {
    try {
      const iframe = document.querySelector('iframe[src*="leadconnectorhq.com"]') as HTMLIFrameElement;
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument;
        
        // Verificar se há mensagem de sucesso
        const successMessage = doc.querySelector('.success-message, .form-success, [class*="success"]');
        if (successMessage && !formSubmitted) {
          setFormSubmitted(true);
          console.log('Formulário GHL enviado com sucesso - preparando reset');
          
          // Resetar após 5 segundos
          setTimeout(() => {
            resetForm();
          }, 5000);
        }
      }
    } catch (error) {
      // Same-Origin Policy impede acesso - normal
      console.log('Não foi possível detectar submissão (Same-Origin Policy)');
    }
  };

  return (
    <div className="relative ghl-form-container" style={{ minHeight: 600 }}>
      {/* Placeholder enquanto não carrega */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-transparent rounded-lg z-10"
          style={{ minHeight: 600 }}
        >
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg font-medium">Carregando formulário...</p>
          </div>
        </div>
      )}
      
            {/* Iframe otimizado - SEM lazy loading */}
            <iframe
              key={resetKey}
              src={url}
              style={{
                width: "100%",
                minHeight: 600,
                border: "none",
                borderRadius: 12,
                background: "transparent",
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out"
              }}
              title="Formulário de Contato"
              onLoad={handleIframeLoad}
              // Otimizações para Lighthouse SEM lazy loading
              allow="forms"
              // Preload hints para melhor performance
              data-preload="true"
              // Atributos de acessibilidade
              role="form"
              aria-label="Formulário de contato"
            />
      
      {/* Botão de reset manual - aparece após submissão */}
      {formSubmitted && (
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={resetForm}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg"
            aria-label="Enviar novo formulário"
          >
            Novo Envio
          </button>
        </div>
      )}
    </div>
  );
}
