// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">FitBoutique</h4>
          <p className="text-gray-400 mt-2">Entrenamiento inteligente y personalizado.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Contacto</h4>
          <p className="text-gray-400 mt-2">Calle 123 #45-67, Bogotá</p>
          <p className="text-gray-400">+57 300 000 0000</p>
          <p className="text-gray-400">hola@fitboutique.co</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Legal</h4>
          <p className="text-gray-400 mt-2">Términos y condiciones</p>
          <p className="text-gray-400">Política de privacidad</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6 text-sm">© 2025 nn. Todos los derechos reservados.</p>
    </footer>
  );
}
export default Footer;
