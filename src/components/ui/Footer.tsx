import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#180909' }}>
      <Container>
        {/* Três Colunas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna Esquerda - Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="/assets/icons/vernety_logo.webp"
                alt="Vernity Web" 
                width={60}
                height={60}
                className="h-16 w-auto"
              />
              <span className="text-white font-bold text-xl tracking-wide font-sans">
                Vernity Web
              </span>
            </div>
            <Text className="text-white text-lg leading-relaxed max-w-sm">
              Desenvolvimento que traduz sua marca em performance, elegância e resultados.
            </Text>
          </div>
          
          {/* Coluna do Meio - Links Rápidos */}
          <div className="space-y-6">
            <Heading level={3} className="text-xl font-bold text-white">Links Rápidos</Heading>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#hero"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative block"
                  aria-label="Ir para seção Início"
                >
                  <span className="relative z-10">Início</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 active:text-white active:scale-105 active:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative block"
                  aria-label="Ir para seção Sobre"
                >
                  <span className="relative z-10">Sobre</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 active:text-white active:scale-105 active:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative block"
                  aria-label="Ir para seção Serviços"
                >
                  <span className="relative z-10">Serviços</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 active:text-white active:scale-105 active:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative block"
                  aria-label="Ir para seção Portfólio"
                >
                  <span className="relative z-10">Portfólio</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna Direita - Redes Sociais */}
          <div className="space-y-6">
            <Heading level={3} className="text-xl font-bold text-white">Redes Sociais</Heading>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 active:text-white active:scale-105 active:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative flex items-center space-x-3"
                  aria-label="Abrir perfil no LinkedIn"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="relative z-10">LinkedIn</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative flex items-center space-x-3"
                  aria-label="Abrir perfil no GitHub"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="relative z-10">GitHub</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative flex items-center space-x-3"
                  aria-label="Abrir conversa no WhatsApp"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="relative z-10">WhatsApp</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-white hover:scale-105 hover:translate-x-1 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-950 transition-all duration-300 text-left group relative flex items-center space-x-3"
                  aria-label="Abrir perfil no Instagram"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="relative z-10">Instagram</span>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Linha Separadora */}
        <div className="border-t border-gray-700 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <Text className="text-white text-sm">
              ©2025 Vernity Web. Todos os direitos reservados.
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
