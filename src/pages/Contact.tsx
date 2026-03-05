import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'SaaS订阅和定制化开发有什么区别？', a: 'SaaS订阅是开箱即用的标准化产品，按年付费，成本低、上线快，适合大多数企业；定制化开发则是基于您的特殊业务流程进行专属功能开发，支持私有化部署，适合有独特需求的大型企业。' },
  { q: '系统数据安全如何保障？', a: '我们采用金融级的数据加密标准（AES-256），数据传输全程HTTPS加密。对于SaaS客户，数据实行多租户物理/逻辑隔离；对于私有化部署客户，数据完全存储在您自己的服务器上。' },
  { q: '如何成为区域城市合伙人？', a: '如果您在当地拥有丰富的助贷或出行行业资源，欢迎申请成为合伙人。我们将提供极具竞争力的产品折扣、技术培训、市场物料以及专属的售后支持团队。请在下方表单选择“区域城市合伙人”并提交申请。' },
  { q: '购买后提供哪些售后服务？', a: '我们提供7x24小时的技术支持响应、免费的系统升级迭代、专属的客户成功经理进行1对1操作培训，确保您的团队能够熟练使用系统。' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'saas', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', type: 'saas', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            合作共赢
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            无论是产品采购、定制开发还是区域代理，我们期待与您携手，共创产业数字化新未来。
          </motion.p>
        </div>

        {/* Partnership Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'SaaS产品订阅', desc: '开箱即用，按需付费。极速部署，享受持续的免费升级与全天候技术支持。' },
            { title: '定制化开发', desc: '深度贴合业务，专属功能定制。支持私有化部署，数据完全自主掌控。' },
            { title: '区域城市合伙人', desc: '共享千亿级市场红利。丰厚的代理分润，全方位的市场与技术赋能。' }
          ].map((model, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{model.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{model.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-8">联系方式</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">总部地址</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">科技园区高新大道88号<br/>智联大厦 15层</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">咨询热线</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">400-123-4567<br/>(工作日 9:00-18:00)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">商务邮箱</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">business@nexus-tech.com<br/>(24小时内回复)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">提交合作意向</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-bold mb-3">您的姓名 / 公司名称 *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="请输入" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">电子邮箱 *</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold mb-3">合作意向类型 *</label>
                <select 
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="saas">SaaS产品订阅 (助贷/代驾)</option>
                  <option value="custom">定制化开发</option>
                  <option value="agent">区域城市合伙人</option>
                  <option value="other">其他合作</option>
                </select>
              </div>
              <div className="mb-10">
                <label className="block text-sm font-bold mb-3">需求简述</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" 
                  placeholder="请简单描述您的业务需求或合作想法..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 md:py-5 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-blue-500/30"
              >
                {status === 'submitting' ? '提交中...' : status === 'success' ? '提交成功！我们会尽快联系您' : (
                  <>发送合作申请 <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">常见问题解答</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
