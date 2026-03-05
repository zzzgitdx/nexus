import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, CheckCircle, Quote } from 'lucide-react';

const cases = [
  {
    name: '某头部助贷咨询集团',
    industry: '金融服务',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
    challenge: '获客渠道分散，客户信息录入繁琐，飞单现象严重，管理成本居高不下。',
    solution: '部署助贷咨询服务系统，统一渠道二维码，全流程数字化管理，实现客户流转透明化。',
    results: [
      { icon: <TrendingUp className="w-4 h-4" />, text: '获客成本降低 30%' },
      { icon: <Clock className="w-4 h-4" />, text: '审批效率提升 200%' },
      { icon: <CheckCircle className="w-4 h-4" />, text: '飞单率降至 0%' }
    ]
  },
  {
    name: '区域领先汽车租赁公司',
    industry: '出行服务',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
    challenge: '缺乏自有的代驾调度系统，依赖第三方平台成本高昂，无法沉淀自有用户。',
    solution: '定制化私有部署代驾服务平台，建立自有运力池与调度中心，打通租赁与代驾业务。',
    results: [
      { icon: <TrendingUp className="w-4 h-4" />, text: '平台抽成节省 100%' },
      { icon: <CheckCircle className="w-4 h-4" />, text: '司机留存率达 95%' },
      { icon: <TrendingUp className="w-4 h-4" />, text: '复购率提升 40%' }
    ]
  },
  {
    name: '某城市物流车队',
    industry: '物流运输',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600',
    challenge: '夜间长途运输司机疲劳驾驶风险高，缺乏临时接替方案，车辆周转率低。',
    solution: '接入代驾平台企业版，实现跨城代驾与疲劳接力服务，企业账户统一结算。',
    results: [
      { icon: <CheckCircle className="w-4 h-4" />, text: '安全事故率下降 80%' },
      { icon: <Clock className="w-4 h-4" />, text: '车辆周转率提升 40%' },
      { icon: <TrendingUp className="w-4 h-4" />, text: '运营成本降低 15%' }
    ]
  },
  {
    name: '某大型连锁餐饮集团',
    industry: '餐饮娱乐',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    challenge: '顾客酒后代驾需求大，但门店叫代驾流程繁琐，体验不佳，存在安全隐患。',
    solution: '在门店部署“一键呼叫代驾”智能终端，与代驾平台无缝对接，提供专属VIP服务。',
    results: [
      { icon: <Clock className="w-4 h-4" />, text: '平均接单时间 < 3分钟' },
      { icon: <CheckCircle className="w-4 h-4" />, text: '顾客满意度 99.8%' },
      { icon: <TrendingUp className="w-4 h-4" />, text: '门店增值收入提升' }
    ]
  }
];

export default function Cases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            客户成功案例
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            见证数字化转型带来的真实业务增长，我们已帮助数百家企业实现降本增效。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 dark:text-blue-400 shadow-sm">
                  {item.industry}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-6">{item.name}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">面临挑战</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">解决方案</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 block">量化成果</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.results.map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg">
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

        {/* Testimonials */}
        <div className="bg-blue-600 dark:bg-blue-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 text-blue-500/30 dark:text-blue-800/50">
            <Quote className="w-64 h-64 rotate-180" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">客户评价</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <p className="text-lg leading-relaxed mb-6 font-light">"自从引入了智联科技的助贷系统，我们的业务流程变得异常清晰。特别是渠道二维码功能，让我们的获客效率翻了一倍，而且再也没有出现过业绩归属不清的纠纷。"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-xl font-bold">张</div>
                  <div>
                    <div className="font-bold">张总</div>
                    <div className="text-blue-200 text-sm">某知名助贷机构 运营总监</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <p className="text-lg leading-relaxed mb-6 font-light">"我们对比了市面上很多代驾系统，智联科技的平台是最稳定、功能最全的。私有化部署让我们完全掌握了自己的数据和运力，这是我们最看重的。"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-xl font-bold">李</div>
                  <div>
                    <div className="font-bold">李总</div>
                    <div className="text-blue-200 text-sm">某大型汽车租赁公司 CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
