import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, BookOpen, Users, Network, Car, MapPin, CreditCard, BarChart } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'loan' | 'drive'>('loan');

  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品与方案</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">深度贴合行业场景，打造开箱即用的专业级SaaS平台</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('loan')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'loan' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              助贷咨询服务系统
            </button>
            <button
              onClick={() => setActiveTab('drive')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'drive' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              代驾服务平台
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === 'loan' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">一站式助贷机构数字化引擎</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                  专为助贷咨询机构量身定制，从客户获客、信息录入到产品匹配、渠道管理，实现全流程数字化闭环，大幅提升成单率与管理效率。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <QrCode className="w-6 h-6 text-blue-500" />, title: '扫码自助录入', desc: '客户扫码极速填写申请，告别繁琐纸质表单' },
                    { icon: <BookOpen className="w-6 h-6 text-blue-500" />, title: '融资宝典知识库', desc: '内置丰富信贷产品政策，实时更新，精准匹配' },
                    { icon: <Network className="w-6 h-6 text-blue-500" />, title: '专属渠道裂变', desc: '合作商一键生成专属获客二维码，业绩自动归属' },
                    { icon: <Users className="w-6 h-6 text-blue-500" />, title: '企业客户管理', desc: '全生命周期CRM，跟进记录清晰，防止撞单流失' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl"></div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="助贷系统界面" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700" loading="lazy" />
              </div>
            </motion.div>
          )}

          {activeTab === 'drive' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-3xl blur-2xl"></div>
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" alt="代驾平台界面" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700" loading="lazy" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-6">全场景智能代驾调度网络</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                  对标行业标杆的代驾服务平台，连接车主与司机。提供即时、预约、包时等多种模式，智能调度算法确保高效履约。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Car className="w-6 h-6 text-sky-500" />, title: '多模式呼叫', desc: '支持即时呼叫、预约代驾、包时服务及帮人代叫' },
                    { icon: <MapPin className="w-6 h-6 text-sky-500" />, title: '实时定位轨迹', desc: '精准LBS定位，实时查看司机位置与行驶轨迹' },
                    { icon: <CreditCard className="w-6 h-6 text-sky-500" />, title: '企业级支付', desc: '支持个人在线支付与企业账户月结，自动开票' },
                    { icon: <BarChart className="w-6 h-6 text-sky-500" />, title: '智能调度大屏', desc: '平台端全局运力监控，热力图预测，智能派单' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
