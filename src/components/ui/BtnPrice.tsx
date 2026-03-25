import { MdOutlineChat } from "react-icons/md";

const BtnPrice = () => {
    return (
        <button className="bg-btn-primary cursor-pointer font-bold flex gap-1.5 h-12 items-center justify-center mt-4 px-4 rounded-lg text-white text-sm transition-all w-full hover:bg-btn-primary/90">
            <MdOutlineChat className="text-lg" />Cotización personalizada            
        </button>
    );
};
export default BtnPrice;