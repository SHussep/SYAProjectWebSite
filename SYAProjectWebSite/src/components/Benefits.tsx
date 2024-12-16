import React from 'react';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "Gracias al sistema POS, aumentamos nuestras ventas un 20%",
    author: "María González",
    business: "Tortillería El Sol"
  },
  {
    quote: "El control de inventario nos ayudó a reducir desperdicios",
    author: "Juan Pérez",
    business: "Tortillas Don Juan"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Beneficios</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mejora tu Eficiencia</h3>
            <ul className="space-y-3">
              {[
                'Reduce errores en ventas y cobros',
                'Optimiza el control de inventario',
                'Ahorra tiempo en tareas administrativas',
                'Toma decisiones basadas en datos reales'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Testimonios</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;