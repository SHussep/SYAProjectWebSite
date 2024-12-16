import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const emailBody = `
        Nuevo mensaje de contacto:
        Nombre: ${formData.name}
        Email: ${formData.email}
        Teléfono: ${formData.phone}
        Mensaje: ${formData.message}
      `;

      window.location.href = `mailto:syatortillerias@gmail.com?subject=Contacto desde TortillaPOS&body=${encodeURIComponent(emailBody)}`;

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por teléfono.');
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
              <Send className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;