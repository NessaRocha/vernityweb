"use client";

import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    buttonText: string;
    url: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const handleProjectClick = (projectTitle: string, url: string) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback: mostrar mensagem ou scroll para contato
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-300 ${
        index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      {/* Screenshot do Site */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot do site ${project.title}`}
          fill
          className="object-cover hover:scale-105 active:scale-105 focus:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo do Projeto */}
      <div className="p-6">
        {/* Título do Projeto */}
        <Heading 
          level={3} 
          className="mb-4 text-white"
        >
          {project.title}
        </Heading>

        {/* Descrição */}
        <Text className="mb-6 text-white leading-relaxed">
          {project.description}
        </Text>

        {/* Tecnologias Utilizadas */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botão Ver Projeto */}
        <Button 
          onClick={() => handleProjectClick(project.title, project.url)}
          variant="primary"
          size="lg"
          className="w-full bg-red-700 text-white hover:bg-red-800 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-label={`Ver projeto ${project.title}`}
        >
          {project.buttonText}
        </Button>
      </div>
    </div>
  );
}
