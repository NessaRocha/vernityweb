import Link from 'next/link';
import { Container } from '@/components/ui';

export default function ContatoSucesso() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 
              className="text-3xl font-bold text-white mb-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              Mensagem Enviada!
            </h1>
            <p className="text-gray-300 mb-8">
              Obrigado pelo seu contato. Retornaremos em breve!
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Voltar ao Início
            </Link>
            
            <Link 
              href="/#contato"
              className="inline-block w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Enviar Outra Mensagem
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
