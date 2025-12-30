
import React from 'react';
import { ShoppingCart, Star, Lightbulb, Phone, User, Instagram, MessageCircle, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-magenta transition-colors">
                CASA HOME <span className="text-magenta group-hover:text-white">ATACADO</span>
              </span>
              <span className="text-[9px] tracking-[0.4em] font-bold text-white/40 uppercase">Excelência em Utilidades</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#hero" className="text-[11px] font-bold text-white hover:text-magenta transition-colors uppercase tracking-widest">Catálogo</a>
            <a href="#categories" className="text-[11px] font-bold text-white hover:text-magenta transition-colors uppercase tracking-widest">Produtos</a>
            <a href="#benefits" className="text-[11px] font-bold text-white hover:text-magenta transition-colors uppercase tracking-widest">Vantagens</a>
            <a href="#contact" className="text-[11px] font-bold text-white hover:text-magenta transition-colors uppercase tracking-widest">Contato</a>
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6">
               <a href="#" className="text-white hover:text-magenta transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="text-white hover:text-magenta transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
            <button className="bg-magenta text-white px-4 py-2 md:px-6 md:py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
              Login Lojista
            </button>
            <button className="lg:hidden text-white"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
