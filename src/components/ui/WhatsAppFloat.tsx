import { FaWhatsapp } from "react-icons/fa";

const WA_PHONE = import.meta.env.VITE_WA_PHONE;
const DEFAULT_MSG = encodeURIComponent(
  "¡Hola! Quisiera consultar sobre sus servicios tecnológicos."
);

const WhatsAppFloat = () => {
  if (!WA_PHONE) return null;

  return (
    <a
      href={`https://wa.me/${WA_PHONE}?text=${DEFAULT_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group animate-[floatIn_0.3s_ease-out]"
    >
      <span className="hidden md:group-hover:inline-block bg-white text-green-600 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md">
        ¡Consúltanos!
      </span>
      <div className="w-14 h-14 md:w-15 md:h-15 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-105 transition-all">
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
