import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date('September 27, 2025 12:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="countdown"
      className="relative"
      aria-label="Countdown timer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-slate-200/70 shadow-sm p-5 sm:p-6 md:p-8">
          <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-playfair">
                The Countdown
              </h2>
              <p className="mt-1 text-slate-600 text-sm">Until we say “I do.”</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-8 w-full md:w-auto">
              {['days', 'hours', 'mins', 'secs'].map((unit) => (
                <motion.div
                  key={unit}
                  className="rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 ring-1 ring-rose-100/60 p-4 text-center"
                  animate={time[unit] !== time.prev?.[unit] ? { scale: 1.1, opacity: 0.9 } : {}}
                  transition={{ duration: 0.18 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold tabular-nums text-slate-900">
                    {time[unit]}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-slate-600">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Countdown;