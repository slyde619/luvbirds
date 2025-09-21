import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Sparkles } from 'lucide-react';

function NavBar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#fdedad]/30"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1 2xl:py-2 flex items-center justify-between ">
        <a href="#" className="inline-flex items-center gap-2 group" aria-label="Home">
          <img className='size-18' src="https://res.cloudinary.com/dhjmedwbx/image/upload/v1758458239/court%20props/N_20250723_233523_0000-removebg-preview_awsqfh.png" alt="Couple Logo" />
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
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tr from-[#2B432D] to-[#0c130c] hover:from-[#345237] hover:to-[#598b5d] text-slate-200 shadow-lg shadow-black/10 ring-1 ring-white/30 hover:ring-white/50 transition-all"
              >
                <MessageCircle size={16} color="#ebf2ec" /> Goodwill Message
              </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default NavBar;