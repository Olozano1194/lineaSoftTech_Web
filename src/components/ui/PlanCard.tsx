import { FaCheckCircle } from "react-icons/fa";
import BtnPrice from "./BtnPrice";

interface PlanCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  priceFrom: number;
  features: string[];
  isPopular?: boolean;
  planName: string;
}

const PlanCard = ({
  icon: Icon,
  title,
  description,
  priceFrom,
  features,
  isPopular = false,
  planName,
}: PlanCardProps) => {
  return (
    <article
      className={`relative flex flex-col items-center text-center rounded-2xl shadow-md px-6 py-10 ${isPopular ? "border-2 border-btn-primary scale-105 z-10" : ""}`}
    >
      {isPopular && (
        <span className="absolute -top-4 bg-btn-primary text-white px-4 py-1 rounded-full text-sm font-semibold translate-x-30">
          Más Popular
        </span>
      )}
      <div className="bg-btn-primary/10 p-3 rounded-lg">
        <Icon className="text-btn-primary text-2xl" />
      </div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-text-secondary text-sm mt-2">{description}</p>
      <div className="border-y border-slate-200 py-2 my-4 w-full">
        <p className="font-black flex gap-1 items-center justify-center text-text-primary text-lg tracking-tighter md:text-3xl lg:text-4xl">
          <span className="font-semibold pr-2 text-sm text-text-secondary">Desde</span>
          {priceFrom >= 1000 ? `${priceFrom / 1000}k` : priceFrom}
          <span className="font-semibold pl-2 text-sm text-text-footer-secondary">COP</span>
        </p>
      </div>
      <ul className="flex flex-col gap-3 w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <FaCheckCircle className="text-btn-primary mt-1 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <BtnPrice planName={planName} />
    </article>
  );
};
export default PlanCard;