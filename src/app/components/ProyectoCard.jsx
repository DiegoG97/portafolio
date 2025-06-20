// components/ProyectoCard.jsx
export default function ProyectoCard({ titulo, tecnologias, videoUrl, repoUrl }) {
  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
      data-aos="fade-up"
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={titulo}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tech, i) => (
            <span key={i} className="bg-cyan-700 text-sm px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}
