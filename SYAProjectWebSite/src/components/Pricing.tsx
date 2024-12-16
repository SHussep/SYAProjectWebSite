import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="precios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Precios Accesibles</h2>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-blue-600 text-white p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Plan Anual</h3>
            <div className="text-4xl font-bold mb-2">
              $2,000 <span className="text-sm font-normal">MXN</span>
            </div>
            <p className="text-blue-100">Primer año</p>
          </div>
          
          <div className="p-6">
            <ul className="space-y-4 mb-6">
              {[
                'Licencia completa por 1 año',
                'Actualizaciones incluidas',
                'Soporte técnico',
                'Capacitación inicial',
                'Renovación anual: $1,000 MXN'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#contacto"
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;