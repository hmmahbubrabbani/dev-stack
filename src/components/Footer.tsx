import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="w-[1400px] mx-auto px-6 py-14">
        <div className="grid grid-cols-5 gap-12 pb-12 border-b border-slate-100">
          <div className="col-span-2 flex flex-col justify-between pr-8">
            <div>
              <div className="flex items-center gap-10">
                <img src={logo} alt="Logo" className="h-7 w-auto object-contain" />
              </div>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-[360px]">Curated tools, technologies, 
                and resources for developers building modern software.</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs font-semibold px-3 py-1.5 
              rounded-lg text-slate-700 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50 transition-all">GitHub</a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xs font-semibold px-3 py-1.5 
              rounded-lg text-slate-700 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50 transition-all">Twitter</a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs font-semibold px-3 py-1.5 
              rounded-lg text-slate-700 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50 transition-all">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition">Home</a>
              </li>
              <li>
                <a href="#technologies" className="text-slate-500 hover:text-slate-900 transition">Technologies</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-slate-500 hover:text-slate-900 transition">About</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:text-slate-900 transition">Contact</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:text-slate-900 transition">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-between text-xs text-slate-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition">Privacy</a> <span className="text-slate-300">•</span>
            <a href="#" className="hover:text-slate-900 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;