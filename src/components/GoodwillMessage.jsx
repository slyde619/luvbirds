import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';

function GoodwillMessage() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      ['name', 'message'].forEach((field) => {
        if (!formData[field]) {
          const el = document.getElementById(field);
          el.classList.add('ring-rose-300');
          setTimeout(() => el.classList.remove('ring-rose-300'), 600);
        }
      });
      return;
    }
    const phone = '+2348105195602'; // Replace with host's WhatsApp number (international format)
    const text = `Goodwill Message from ${formData.name}: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowModal(true);
    setFormData({ name: '', message: '' });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="rsvp"
        className="relative"
        aria-label="Goodwill Message"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-20">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-playfair">
                  Goodwill Message
                </h2>
                <p className="mt-2 text-slate-600 text-sm">We’re so excited to celebrate with you. Send a message below.</p>
              </div>
              <div className="hidden sm:block">
                <i data-lucide="calendar-heart" className="w-8 h-8 text-rose-400"></i>
              </div>
            </div>
            <div className="mt-6 space-y-5" aria-describedby="rsvp-hint">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-700 mb-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none px-4 py-3 text-sm placeholder:text-slate-400 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none px-4 py-3 text-sm placeholder:text-slate-400 transition"
                  placeholder="Your RSVP or note for the couple?"
                ></textarea>
              </div>
              <p id="rsvp-hint" className="text-xs text-slate-500">
                Message will open in WhatsApp. No data stored.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tr from-rose-300 to-amber-200 hover:from-rose-300/90 hover:to-amber-200/90 text-slate-900 shadow-lg shadow-rose-200/40 ring-1 ring-rose-200 hover:ring-rose-300 transition-all"
                >
                  <Sparkle size={16} /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="relative z-10 w-full max-w-md rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                  <i data-lucide="check-circle-2" className="w-6 h-6 text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 font-playfair">
                  Message Sent!
                </h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                WhatsApp opened with your message.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  <i data-lucide="x" className="w-4 h-4"></i> Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GoodwillMessage;