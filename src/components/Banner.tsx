import logo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-slate-30 border-b border-slate-200 ">
      <div className="w-[1400px] mx-auto flex justify-between text-left">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Build Your Ideal <br />
          <span className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 
          bg-clip-text text-transparent mt-0">Development Stack</span>
          </h1>
          <p className="mt-3 text-[22px] text-slate-600 leading-relaxed">
            Explore frontend, backend, database, and tooling <br/> options, compare
            them side by side, and put <br/> together the stack that fits your next project.</p>
          <div className="mt-6 flex justify-start gap-3">
              <a href="#technologies" className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600
                 text-white text-[18px] font-semibold hover:opacity-90 hover:shadow-lg transition ">
                Explore Technologies
              </a>
              <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 text-[18px] font-semibold hover:bg-slate-50 transition">
                Learn More
              </button>
          </div>
        </div>
        <div className="flex justify-end shrink-0">
            <img src={logo} alt="Logo" className="object-contain w-[700px] ml-auto block" />
        </div>
      </div>
      
    </section>
  );
};

export default Banner;