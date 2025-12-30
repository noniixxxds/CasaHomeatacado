
import React from 'react';
import { BENEFITS, ICON_MAP } from '../constants.tsx';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Por que nos escolher?</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Parceria sólida para o <span className="text-indigo-600">crescimento</span> do seu varejo.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Não somos apenas fornecedores. Somos parceiros estratégicos que ajudam você a vender mais com os melhores produtos e condições.
            </p>
            <div className="pt-4">
              <div className="flex -space-x-3 mb-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-50" src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  +2k
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-900">Mais de 2.300 lojistas confiam em nós mensalmente.</p>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 w-fit group-hover:bg-indigo-50 transition-colors">
                  {ICON_MAP[benefit.icon]}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
