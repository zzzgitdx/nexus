import React from 'react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">关于智联科技</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              成立于2020年，我们是一家专注于产业数字化的科技创新企业。核心团队来自一线互联网大厂与资深金融/出行行业专家。
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              我们的使命是通过前沿的技术手段，深入理解行业痛点，为企业提供真正“好用、管用、敢用”的SaaS产品，助力传统产业实现智能化升级。
            </p>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
              {[
                { year: '2020', event: '公司成立，确立产业数字化方向' },
                { year: '2021', event: '助贷咨询服务系统V1.0上线' },
                { year: '2022', event: '代驾服务平台发布，服务百家车队' },
                { year: '2024', event: '全面引入AI大模型，实现智能匹配与调度' }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-4 rounded-xl shadow-sm">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.year}</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" alt="团队协作" className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500" alt="会议讨论" className="rounded-2xl w-full h-64 object-cover shadow-lg" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
