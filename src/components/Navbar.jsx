import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function NavBar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#FDF7F9]"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between ">
        <a href="#" className="inline-flex items-center gap-2 group" aria-label="Home">
          <div className="h-8 w-8 rounded-md flex items-center justify-center bg-slate-900/90 text-white">
            <span className="text-[12px] tracking-tight font-medium">EN</span>
          </div>
          <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Enwongo ye Nsisong</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {['Story', 'Gallery', 'Details'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-tr from-rose-200/70 to-amber-100/70 hover:from-rose-200 hover:to-amber-100 text-slate-900 shadow-sm hover:shadow ring-1 ring-rose-200/60 hover:ring-rose-300 transition-all"
          >
            <Sparkles size={16} />RSVP
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default NavBar;