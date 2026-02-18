'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'AI-Enhanced Systems', href: '#ai' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Engagement & Consultation', href: '#engagement' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1300px] lg:max-w-[1400px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        <div className="text-2xl font-black text-[#0B1F3B] tracking-tight">
          IT Alliance AI
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 text-sm font-semibold hover:text-[#0B1F3B] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-[#0B1F3B] transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#0B1F3B] transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#0B1F3B] transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 text-sm font-medium hover:text-[#0B1F3B] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
