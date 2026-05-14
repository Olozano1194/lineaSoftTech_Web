import { MdOutlineChat } from "react-icons/md";

interface BtnPriceProps {
    planName: string;
}

const BtnPrice = ({ planName }: BtnPriceProps) => {
    const WA_PHONE = import.meta.env.VITE_WA_PHONE;
    const handleQuote = () => {
        const message = encodeURIComponent(
            `¡Hola! Estoy interesado en el "${planName}". ¿Podrían darme una cotización personalizada?`
        );
        window.open(`https://wa.me/${WA_PHONE}?text=${message}`, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleQuote}
                className="bg-btn-primary cursor-pointer font-bold flex gap-1.5 h-12 items-center justify-center mt-4 px-4 rounded-lg text-white text-sm transition-all w-full hover:bg-btn-primary/90"
            >
                <MdOutlineChat className="text-lg" />Cotización personalizada            
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-1.5 leading-tight">
                Te redirige a WhatsApp con el mensaje listo
            </p>
        </div>
    );
};
export default BtnPrice;