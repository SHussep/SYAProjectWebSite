import React from 'react';
import { ClipboardList, Package, BarChart2, Users } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: 'Registro de Ventas',
    description: 'Control total de tus ventas diarias con interfaz intuitiva y fácil de usar.'
  },
  {
    icon: <Package className="w-12 h-12 text-blue-600" />,
    title: 'Control de Inventarios',
    description: 'Gestiona tu inventario en tiempo real y evita pérdidas por faltantes.'
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-blue-600" />,
    title: 'Generación de Reportes',
    description: 'Reportes detallados de ventas, inventario y ganancias con un solo clic.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Gestión de Empleados',
    description: 'Administra turnos, permisos y productividad de tu personal.'
  }
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;