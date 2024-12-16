import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TortillaPOS</h3>
            <p className="text-gray-400">
              El mejor sistema para la gestión de tu tortillería.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <a href="mailto:syatortillerias@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail size={20} className="mr-2" />
                syatortillerias@gmail.com
              </a>
              <a href="tel:+525540538426" className="flex items-center text-gray-400 hover:text-white">
                <Phone size={20} className="mr-2" />
                (55) 4053-8426
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TortillaPOS. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;