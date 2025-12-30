
import React from 'react';
import { Footprints, Dumbbell, Utensils, Scissors, ArrowUpRight, MessageCircle } from 'lucide-react';

const categoryIcons = {
  feet: <Footprints className="w-12 h-12" />,
  fitness: <Dumbbell className="w-12 h-12" />,
  kitchen: <Utensils className="w-12 h-12" />,
  hair: <Scissors className="w-12 h-12" />
};

const Categories: React.FC = () => {
  const categories = [
    { 
      id: 'feet', 
      title: 'CONFORTO PARA OS PÉS', 
      subtitle: 'ORTOPÉDICOS & PALMILHAS', 
      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800' 
    },
    { 
      id: 'fitness', 
      title: 'FITNESS', 
      subtitle: 'TREINO & BEM-ESTAR', 
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800' 
    },
    { 
      id: 'kitchen', 
      title: 'COZINHA & UTENSÍLIOS', 
      subtitle: 'GASTRONOMIA EM CASA', 
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800' 
    },
    { 
      id: 'hair', 
      title: 'ACESSÓRIOS PARA CABELOS', 
      subtitle: 'CUIDADO PROFISSIONAL', 
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800' 
    },
  ];

  const phoneNumber = '5511980219977';
  const message = encodeURIComponent('Olá! Gostaria de fazer um pedido.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="categories" className="pt-6 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Nossos Produtos
          </h2>
          <div className="h-1.5 w-32 bg-magenta mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {categories.map((cat) => (
            <div key={cat.id} className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-white/5">
              <img 
                src={cat.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={cat.title} 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="mb-6 text-white transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                  {categoryIcons[cat.id as keyof typeof categoryIcons]}
                </div>
                <h3 className="text-lg md:text-xl font-black text-white leading-tight uppercase mb-2">
                  {cat.title}
                </h3>
                <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.subtitle}
                </p>
                <div className="mt-6 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-magenta group-hover:bg-magenta transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Order Button - Visual do anexo na cor verde */}
        <div className="flex justify-center mt-12">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-lg text-lg md:text-2xl font-black uppercase tracking-widest hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-[0_15px_40px_rgba(37,211,102,0.4)] group"
          >
            <MessageCircle className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform" />
            <span>CLIQUE E FAÇA UM PEDIDO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
