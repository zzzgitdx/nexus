import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

const values = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: '智能驱动',
    description: '依托先进算法与大数据分析，实现业务流程自动化与智能决策匹配。'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: '安全合规',
    description: '金融级数据加密标准，完善的权限控制体系，保障企业与用户数据绝对安全。'
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: '极致体验',
    description: '以用户为中心的设计理念，打造流畅、直观、高效的跨终端交互体验。'
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-500" />,
    title: '全链路赋能',
    description: '从获客、转化到运营管理，提供端到端的数字化工具，全面提升企业效能。'
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心优势</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
