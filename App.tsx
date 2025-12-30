
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Categories from './components/Categories.tsx';
import WhatsAppButton from './components/AIChatAssistant.tsx';
import { ShoppingBag, Instagram, Facebook, Linkedin, MessageCircle, Truck, ShieldCheck, Box, CreditCard } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-magenta selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Categories />

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-[#050505] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Vantagens Exclusivas</h2>
              <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">Por que ser um parceiro Casa Home?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Truck className="w-10 h-10 text-magenta" />, title: "Logística Inteligente", desc: "Entrega expressa para todo o Brasil com rastreio em tempo real." },
                { icon: <ShieldCheck className="w-10 h-10 text-magenta" />, title: "Qualidade Premium", desc: "Produtos rigorosamente selecionados com garantia de fábrica." },
                { icon: <Box className="w-10 h-10 text-magenta" />, title: "Estoque em Lote", desc: "Pronta entrega imediata para grandes volumes e reposições." },
                { icon: <CreditCard className="w-10 h-10 text-magenta" />, title: "Faturamento Flexível", desc: "Condições especiais no boleto bancário e crédito para lojistas." }
              ].map((benefit, i) => (
                <div key={i} className="bg-black border border-white/5 p-10 rounded-2xl hover:border-magenta/50 transition-colors group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{benefit.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wholesale Stats */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-magenta font-black text-5xl md:text-6xl tracking-tighter">24h</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Expedição Média</p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-black text-5xl md:text-6xl tracking-tighter">+15k</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Itens em Catálogo</p>
            </div>
            <div className="space-y-2">
              <div className="text-magenta font-black text-5xl md:text-6xl tracking-tighter">100%</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Nota Fiscal Emitida</p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-black text-5xl md:text-6xl tracking-tighter">+5k</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Lojistas Atendidos</p>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 bg-[#ff00ff] text-black">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Transforme seu <br /> Varejo hoje
            </h2>
            <p className="text-black/80 text-lg md:text-2xl font-bold max-w-2xl mx-auto tracking-tight">
              Solicite acesso ao nosso portal de preços exclusivo para CNPJ e receba nossa tabela completa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 bg-black text-white px-10 py-6 rounded-sm text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Acessar Portal <ShoppingBag className="w-6 h-6" />
              </button>
              <a 
                href="https://wa.me/5511980219977" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 bg-white text-black px-10 py-6 rounded-sm text-lg font-black uppercase tracking-widest hover:brightness-95 transition-transform border-4 border-black"
              >
                Falar no WhatsApp <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black tracking-tighter text-white">
                  CASA HOME <span className="text-magenta">ATACADO</span>
                </span>
              </div>
              <p className="text-white/40 leading-relaxed text-sm max-w-md font-medium">
                Sua parceira estratégica no atacado de utilidades. Oferecemos as melhores margens e o giro mais rápido do mercado varejista brasileiro. Especialistas em facilitar a vida do lojista.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-white uppercase text-xs tracking-[0.3em] mb-10">Explorar</h4>
              <ul className="space-y-4 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-magenta transition-colors">Produtos</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">Lançamentos</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">Tabela de Preços</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white uppercase text-xs tracking-[0.3em] mb-10">Suporte</h4>
              <ul className="space-y-4 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-magenta transition-colors">Rastreio de Pedido</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">Cadastro CNPJ</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">Política de Troca</a></li>
                <li><a href="#" className="hover:text-magenta transition-colors">SAC</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-white/20 font-black uppercase tracking-[0.4em]">
            <p>© 2024 CASA HOME ATACADO BRASIL. CNPJ: 00.000.000/0001-00</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
