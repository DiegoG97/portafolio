
import MobileMenu from "@/app/components/MobileMenu";

import Footer from "@/app/components/Footer";
import "../app/globals.css";
import ClientWrapper from "@/app/components/ClientWrapper.jsx";

export const metadata = {
  title: "Portafolio de Alejandro Guzmán",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-gray-900 text-white">
        <div className="flex flex-col min-h-screen"> {/* Estructura vertical */}
          <MobileMenu />

          {/* Contenedor lateral + contenido */}
          <div className="flex flex-1">
            <aside className="w-64 bg-gray-800 p-4 hidden md:block">
              <h2 className="text-2xl font-bold mb-6">Alejandro Guzman</h2>
              <nav>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-cyan-400">Inicio</a></li>
                  <li><a href="/proyectos" className="hover:text-cyan-400">Proyectos</a></li>
                  <li><a href="/sobre-mi" className="hover:text-cyan-400">Sobre mí</a></li>
                  <li>
                    <a
                      href="https://wa.link/ayg5ex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm bg-cyan-600 px-3 py-1 rounded hover:bg-cyan-700 block text-center"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Contenido principal */}
            <main className="flex-1 p-6">
              <ClientWrapper>
                {children}
              </ClientWrapper>
            </main>
          </div>

          {/* Footer SIEMPRE al fondo */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

