import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { QrCode, BookOpen, Users, Network, Car, MapPin, CreditCard, BarChart, Shield, Zap, Smartphone, Settings, CheckCircle2 } from 'lucide-react';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            我们的核心产品矩阵
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            深度贴合行业场景，打造开箱即用的专业级SaaS平台，助力企业实现全链路数字化升级。
          </motion.p>
        </div>

        {/* Product 1: Loan System */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" /> 金融科技解决方案
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">助贷咨询服务系统</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                专为助贷咨询机构量身定制，从客户获客、信息录入到产品匹配、渠道管理，实现全流程数字化闭环。大幅提升成单率与管理效率，有效防止飞单与客户流失。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '全生命周期CRM客户管理',
                  '智能信贷产品匹配引擎',
                  '多层级渠道分佣结算系统',
                  '银行级数据安全加密'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="助贷系统界面" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700" loading="lazy" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <QrCode className="w-6 h-6 text-blue-500" />, title: '扫码自助录入', desc: '客户扫码极速填写申请，告别繁琐纸质表单，数据直达后台' },
              { icon: <BookOpen className="w-6 h-6 text-blue-500" />, title: '融资宝典知识库', desc: '内置丰富信贷产品政策，实时更新，业务员可随时查阅' },
              { icon: <Network className="w-6 h-6 text-blue-500" />, title: '专属渠道裂变', desc: '合作商一键生成专属获客二维码，业绩自动归属，分润清晰' },
              { icon: <Users className="w-6 h-6 text-blue-500" />, title: '企业客户管理', desc: '全生命周期跟进记录，公海私海池流转机制，防止撞单' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product 2: Drive System */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" alt="代驾平台界面" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 text-sm font-semibold mb-6">
                <Car className="w-4 h-4" /> 智慧出行解决方案
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">代驾服务平台</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                对标行业标杆的代驾服务平台，连接车主与司机。提供即时、预约、包时等多种模式，智能调度算法确保高效履约，帮助传统汽车服务公司快速搭建自有代驾网络。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '用户端/司机端双原生APP+小程序',
                  '毫秒级实时定位与轨迹追踪',
                  '智能派单与热力图调度',
                  '完善的保险与安全保障体系'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6 text-sky-500" />, title: '多模式呼叫', desc: '支持即时呼叫、预约代驾、包时服务及帮人代叫，满足各类场景' },
              { icon: <MapPin className="w-6 h-6 text-sky-500" />, title: '实时定位轨迹', desc: '精准LBS定位，实时查看司机位置与行驶轨迹，支持行程分享' },
              { icon: <CreditCard className="w-6 h-6 text-sky-500" />, title: '企业级支付', desc: '支持个人在线支付与企业账户月结，自动生成电子发票' },
              { icon: <BarChart className="w-6 h-6 text-sky-500" />, title: '智能调度大屏', desc: '平台端全局运力监控，热力图预测需求，智能派单提升效率' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
