// components/WhatsAppIcon.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+966556500026" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        borderRadius: '50%',
        backgroundColor: '#1e1e1e',
        textDecoration: 'none',
      }}
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{ color: '#dbdbdb', fontSize: '30px' }}
      />
    </a>
  );
};

export default WhatsAppIcon;