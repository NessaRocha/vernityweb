"use client";

import { useEffect, useState } from 'react';

type Props = { url: string };

export default function GhlFormIframe({ url }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Nota: Iframes de domínios diferentes (como GHL) não podem ser customizados via CSS externo
    // devido à política Same-Origin Policy do navegador
    // A customização deve ser feita no próprio painel do GHL
    console.log('GHL Form iframe carregado - customização deve ser feita no painel GHL');
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative" style={{ minHeight: 600 }}>
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
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        // Preload hints para melhor performance
        data-preload="true"
      />
    </div>
  );
}
