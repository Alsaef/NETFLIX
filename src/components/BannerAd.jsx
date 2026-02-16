import React, { useEffect, useRef } from 'react';

const BannerAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    const adConfig = isMobile 
      ? { key: '5aa65ce5aa4c697df08e3b3a428fee36', format: 'iframe', height: 50, width: 320 } // Mobile
      : { key: 'd175ba3a28d408755c59201bf7b45c7b', format: 'iframe', height: 90, width: 728 }; // Desktop

    if (adRef.current && !adRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');

      conf.innerHTML = `
        atOptions = {
          'key' : '${adConfig.key}',
          'format' : '${adConfig.format}',
          'height' : ${adConfig.height},
          'width' : ${adConfig.width},
          'params' : {}
        };
      `;

      script.src = `https://www.highperformanceformat.com/${adConfig.key}/invoke.js`;
      script.async = true;

      adRef.current.appendChild(conf);
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-10 px-4">
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-3 font-semibold">
        Advertisement
      </span>

      <div 
        className="relative bg-[#111] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-300 hover:border-red-600/30"
        style={{ 
          minWidth: '320px', 
          minHeight: '60px',
          width: '100%',
          maxWidth: '750px' 
        }}
      >
        <div ref={adRef} className="scale-90 sm:scale-100 origin-center"></div>
        
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-600/5 to-transparent"></div>
      </div>

      <div className="w-full max-w-[300px] h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent blur-sm mt-3"></div>
    </div>
  );
};

export default BannerAd;