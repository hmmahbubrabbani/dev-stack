import type { Technology } from "../types/type";
import TechCard from "./TechCard";

interface TechCardsProps {
  technologies: Technology[];
  selectedStackIds: string[];
  onAddToStack: (id: string) => void;
}


const TechCards = ({ technologies, selectedStackIds, onAddToStack}: TechCardsProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {technologies.map((tech) => ( <TechCard key={tech.id} tech={tech} isAdded={selectedStackIds.includes(tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default TechCards;