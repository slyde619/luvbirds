import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const [index, setIndex] = useState(0);
  const slides = [
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454917/court%20props/IMG_0221_k81nkh.jpg', alt: 'Couple holding hands in a field' },
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454924/court%20props/IMG_0160_eqnqau.jpg', alt: 'Romantic walk at sunset' },
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454976/court%20props/IMG_0147_n5ncyh.jpg', alt: 'Laughing together in the city' },
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454982/court%20props/IMG_0157_uglyyw.jpg', alt: 'Engagement celebration' },
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454988/court%20props/IMG_0150_shyel9.jpg', alt: 'Beach moment' },
    { src: 'https://res.cloudinary.com/dhjmedwbx/image/upload/v1758454985/court%20props/IMG_0245_k8k0wx.jpg', alt: 'Beach moment' }
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
      className="relative bg-white pb-20"
      aria-label="Photo Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-slate-900 font-semibold font-monte">
              Moments From Court Marraige
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
                className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-[#EFBF04]' : 'bg-slate-300 hover:bg-slate-400'} transition-colors`}
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