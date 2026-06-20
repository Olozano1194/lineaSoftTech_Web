interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <article className="flex gap-6">
      <div className="w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-text-secondary">{description}</p>
      </div>
    </article>
  );
};
export default ProcessStep;