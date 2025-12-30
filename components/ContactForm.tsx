
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 grid lg:grid-cols-2 gap-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]"></div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Pronto para abastecer sua loja?
              </h2>
              <p className="text-slate-400 text-lg">
                Preencha o formulário e um de nossos consultores comerciais entrará em contato em até 2 horas.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-indigo-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Telefone / WhatsApp</p>
                  <p className="text-white text-xl font-bold">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">E-mail Comercial</p>
                  <p className="text-white text-xl font-bold">comercial@homewholesalepro.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-indigo-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Matriz</p>
                  <p className="text-white text-xl font-bold">São Paulo, SP - Distrito Industrial</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Recebemos seu contato!</h3>
                <p className="text-slate-500">Em breve um consultor entrará em contato com você via WhatsApp.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 font-bold hover:underline pt-4"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">E-mail Corporativo</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all" placeholder="email@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">WhatsApp</label>
                    <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">CNPJ (Opcional)</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all" placeholder="00.000.000/0001-00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Qual categoria te interessa?</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all">
                    <option>Cozinha & Utensílios</option>
                    <option>Cama, Mesa e Banho</option>
                    <option>Decoração</option>
                    <option>Mix Completo</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                  Solicitar Tabela de Preços <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
