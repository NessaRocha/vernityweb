"use client";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

interface ProfileProps {
  title: {
    sobre: string;
    mim: string;
  };
  description: string[];
  skillsTitle: {
    minhas: string;
    habilidades: string;
  };
  skills: string[];
}

export default function Profile({
  title,
  description,
  skillsTitle,
  skills
}: ProfileProps) {
  return (
    <section 
      className="py-24 bg-gray-950"
      aria-labelledby="profile-heading"
      aria-describedby="profile-description"
    >
      <Container>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <div id="profile-heading">
            <Heading 
              level={2} 
              className="text-white mb-4"
            >
              <span className="text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]">{title.sobre}</span>{" "}
              <span className="text-red-500 drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)]">{title.mim}</span>
            </Heading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="text-white">
            <div id="profile-description" className="space-y-6">
              {description.map((paragraph, index) => (
                <Text 
                  key={index} 
                  className={`text-white leading-relaxed ${index === 0 ? 'lg:hidden' : ''}`}
                >
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
          
          <div className="text-white">
            <Heading 
              level={3} 
              className="mb-8 leading-tight text-white"
            >
              <span className="text-white">{skillsTitle.minhas}</span>{" "}
              <span className="text-red-500">{skillsTitle.habilidades}</span>
            </Heading>
            
            <div 
              className="flex flex-wrap gap-3"
              role="list"
              aria-label="Lista de habilidades técnicas"
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-600 hover:border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-gray-950 transition-all duration-300 whitespace-nowrap"
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Focus visual feedback
                      e.currentTarget.focus();
                    }
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
