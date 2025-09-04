import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Banner() {

  return (
    <section className="min-h-screen lg:h-screen relative overflow-hidden bg-gradient-to-r from-[#200909] from-15% via-[#0f0f0f] via-30% to-[#0f0f0f]">
             {/* Background Image - Responsive positioning - SEM ANIMAÇÃO */}
       <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0">
         <Image 
           src="/assets/images/hero.webp" 
           alt="Desenvolvedora web profissional" 
           fill
           className="object-cover object-center"
           priority
           sizes="(max-width: 768px) 100vw, 50vw"
           quality={75}
           placeholder="blur"
           blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
         />
        
        {/* Overlay sombreado para mesclar com o fundo */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#200909] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
        
        {/* Overlay escuro adicional para mobile */}
        <div className="absolute inset-0 bg-black/40 lg:hidden" />
      </div>
      
      {/* Harmonizing Transparent Element - Behind Text, Over Image */}
      <div 
        className="absolute inset-0 z-5 hidden lg:block"
        aria-hidden="true"
      >
        <div 
          className="w-full h-full bg-gradient-to-r from-[#200909] via-black/20 to-transparent"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#200909] via-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>
      
      {/* Content Overlay */}
      <Container className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center w-full">
          {/* Text Content - Mobile: Above image, Desktop: Left side */}
          <div className="text-white flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full py-8 lg:py-0 order-1 lg:order-1 lg:pr-8 lg:max-w-2xl">
            {/* Main heading with improved alignment and spacing */}
            <Heading 
              level={1} 
              className="mb-6 md:mb-8 leading-tight text-white px-1 sm:px-2 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
              aria-live="polite"
              aria-label="Título principal com animação de entrada"
            >
              <span className="text-white banner-render-fade banner-group-1 block text-center lg:text-left mb-2 lg:mb-3">DESENVOLVIMENTO</span>
              <span className="text-red-500 banner-render-zoom banner-group-2 block text-center lg:text-left mb-2 lg:mb-3">QUE TRADUZ</span>
              <span className="text-white banner-render-fade banner-group-3 block text-center lg:text-left mb-2 lg:mb-3">SUA MARCA EM</span>
              <span className="text-red-500 banner-render-zoom banner-group-4 block text-center lg:text-left mb-2 lg:mb-3">PERFORMANCE,</span>
              <span className="text-white banner-render-fade banner-group-5 block text-center lg:text-left mb-2 lg:mb-3">ELEGÂNCIA E</span>
              <span className="text-red-500 banner-render-zoom banner-group-6 block text-center lg:text-left mb-2 lg:mb-3">RESULTADOS.</span>
            </Heading>
            
            {/* Subheading with improved spacing - Hidden on mobile, shown on desktop */}
            <Text className="hidden lg:block mb-8 md:mb-10 leading-relaxed text-white text-xs xs:text-sm md:text-base lg:text-lg xl:text-xl px-1 sm:px-0 lg:pr-4" aria-label="Descrição profissional">
              Transformo ideias em experiências digitais que convertem visitantes em clientes. Especialista em desenvolvimento web de alta performance com foco em resultados mensuráveis.
            </Text>
            
            {/* CTA Button - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 md:gap-6 items-start w-full sm:w-auto px-1 sm:px-0 mt-4">
              <Button 
                href="#portfolio"
                variant="primary"
                size="md"
                className="w-full sm:w-auto bg-red-700 text-white hover:bg-red-800 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base"
              aria-label="Ver meu portfólio de projetos desenvolvidos"
              >
                Ver Portfólio
              </Button>
              <Button 
                href="#contact"
                variant="outline"
                size="md"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-[#180909] hover:border-[#180909] hover:text-white focus:bg-[#180909] focus:border-[#180909] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#180909] focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base text-center transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#180909]/50 group relative overflow-hidden"
              aria-label="Entrar em contato para iniciar um projeto"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Fale Comigo
                </span>
                {/* Efeito de glow dramático no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#180909] via-[#180909] to-[#180909] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-lg" aria-hidden="true"></div>
                {/* Sombra interna dramática */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#180909]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg" aria-hidden="true"></div>
              </Button>
            </div>
          </div>
          
          {/* Image Section - Mobile: Below text, Desktop: Right side */}
          <div className="block lg:block relative h-48 lg:h-full order-2 lg:order-2 mt-8 lg:mt-0">
            {/* Imagem visível no mobile - Menor e mais baixa */}
            <div className="lg:hidden w-full h-full relative">
              <Image 
                src="/assets/images/hero.webp" 
                alt="Desenvolvedora web profissional criando soluções digitais inovadoras" 
                fill
                className="object-cover object-bottom rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                aria-describedby="banner-description"
              />
              {/* Overlay para mobile - Mais escuro para melhor legibilidade */}
              <div className="absolute inset-0 bg-black/60 rounded-lg" />
            </div>
            {/* Hidden description for screen readers */}
            <div id="banner-description" className="sr-only">
              Imagem representativa de uma desenvolvedora web profissional trabalhando em soluções digitais inovadoras
            </div>
          </div>
        </div>
        
        {/* Mobile CTA Buttons - Positioned below image and text */}
        <div className="lg:hidden absolute left-4 right-4 z-10" style={{ bottom: '-120px' }}>
          <div className="flex flex-col gap-3 items-center w-full text-center">
            <Button 
              href="#portfolio"
              variant="primary"
              size="md"
              className="w-full bg-red-700 text-white hover:bg-red-800 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base text-center"
              aria-label="Ver meu portfólio de projetos desenvolvidos"
            >
              Ver Portfólio
            </Button>
            <Button 
              href="#contact"
              variant="outline"
              size="md"
              className="w-full bg-[#180909] border-2 border-[#180909] text-white hover:bg-[#180909] hover:border-[#180909] hover:text-white focus:bg-[#180909] focus:border-[#180909] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#180909] focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base text-center transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#180909]/50 group relative overflow-hidden"
              aria-label="Entrar em contato para iniciar um projeto"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Fale Comigo
              </span>
              {/* Efeito de glow dramático no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#180909] via-[#180909] to-[#180909] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-lg" aria-hidden="true"></div>
              {/* Sombra interna dramática */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#180909]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg" aria-hidden="true"></div>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
