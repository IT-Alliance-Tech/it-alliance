export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08172A] text-white py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-[1300px] lg:max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-10 pb-10 border-b border-gray-800">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold mb-3 tracking-tight">IT Alliance AI</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Engineering integrated revenue systems for organizations seeking structured scaling.
            </p>
          </div>
          <div>
            <p className="font-bold mb-4 text-sm uppercase tracking-widest">Solutions</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Revenue Architecture</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">CRM Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sales Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">AI Integration</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-sm uppercase tracking-widest">Company</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-sm uppercase tracking-widest">Legal</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} IT Alliance AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
