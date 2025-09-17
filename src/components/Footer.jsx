import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">&copy; 2025 Enwongo & Nsisong. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {['instagram', 'pinterest', 'facebook'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full ring-1 ring-slate-200 hover:ring-rose-300 bg-white hover:bg-rose-50 transition-colors"
              aria-label={icon.charAt(0).toUpperCase() + icon.slice(1)}
            >
              <i data-lucide={icon} className="w-5 h-5 text-slate-600"></i>
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;