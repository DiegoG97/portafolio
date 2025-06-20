"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SobreMi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const tecnologias = [
    "html5", "css", "javascript", "php", "laravel", "mysql", "postgresql",
    "react", "nextjs", "nodejs", "express", "typescript", "mongodb",
    "graphql", "tailwindcss", "zustand", "redux"
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* PERFIL + RESUMEN */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        {/* FOTO */}
        <div data-aos="zoom-in" className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl">
          <img
            src="/img/alejandro.png"
            alt="Foto Alejandro"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-2xl"></div>
        </div>

        {/* TEXTO */}
        <div data-aos="fade-left" className="max-w-2xl space-y-6 text-gray-300">
          <h1 className="text-4xl font-bold text-white">
            Hola, soy <span className="text-cyan-400">Alejandro Guzmán</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white">Desarrollador Web Full Stack</h2>
          <p className="text-lg leading-relaxed">
            Soy un apasionado por la tecnología con más de 3 años de experiencia como freelancer y 12 meses como desarrollador web como contratista de la Alcaldia de Fortul y en Minex Compañia Internacional, donde contribuí en el desarrollo e implementación de su presencia digital y participé en la construcción de su aplicación de trazabilidad.
          </p>
          <p className="text-lg leading-relaxed">
            Soy Administrador de Empresas, con formación Tecnologíca en Análisis y Desarrollo de Software, y actualmente curso el último año de Ingeniería de Sistemas. Esta combinación de perfiles me permite aportar soluciones técnicas con visión estratégica y enfoque de negocio.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="bg-cyan-600 px-4 py-2 rounded text-white hover:bg-cyan-700"
            >
              Descargar CV
            </a>
            <a
              href="https://github.com/DiegoG97"
              target="_blank"
              className="text-white hover:text-cyan-400"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              className="text-white hover:text-cyan-400"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section data-aos="fade-up" className="text-center">
        <h3 className="text-xl font-semibold mb-6 text-white">Tecnologías que uso</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="relative group transition transform duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 rounded-xl blur-2xl bg-cyan-400 opacity-20 group-hover:opacity-40 -z-10"></div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img
                  src={`/logos/${tech}.svg`}
                  alt={tech}
                  className="w-10 h-10 object-contain"
                  title={tech.toUpperCase()}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
