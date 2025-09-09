'use client';

import { useState } from 'react';

export function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({ type: 'loading', message: 'Enviando...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message || 'Contato enviado com sucesso!'
        });
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Erro ao enviar contato. Tente novamente.'
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus({
        type: 'error',
        message: 'Erro de conexão. Verifique sua internet e tente novamente.'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Entre em Contato
        </h2>
        <p className="text-lg text-gray-600">
          Preencha o formulário abaixo e entraremos em contato em breve
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
            placeholder="Seu nome completo"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
            placeholder="seu@email.com"
            required
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
            placeholder="Conte-nos mais sobre seu projeto..."
            required
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : status.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            <p className="text-sm font-medium">{status.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar Mensagem'
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Ou entre em contato diretamente:{' '}
          <a 
            href="mailto:nessasim@hotmail.com" 
            className="text-red-600 hover:text-red-700 font-medium"
          >
            nessasim@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
