import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SYA Tortillerias</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#caracteristicas" className="text-gray-600 hover:text-blue-600">Características</a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600">Beneficios</a>
            <a href="#precios" className="text-gray-600 hover:text-blue-600">Precios</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#inicio" className="block text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#caracteristicas" className="block text-gray-600 hover:text-blue-600">Características</a>
            <a href="#beneficios" className="block text-gray-600 hover:text-blue-600">Beneficios</a>
            <a href="#precios" className="block text-gray-600 hover:text-blue-600">Precios</a>
            <a href="#contacto" className="block text-gray-600 hover:text-blue-600">Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;