import ProyectoCard from '@/app/components/ProyectoCard';

const proyectos = [
  {
    titulo: "Smart Task Web",
    tecnologias: ["React Query", "Tailwind", "TypeScript", "REST API"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Gestión de Restaurantes",
    tecnologias: ["Next.js", "Zod", "Server Actions", "Zustand"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Smart Task Móvil",
    tecnologias: ["React Native", "Apollo", "GraphQL", "NativeBase"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "App Odontología",
    tecnologias: ["Zustand", "React Hook Form", "TypeScript", "React"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Administrador de Bodega",
    tecnologias: ["React", "Tailwind", "PostgreSQL", "Express", "Router"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "JobsColombia",
    tecnologias: ["MongoDB", "Express", "MVC", "Handlebars", "Webpack"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "CRM Clientes",
    tecnologias: ["PostgreSQL", "Sequelize", "EJS", "MVC", "Multer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Food Delivery (Mobile)",
    tecnologias: ["React Native", "Redux Toolkit", "Unistyles"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Anuncia Bienes Raíces",
    tecnologias: ["Express", "MySQL", "Pug", "Sequelize", "Tailwind"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Gestor de Tareas y Proyectos",
    tecnologias: ["SASS", "Fetch", "PHP", "MVC", "Virtual DOM"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Cerámicas",
    tecnologias: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  {
    titulo: "Punto y Gestión Bares",
    tecnologias: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    repoUrl: "https://github.com/DiegoG97/",
  },
  
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mis Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <ProyectoCard
            key={index}
            titulo={proyecto.titulo}
            tecnologias={proyecto.tecnologias}
            videoUrl={proyecto.videoUrl}
            repoUrl={proyecto.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}
