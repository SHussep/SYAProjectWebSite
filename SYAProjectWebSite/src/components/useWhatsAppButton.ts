import { useCallback } from 'react';
import { WHATSAPP_CONFIG } from './config';
import { createWhatsAppUrl } from './utils';

export const useWhatsAppButton = () => {
  const handleWhatsAppClick = useCallback(() => {
    const url = createWhatsAppUrl({
      phoneNumber: WHATSAPP_CONFIG.phoneNumber,
      message: WHATSAPP_CONFIG.defaultMessage
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { handleWhatsAppClick };
};