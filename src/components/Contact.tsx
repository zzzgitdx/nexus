import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'saas', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', type: 'saas', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">合作共赢</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">无论是产品采购、定制开发还是区域代理，我们期待与您携手</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">总部地址</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">科技园区高新大道88号 智联大厦15层</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">咨询热线</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">400-123-4567 (工作日 9:00-18:00)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">商务邮箱</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">business@nexus-tech.example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">您的姓名 / 公司名称 *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="请输入" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">联系电话 *</label>
                  <input 
                    required 
                    type="tel" 
                    pattern="[0-9]{11}"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="11位手机号码" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">合作意向类型 *</label>
                <select 
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option value="saas">SaaS产品订阅 (助贷/代驾)</option>
                  <option value="custom">定制化开发</option>
                  <option value="agent">区域城市合伙人</option>
                  <option value="other">其他合作</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">需求简述</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" 
                  placeholder="请简单描述您的业务需求或合作想法..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'submitting' ? '提交中...' : status === 'success' ? '提交成功！' : (
                  <>发送合作申请 <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
