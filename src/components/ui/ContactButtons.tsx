"use client";

export default function ContactButtons() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5551996138467";
    const message = "Olá! Gostaria de conversar sobre um projeto web.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    const email = "nessasim@hotmail.com";
    const subject = "Projeto Web - Consulta";
    const body = "Olá! Gostaria de conversar sobre um projeto web.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="flex flex-col space-y-6 justify-center items-center md:items-start">
      {/* Botão WhatsApp */}
      <button 
        onClick={handleWhatsAppClick}
        className="w-full max-w-sm h-14 flex items-center justify-center space-x-3 bg-red-700 text-white hover:bg-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-700/30 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 group relative overflow-hidden rounded-lg"
        aria-label="Abrir WhatsApp para conversar sobre projeto web"
      >
        {/* Efeito de Glow no Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <svg className="w-6 h-6 relative z-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <span className="relative z-10 font-semibold text-base">Falar no WhatsApp</span>
      </button>
      
      {/* Botão Email */}
      <button 
        onClick={handleEmailClick}
        className="w-full max-w-sm h-14 flex items-center justify-center space-x-3 bg-white text-black border-white hover:bg-gray-50 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 group relative overflow-hidden rounded-lg"
        aria-label="Enviar email para nessasim@hotmail.com"
      >
        {/* Efeito de Glow no Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <svg className="w-6 h-6 text-black relative z-10 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span className="relative z-10 font-semibold text-base">Enviar Email</span>
      </button>
    </div>
  );
}
