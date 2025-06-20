"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Usa lucide para íconos limpios

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-4 z-50 fixed top-0 right-0 text-white"
        >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>


      {/* Menú deslizable */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-6 z-40 transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <h2 className="text-2xl font-bold mb-6">Alejandro</h2>
        <nav>
          <ul className="space-y-4">
            <li><a href="/" className="hover:text-cyan-400 block">Inicio</a></li>
            <li><a href="/proyectos" className="hover:text-cyan-400 block">Proyectos</a></li>
            <li><a href="/sobre-mi" className="hover:text-cyan-400 block">Sobre mí</a></li>
            <li>
              <a
                href="https://wa.link/ayg5ex"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 px-3 py-2 rounded hover:bg-cyan-700 block text-center text-sm"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
