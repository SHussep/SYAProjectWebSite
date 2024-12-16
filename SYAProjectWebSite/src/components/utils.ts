interface WhatsAppUrlParams {
    phoneNumber: string;
    message: string;
  }
  
  export const createWhatsAppUrl = ({ phoneNumber, message }: WhatsAppUrlParams): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };