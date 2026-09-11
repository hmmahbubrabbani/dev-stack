import type { Technology } from "../types/type";

interface StackCartProps {
  selectedTechnologies: Technology[];
  onRemoveFromStack: (id: string) => void;
  onClearStack: () => void;
}


const StackCart = ({ selectedTechnologies, onRemoveFromStack, onClearStack}: StackCartProps) => {

  return (
    <aside className="w-full bg-white border border-slate-200 rounded-xl p-5 sticky top-24 shadow-xs flex flex-col">

      <div className="pb-3 border-b border-slate-100">
        <h3 className="font-bold text-[16px] text-slate-900">Your Stack</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {selectedTechnologies.length === 0 ? "No" : selectedTechnologies.length}{" "}
          Technology Selected
        </p>
      </div>

    {selectedTechnologies.length === 0 ? (
        <div className="py-8 text-center border-2 border-dashed border-slate-200 rounded-2xl mt-3">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <ul className="mt-3 space-y-2 max-h-[420px] overflow-y-auto pr-1">
          {selectedTechnologies.map((item) => (
            <li key={item.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition text-xs">
           
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-md bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="truncate">
                  <p className="font-bold text-[16px] text-slate-800 truncate leading-tight">
                    {item.name}
                  </p>
                  <span className="text-[12px] text-slate-500 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

         
              <button onClick={() => onRemoveFromStack(item.id)} title="Remove from stack"
                className="text-slate-400 hover:text-red-600 font-bold px-1.5 py-0.5 rounded transition ml-2"> ✕ </button>
            </li>
          ))}

        </ul>
      )}
      {selectedTechnologies.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={onClearStack}
            className="w-full py-2 text-xs font-semibold text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 rounded-lg transition">
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackCart;