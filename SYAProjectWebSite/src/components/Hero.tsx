import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              El Mejor Sistema para tu tortillería
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automatiza tu negocio, controla tu inventario y aumenta tus ventas con nuestro sistema especializado para tortillerías.
            </p>
            <a 
              href="/SYATortillerias.zip" 
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Descarga el Sistema
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://syatortillerias.com.mx/Images/Dashboard.png" 
              alt="Sistema POS en acción" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;