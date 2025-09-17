import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const [index, setIndex] = useState(0);
  const slides = [
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop', alt: 'Couple holding hands in a field' },
    { src: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80', alt: 'Romantic walk at sunset' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop', alt: 'Laughing together in the city' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop', alt: 'Engagement celebration' },
    { src: 'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80', alt: 'Beach moment' },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(autoplay);
  }, [slides.length]);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="gallery"
      className="relative"
      aria-label="Photo Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-playfair">
              Moments We Treasure
            </h2>
            <p className="mt-2 text-slate-600 text-sm">A glimpse into our journey.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full ring-1 ring-slate-200 bg-white hover:bg-rose-50 hover:ring-rose-200 transition-colors"
              aria-label="Previous slide"
            >
              <i data-lucide="chevron-left" className="w-5 h-5 text-slate-600"></i>
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full ring-1 ring-slate-200 bg-white hover:bg-rose-50 hover:ring-rose-200 transition-colors"
              aria-label="Next slide"
            >
              <i data-lucide="chevron-right" className="w-5 h-5 text-slate-600"></i>
            </button>
          </div>
        </div>
        <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full h-[58vh] sm:h-[56vh] md:h-[60vh]">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white ring-1 ring-slate-200 transition-colors"
              aria-label="Previous slide"
            >
              <i data-lucide="chevron-left" className="w-5 h-5 text-slate-700"></i>
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full bg-white/90 hover:bg-white ring-1 ring-slate-200 transition-colors"
              aria-label="Next slide"
            >
              <i data-lucide="chevron-right" className="w-5 h-5 text-slate-700"></i>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 py-4 bg-white">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-rose-400' : 'bg-slate-300 hover:bg-slate-400'} transition-colors`}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery;