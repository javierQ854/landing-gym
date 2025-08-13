// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-28 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Tu <span className="text-blue-700">mejor versión</span> empieza hoy
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Entrenamiento personalizado, grupos reducidos y tecnología para medir tu progreso.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#precios" className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition">
              Ver planes
            </a>
            <a href="#programas" className="border border-blue-700 text-blue-700 px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition">
              Conocer programas
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Sin matrícula • Cancelación fácil • Resultados medibles
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=900&q=80"
            alt="Entrenamiento funcional"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow p-3">
            <p className="text-sm font-semibold">+1.200 miembros activos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
