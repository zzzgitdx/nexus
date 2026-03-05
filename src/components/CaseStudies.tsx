import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';

const cases = [
  {
    name: '某头部助贷咨询集团',
    industry: '金融服务',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
    challenge: '获客渠道分散，客户信息录入繁琐，飞单现象严重。',
    solution: '部署助贷咨询服务系统，统一渠道二维码，全流程数字化管理。',
    results: [
      { icon: <TrendingUp className="w-4 h-4" />, text: '获客成本降低 30%' },
      { icon: <Clock className="w-4 h-4" />, text: '审批效率提升 200%' }
    ]
  },
  {
    name: '区域领先汽车租赁公司',
    industry: '出行服务',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
    challenge: '缺乏自有的代驾调度系统，依赖第三方平台成本高昂。',
    solution: '定制化私有部署代驾服务平台，建立自有运力池与调度中心。',
    results: [
      { icon: <TrendingUp className="w-4 h-4" />, text: '平台抽成节省 100%' },
      { icon: <CheckCircle className="w-4 h-4" />, text: '司机留存率达 95%' }
    ]
  },
  {
    name: '某城市物流车队',
    industry: '物流运输',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600',
    challenge: '夜间长途运输司机疲劳驾驶风险高，缺乏临时接替方案。',
    solution: '接入代驾平台企业版，实现跨城代驾与疲劳接力服务。',
    results: [
      { icon: <CheckCircle className="w-4 h-4" />, text: '安全事故率下降 80%' },
      { icon: <Clock className="w-4 h-4" />, text: '车辆周转率提升 40%' }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户成功案例</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">见证数字化转型带来的真实业务增长</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400">
                  {item.industry}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">挑战</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.challenge}</p>
                </div>
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">方案</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.solution}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">成果</span>
                  <div className="space-y-2">
                    {item.results.map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {res.icon}
                        <span>{res.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
