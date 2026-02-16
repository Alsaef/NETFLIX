import React, { useEffect, useRef } from 'react';

const BannerAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');

      conf.innerHTML = `
        atOptions = {
          'key' : '5aa65ce5aa4c697df08e3b3a428fee36',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;

      script.src = "https://www.highperformanceformat.com/5aa65ce5aa4c697df08e3b3a428fee36/invoke.js";
      script.async = true;

      adRef.current.appendChild(conf);
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-10 px-4">
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-medium">
        Advertisement
      </span>
      <div 
        className="relative bg-[#1a1a1a] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden shadow-xl"
        style={{ minWidth: '320px', minHeight: '50px' }}
      >
        <div ref={adRef}></div>
      </div>
      <div className="w-64 h-1 bg-red-600/10 blur-xl mt-1"></div>
    </div>
  );
};

export default BannerAd;