import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-20">
      <div className="w-[1400px] mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <img src={logo} alt="Logo" className="h-7 w-auto object-contain" />
          </div>
          <nav className="flex items-center gap-6 text-22px font-bold text-slate-600">
            <a href="#" className="text-pink-600 font-semibold">Home</a>
            <a href="#" className="hover:text-slate-900">Technologies</a>
            <a href="#" className="hover:text-slate-900">Projects</a>
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>
        
          <div className="flex items-center gap-3">
            <button className="text-22px font-semibold px-3 py-1.5 text-slate-700 hover:text-slate-900">Sign In </button>
            <button className="text-22px font-semibold px-5 py-1.5 rounded-3xl bg-pink-600 text-white hover:bg-pink-700 transition">Sign Up </button>
          </div>
        
      </div>
    </header>
  );
};

export default Navbar;