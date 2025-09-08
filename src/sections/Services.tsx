"use client";

import { useState, useEffect, useRef } from "react";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useIntersectionObserver } from "@/lib/hooks";

interface ServicesProps {
  heading: string;
  description: string;
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function Services({
  heading,
  description,
  services
}: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Use the existing useIntersectionObserver hook
  const { isIntersecting } = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    rootMargin: '0px'
  });

  // Update visibility when intersection changes
  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);

  // Early return if not visible yet (performance optimization)
  if (!isVisible) {
    return (
      <section 
        ref={sectionRef}
        className="py-24 bg-[#180909]"
      >
        <Container>
          <div className="text-center mb-16">
            <div className="w-64 h-12 bg-gray-700 animate-pulse rounded mx-auto mb-6"></div>
            <div className="w-96 h-6 bg-gray-700 animate-pulse rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div key={index} className="bg-black/60 rounded-2xl p-8 h-80">
                <div className="w-60 h-60 bg-gray-700 animate-pulse rounded mx-auto mb-6"></div>
                <div className="w-48 h-6 bg-gray-700 animate-pulse rounded mx-auto mb-4"></div>
                <div className="w-full h-4 bg-gray-700 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
          <section 
        ref={sectionRef}
        className="py-24 bg-[#180909]"
      >
      <Container>
        <div className="text-center mb-16">
          <div id="services-heading">
            <Heading 
              level={2} 
              className="text-white mb-6"
            >
              {heading}
            </Heading>
          </div>
          <div id="services-description">
            <Text className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              {description}
            </Text>
          </div>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Lista de serviços oferecidos"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 hover:shadow-2xl hover:shadow-red-500/20 hover:border hover:border-red-500/30 hover:scale-105 transition-all duration-500 ease-out group cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:scale-105"
              tabIndex={0}
              role="listitem"
              aria-label={`Serviço: ${service.title}`}
              aria-describedby={`service-desc-${index}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Focus visual feedback
                  e.currentTarget.focus();
                }
              }}
            >
              {/* Efeito de Glow Vermelho no Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-2xl" aria-hidden="true"></div>
              
              {/* Sombra Interna Vermelha */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-2xl" aria-hidden="true"></div>
              
              {/* Ícone do Serviço */}
              <div className="text-5xl mb-2 text-center relative z-10">
                {index === 0 && (
                  <Image 
                    src="/assets/images/arq_web.webp" 
                    alt="Ícone representando arquitetura web e desenvolvimento de sistemas"
                    width={240}
                    height={240}
                    className="w-60 h-60 mx-auto group-hover:scale-125 transition-all duration-500 ease-out"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    aria-describedby={`service-icon-desc-${index}`}
                  />
                )}
                {index === 1 && (
                  <Image 
                    src="/assets/images/design_user.webp" 
                    alt="Ícone representando design de usuário e experiência do usuário"
                    width={240}
                    height={240}
                    className="w-60 h-60 mx-auto group-hover:scale-125 transition-all duration-500 ease-out"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    aria-describedby={`service-icon-desc-${index}`}
                  />
                )}
                {index === 2 && (
                  <Image 
                    src="/assets/images/performance.webp" 
                    alt="Ícone representando otimização de performance e velocidade"
                    width={240}
                    height={240}
                    className="w-60 h-60 mx-auto group-hover:scale-125 transition-all duration-500 ease-out"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    aria-describedby={`service-icon-desc-${index}`}
                  />
                )}
              </div>
              
              {/* Hidden descriptions for screen readers */}
              <div id={`service-icon-desc-${index}`} className="sr-only">
                {index === 0 && "Ícone visual representando arquitetura web e desenvolvimento de sistemas"}
                {index === 1 && "Ícone visual representando design de usuário e experiência do usuário"}
                {index === 2 && "Ícone visual representando otimização de performance e velocidade"}
              </div>
              
              {/* Título do Serviço */}
              <Heading 
                level={3} 
                className="text-white mb-6 text-center group-hover:text-gray-50 transition-colors duration-500 font-semibold relative z-10"
              >
                {service.title}
              </Heading>
              
              {/* Descrição do Serviço */}
              <div id={`service-desc-${index}`}>
                <Text 
                  className="text-xl text-white leading-relaxed text-center group-hover:text-gray-50 transition-colors duration-500 relative z-10"
                >
                  {service.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
