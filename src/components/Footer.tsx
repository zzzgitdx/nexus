import React from 'react';
import { Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Hexagon className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">智联科技 Nexus</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm">
              致力于用科技赋能产业，为企业提供前沿、可靠、智能的数字化解决方案。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">助贷咨询服务系统</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">代驾服务平台</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">定制化开发</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">关于</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">公司介绍</Link></li>
              <li><Link to="/cases" className="hover:text-blue-400 transition-colors">客户案例</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">联系我们</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} 智联科技 Nexus. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
