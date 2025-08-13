// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const quotes = [
  { name: "Laura G.", text: "Perdí 6kg y corrí mi primera 10K. ¡Coaches top!" },
  { name: "Andrés M.", text: "Ambiente increíble y rutinas efectivas. Vale cada peso." },
  { name: "Natalia R.", text: "Las clases pequeñas hacen la diferencia. Me siento acompañada." },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Historias reales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              className="bg-gray-50 rounded-2xl p-6 shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <p className="italic">“{q.text}”</p>
              <p className="mt-3 font-semibold">— {q.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
