// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-extrabold text-blue-700">FitBoutique</div>
        <nav className="hidden md:flex gap-6">
          <a href="#programas" className="hover:text-blue-700">Programas</a>
          <a href="#precios" className="hover:text-blue-700">Precios</a>
          <a href="#testimonios" className="hover:text-blue-700">Testimonios</a>
          <a href="#contacto" className="hover:text-blue-700">Contacto</a>
        </nav>
        <a href="#unirme" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
          Unirme ahora
        </a>
      </div>
    </header>
  );
}
export default Header;
