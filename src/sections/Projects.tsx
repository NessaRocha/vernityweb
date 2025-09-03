import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Domma Electra",
      description: "Site institucional para empresa de automação residencial, com design moderno e foco em conversão.",
      image: "/assets/images/dommaelectrasite.webp",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      buttonText: "Ver Projeto",
      url: "#" // Link para o projeto quando disponível
    },
    {
      id: 2,
      title: "Cris Psicólogo",
      description: "Site profissional para psicólogo, com blog integrado e sistema de agendamento.",
      image: "/assets/images/crispsicologosite.webp",
      technologies: ["WordPress", "PHP", "CSS3"],
      buttonText: "Ver Projeto",
      url: "#" // Link para o projeto quando disponível
    }
  ];

  return (
    <section className="py-24 bg-black">
      <Container>
        {/* Título da Seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Heading 
            level={2} 
            className="text-white mb-4"
          >
            <span className="text-white">Meu</span>{" "}
            <span className="text-red-500">Portfólio</span>
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
