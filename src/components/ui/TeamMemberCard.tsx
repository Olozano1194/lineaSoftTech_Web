interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

const TeamMemberCard = ({
  name,
  role,
  description,
  image,
  imageAlt,
}: TeamMemberCardProps) => {
  return (
    <article className="group flex flex-col">
      <div className="aspect-[4/5] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-btn-primary font-medium">{role}</p>
      <p className="text-text-secondary mt-2">{description}</p>
    </article>
  );
};
export default TeamMemberCard;