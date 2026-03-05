import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            关于智联科技
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            以技术驱动产业升级，做企业数字化转型的可靠伙伴。
          </motion.p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">我们的愿景</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              成为中国领先的产业数字化SaaS服务商，让每一家传统企业都能轻松拥有前沿的科技工具，实现业务的指数级增长。
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <Zap className="w-12 h-12 text-sky-600 dark:text-sky-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              深入理解行业痛点，摒弃花哨无用的功能，为企业提供真正“好用、管用、敢用”的数字化产品，降低技术门槛。
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">发展历程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-600 before:via-sky-400 before:to-transparent">
              {[
                { year: '2020.05', title: '公司成立', desc: '智联科技（Nexus）在科技园区正式注册成立，确立产业数字化战略方向。' },
                { year: '2021.03', title: '助贷系统V1.0上线', desc: '首款核心产品“助贷咨询服务系统”正式发布，签约首批10家种子客户。' },
                { year: '2022.08', title: '代驾平台发布', desc: '历时一年研发，“代驾服务平台”上线，首月即服务超过50家区域车队。' },
                { year: '2023.06', title: '完成A轮融资', desc: '获得知名机构数千万A轮融资，用于核心技术研发与市场拓展。' },
                { year: '2024.01', title: '全面引入AI大模型', desc: '产品矩阵全线升级，引入智能匹配与调度算法，迈入AI原生SaaS时代。' },
                { year: '2025.至今', title: '服务企业破500家', desc: '业务覆盖全国50+城市，累计处理订单超200万，成为行业标杆。' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-xl">{item.year}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-16">核心团队</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'David Chen', role: '创始人 & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', desc: '前一线互联网大厂产品总监，10年+企业级SaaS产品经验。' },
              { name: 'Sarah Lin', role: '联合创始人 & CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', desc: '资深架构师，曾主导亿级并发出行平台底层架构设计。' },
              { name: 'Michael Wang', role: '业务副总裁', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', desc: '深耕金融助贷行业15年，拥有丰富的行业资源与实战经验。' },
              { name: 'Elena Zhang', role: '设计总监', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', desc: '屡获殊荣的UX设计师，致力于打造极致的企业级产品体验。' }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden group text-center"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" loading="lazy" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
