
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-10 md:pt-52 md:pb-12 bg-black overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-magenta/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-magenta/30 bg-magenta/5 text-magenta text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
          Líder Nacional em Atacado
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
          Sua Loja <br />
          <span className="text-transparent border-text-magenta" style={{ WebkitTextStroke: '1px #ff00ff' }}>Mais Completa</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
