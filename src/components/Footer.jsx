const Footer = () => (
  <footer className="px-12 py-20 bg-black text-gray-500 text-sm border-t border-white/10">
    <p className="mb-8 hover:underline cursor-pointer">Questions? Contact us.</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">FAQ</li>
        <li className="hover:underline cursor-pointer">Investor Relations</li>
        <li className="hover:underline cursor-pointer">Privacy</li>
        <li className="hover:underline cursor-pointer">Speed Test</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Help Center</li>
        <li className="hover:underline cursor-pointer">Jobs</li>
        <li className="hover:underline cursor-pointer">Cookie Preferences</li>
        <li className="hover:underline cursor-pointer">Legal Notices</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Account</li>
        <li className="hover:underline cursor-pointer">Ways to Watch</li>
        <li className="hover:underline cursor-pointer">Corporate Information</li>
        <li className="hover:underline cursor-pointer">Only on Netflix</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Media Center</li>
        <li className="hover:underline cursor-pointer">Terms of Use</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>
    </div>
    <div className="select select-bordered select-sm bg-black border-gray-700 w-32 mb-8">
       <option>English</option>
    </div>
    <p>Netflix Bangladesh</p>
  </footer>
);

export default Footer;

//