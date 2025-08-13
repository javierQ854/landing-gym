// src/components/Features.jsx
import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Coaching 1 a 1", desc: "Rutinas a medida y seguimiento semanal.", icon: "💪" },
  { title: "Clases Boutique", desc: "Grupos de máximo 8 personas.", icon: "🧘" },
  { title: "Tecnología", desc: "Medición de grasa, fuerza y VO2 estimado.", icon: "📈" },
  { title: "Nutrición", desc: "Guías y menús personalizados.", icon: "🥗" },
];

function Features() {
  return (
    <section id="programas" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Programas y beneficios</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl">{it.icon}</div>
              <h3 className="font-semibold text-lg mt-3">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
