import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Products from '../components/Products';
import DataDashboard from '../components/DataDashboard';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <CoreValues />
      <Products />
      <DataDashboard />
      
      {/* CTA Section for smooth transition to footer */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass dark:bg-slate-800/80 rounded-3xl p-12 md:p-20 text-center border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">准备好开启数字化转型了吗？</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              联系我们的行业专家，获取专属的业务解决方案与产品演示，体验智联科技带来的效能飞跃。
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1">
              立即咨询合作
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
