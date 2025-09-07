import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import ContactButtons from "@/components/ui/ContactButtons";
import { useState } from "react";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
  };

  return (
    <section className="py-24 bg-black">
      <Container>
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <Heading 
            level={1} 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Vamos criar algo incrível juntas!
          </Heading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            {/* Descrição */}
            <Text className="mb-8 text-white leading-relaxed text-lg">
              Transforme sua visão em realidade digital. Desenvolva soluções web únicas que elevam sua marca e geram resultados.
            </Text>
            
            {/* Informações de Contato */}
            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <Text className="text-white">nessasim@hotmail.com</Text>
              </div>
              
              {/* Telefone */}
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <Text className="text-white">+55 (61) 89813-8467</Text>
              </div>

              {/* Localização */}
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <Text className="text-white">Torres, Brasil</Text>
              </div>
            </div>

            {/* Botões de CTA */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5561898138467" 
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                />
              </div>

              {/* Mensagem */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sua Mensagem"
                  rows={6}
                  required
                  className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
