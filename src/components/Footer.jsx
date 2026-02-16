const Footer = () => (
  <footer className="bg-[#0a0a0a] text-gray-500 py-12 px-6 md:px-20 border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      <div>
       <div className="flex items-start">
         <h2 className="text-red-600 font-bold text-3xl mb-4">NETFLIX</h2>
         <p className="text-red-600 font-bold text-xs">Free</p>
       </div>
        <p className="text-sm leading-relaxed">
          The best platform for free movie reviews and information. Experience the magic of cinema.
        </p>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">DMCA Policy</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Service</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Disclaimer</h3>
        <p className="text-xs italic leading-relaxed">
          Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties. We are for informational purposes only.
        </p>
      </div>
    </div>
    <div className="text-center border-t border-white/5 pt-8 text-xs">
      © {new Date().getFullYear()} MovieZone. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;