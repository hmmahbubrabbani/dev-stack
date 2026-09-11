import { useState, use, Suspense } from "react";
import type { Technology } from "./types/type";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCards from "./components/TechCards";
import StackCart from "./components/StackCart";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const techDataPromise: Promise <Technology[]> = fetch("/techData.json").then((res) => {
  return res.json();

});

interface TechSectionProps {
  selectedStackIds: string[];
  onAddToStack: (id: string, techName: string) => void;
  onRemoveFromStack: (id: string, techName: string) => void;
  onClearStack: () => void;
}

const TechSection = ({ selectedStackIds, onAddToStack, onRemoveFromStack, onClearStack }: TechSectionProps) => {
  
  const technologies = use(techDataPromise);

  const selectedTechnologies = technologies.filter((tech) =>
    selectedStackIds.includes(tech.id)
  );

  return (
    <div className="grid grid-cols-4 gap-5">
      
      <div className="col-span-3">
        <TechCards technologies={technologies} selectedStackIds={selectedStackIds} onAddToStack={(id) => {

            const tech = technologies.find((t) => t.id === id);
            if (tech) onAddToStack(id, tech.name);
          }}
        />
      </div>

      <div className="col-span-1">
        <StackCart selectedTechnologies={selectedTechnologies} onRemoveFromStack={(id) => {

            const tech = selectedTechnologies.find((t) => t.id === id);

            onRemoveFromStack(id, tech?.name || "");
          }}
          
          onClearStack={onClearStack}
        />
      </div>
    </div>
  );
};


export default function App() {
  const [selectedStackIds, setSelectedStackIds] = useState <string[]> ([]);

  const handleAddToStack = (id: string, name: string) => {
    if (selectedStackIds.includes(id)) return;

    setSelectedStackIds((prev) => [...prev, id]);
    toast.success(`${name} added to your stack!`, 
      {
      position: "bottom-right",
      autoClose: 2000,

    });
  };

  const handleRemoveFromStack = (id: string, name: string) => {
    setSelectedStackIds((prev) => prev.filter((item) => item !== id));
    toast.info(`${name} removed from stack`, 
      {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleClearStack = () => {
    if (selectedStackIds.length === 0) return;

    setSelectedStackIds([]);

    toast.warn("All technologies removed from stack", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen min-w-[1400px] bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <Banner />
        <main id="technologies" className="w-[1400px] mx-auto px-6 py-10 flex-1">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent font-bold">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-500 mt-1">
              Add any technologies you like — each one can be added only once.
            </p>
          </div>

          <Suspense fallback= {
              <div className="py-20 text-center">
                <div className="inline-block w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-slate-500 mt-3 font-medium">
                  Loading technologies...
                </p>
              </div>
            }
          >
            <TechSection
              selectedStackIds={selectedStackIds}
              onAddToStack={handleAddToStack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearStack={handleClearStack}
            />
          </Suspense>
          
        </main>

      </div>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}