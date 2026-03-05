import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            赋能产业，<br className="md:hidden" />
            <span className="text-gradient">智联未来</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 font-light">
            专注于开发解决实际场景痛点的数字化产品，为助贷咨询与出行服务提供前沿、可靠、智能的SaaS解决方案。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group">
              体验产品演示
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full font-medium transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              联系我们
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
