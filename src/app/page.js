"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] px-6 md:px-20 bg-gradient-to-b from-[#0f172a] to-black text-white overflow-hidden">

      {/* Texto */}
      <div data-aos="fade-right" className="text-center lg:text-left space-y-6 lg:w-1/2 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Soy{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 animate-gradient-x">
            Alejandro Guzmán
            <span className="absolute top-0 left-0 w-full h-full rounded-full blur-2xl opacity-30 bg-cyan-400 -z-10 animate-pulse"></span>
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300 min-h-[56px]">
          <Typewriter
            words={[
              "Desarrollador Web Full Stack",
              "Administrador de Empresas",
              "Diseñador Web Freelance",
              "Creativo y Analítico",
              "Frontend + Backend Developer"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Redes sociales */}
        <div className="flex justify-center lg:justify-start gap-4 pt-4">
          <a href="https://github.com/DiegoG97" target="_blank" className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition rounded-full p-3">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition rounded-full p-3">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="mailto:guzmanrincond@gmail.com" className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition rounded-full p-3">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>

      {/* Imagen con marco circular y resplandor */}
      <div data-aos="fade-left" className="relative lg:w-1/2 flex justify-center z-10">
        <div className="relative w-[320px] md:w-[460px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-cyan-500/50">
          <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-[140px] z-0 rounded-full"></div>
          <img
            src="/img/alejandro1.png"
            alt="Alejandro Guzmán"
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
