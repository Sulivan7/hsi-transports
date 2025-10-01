import { FaWhatsapp } from 'react-icons/fa';
import { ButtonLink } from './styles';

interface WhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppProps> = ({ phoneNumber, message }) => {
  const defaultMessage =
    message ||
    'Olá! Gostaria de solicitar uma cotação para transporte executivo.';

  const encodedMessage = encodeURIComponent(defaultMessage);
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  const ICON_SIZE = 32;

  return (
    <ButtonLink
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={ICON_SIZE} />
    </ButtonLink>
  );
};

export default WhatsAppButton;
