import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedNumber({ value, suffix = '' }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function DataDashboard() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 dark:bg-blue-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold mb-3"><AnimatedNumber value={500} suffix="+" /></div>
                <div className="text-blue-200 text-sm md:text-base font-medium tracking-wide">服务企业客户</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold mb-3"><AnimatedNumber value={200} suffix="万+" /></div>
                <div className="text-blue-200 text-sm md:text-base font-medium tracking-wide">累计处理订单</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="text-4xl md:text-5xl font-bold mb-3"><AnimatedNumber value={50} suffix="+" /></div>
                <div className="text-blue-200 text-sm md:text-base font-medium tracking-wide">覆盖城市</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="text-4xl md:text-5xl font-bold mb-3"><AnimatedNumber value={99} suffix=".9%" /></div>
                <div className="text-blue-200 text-sm md:text-base font-medium tracking-wide">系统可用性</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
