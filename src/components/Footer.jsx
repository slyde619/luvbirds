import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

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
        <p className='flex gap-2 items-center text-slate-500'>Made with  <Heart fill='currentColor' size={16} className='text-red-600'/> By Gleamcodes</p>
      </div>
    </motion.footer>
  );
}

export default Footer;