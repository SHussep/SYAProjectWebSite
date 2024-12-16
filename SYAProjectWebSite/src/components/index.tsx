import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useWhatsAppButton } from './useWhatsAppButton';
import { buttonStyles } from './styles';
import type { WhatsAppButtonProps } from './types';

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = '¡Escríbenos!',
  className = ''
}) => {
  const { handleWhatsAppClick } = useWhatsAppButton();

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${buttonStyles.base} ${buttonStyles.colors} ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className={buttonStyles.text}>
        {label}
      </span>
    </button>
  );
};

export default WhatsAppButton;