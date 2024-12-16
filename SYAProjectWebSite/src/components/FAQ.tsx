import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué necesito para instalar el sistema?',
    answer: 'Una computadora con Windows 10 o superior, 4GB de RAM y conexión a internet.'
  },
  {
    question: '¿Es compatible con qué equipos?',
    answer: 'El sistema es compatible con la mayoría de impresoras térmicas y básculas electrónicas del mercado.'
  },
  {
    question: '¿Qué pasa si no renuevo la licencia?',
    answer: 'El sistema seguirá funcionando con las características actuales, pero no recibirás actualizaciones ni soporte técnico.'
  },
  {
    question: '¿Incluye capacitación?',
    answer: 'Sí, incluimos capacitación inicial para todo tu personal durante la implementación.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-600" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;