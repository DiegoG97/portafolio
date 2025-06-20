// src/app/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="mt-16 bg-gray-800 text-gray-300 py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-white">Alejandro Guzmán</h3>
  
          {/* Redes */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/DiegoG97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="mailto:tu@email.com"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
  
          {/* Año dinámico */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Alejandro Guzmán. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  }
  