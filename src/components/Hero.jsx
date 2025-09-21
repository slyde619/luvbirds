import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Sparkles } from "lucide-react";
import { ClockArrowDown } from "lucide-react";
import { Send } from "lucide-react";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative h-[82vh] sm:h-[86vh] md:h-[88vh] w-full overflow-hidden"
      aria-label="Hero"
    >
      <img
        src="https://res.cloudinary.com/dhjmedwbx/image/upload/v1758456045/court%20props/header2_gipvvu.png"
        alt="Enwongo and Nsisong embracing under golden light"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        // fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[#345237]">
              A celebration of love
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-monte">
              Enwongo <span className="text-[#fbd43c]">&</span> Nsisong
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#fbd43c]">
              September 27, 2025 — 12:00 PM
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#rsvp"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tr from-[#2B432D] to-[#0c130c] hover:from-[#345237] hover:to-[#598b5d] text-slate-200 shadow-lg shadow-black/10 ring-1 ring-white/30 hover:ring-white/50 transition-all"
              >
                <MessageCircle size={16} color="#ebf2ec" /> Goodwill Message
              </a>
              <a
                href="#countdown"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white/90 hover:text-white ring-1 ring-white/30 hover:ring-white/60 backdrop-blur-md bg-white/10 transition-all"
              >
                <ClockArrowDown size={16} /> Countdown
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
    </motion.section>
  );
}

export default Hero;
