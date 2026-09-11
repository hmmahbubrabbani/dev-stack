import type { Technology } from "../types/type";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (id: string) => void;
}

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {

  return (
    <div
      className={`bg-white rounded-xl p-5 flex flex-col justify-between transition-all duration-200 ${
        isAdded
          ? "border border-pink-500 shadow-md ring-2 ring-pink-100"
          : "border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5" }`}>
      <div>
       
        <div className="flex items-center justify-between mb-3">
          <div className="w-13 h-13 rounded-lg flex items-center justify-center p-2">
            <img src={tech.icon} alt={`${tech.name} logo`} className="w-full h-full object-contain" loading="lazy"/>
          </div>
          <span className="font-semibold text-xs px-3 py-0.5 rounded bg-blue-50 text-pink-600">
            {tech.badge}
          </span>
        </div>

     
        <h3 className="text-[22px] font-bold text-slate-900">{tech.name}</h3>
        <p className="text-[18px] text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

 
      <div className="mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3 text-[11px] text-slate-500 font-medium">
          <div className="flex gap-6">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-[16px]">{tech.category}</span>
            <span className="px-2 py-0.5 rounded text-[16px]">{tech.level}</span>
          </div>
          <div>
            <span className="font-bold text-amber-500 flex items-center gap-1">
              ★ <span className="text-slate-700">{tech.rating.toFixed(1)}</span>
            </span>
          </div>
        </div>

      <button onClick={() => onAddToStack(tech.id)}
          disabled={isAdded}
          className={`w-full py-2 rounded-lg text-s font-semibold transition flex items-center justify-center gap-1.5 ${
            isAdded
              ? "bg-slate-100 text-slate-500 cursor-not-allowed border border-slate-200"
              : "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]" }`} >
          {isAdded ? (
            <>
              <svg className="w-4 h-4 text-pink-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span className="bg-pink-100 text-pink-600 text-[16px]">Added to Stack</span>
            </>
          ) : ( "Add to Stack" )}

        </button>
      </div>
    </div>
  );
};

export default TechCard;