
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5511980219977';
  const message = encodeURIComponent('Olá! Vim pelo site da Casa Home Atacado e gostaria de receber o catálogo de preços.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* Pulsing effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Falar no WhatsApp
        </div>

        {/* Button */}
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center">
          <MessageCircle className="w-8 h-8 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
