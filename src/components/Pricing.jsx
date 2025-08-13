// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Básico",
    price: "$30/mes",
    features: ["Sala de máquinas", "Clases grupales", "App de seguimiento"],
  },
  {
    name: "Premium",
    price: "$65/mes",
    featured: true,
    features: ["Todo lo del Básico", "4 sesiones 1:1/mes", "Evaluación mensual"],
  },
  {
    name: "Elite",
    price: "$99/mes",
    features: ["Todo lo del Premium", "8 sesiones 1:1/mes", "Plan de nutrición"],
  },
];

function Pricing() {
  return (
    <section id="precios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Planes y precios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`rounded-2xl p-6 shadow-lg bg-white border ${p.featured ? "border-blue-700" : "border-gray-100"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-bold text-xl">{p.name}</h3>
              <div className="text-3xl font-extrabold mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-gray-600">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a
                href="#unirme"
                className={`mt-6 inline-block w-full text-center px-4 py-3 rounded-lg transition ${
                  p.featured ? "bg-blue-700 text-white hover:bg-blue-800" : "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                }`}
              >
                Elegir plan
              </a>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">Sin cláusulas de permanencia.</p>
      </div>
    </section>
  );
}
export default Pricing;
