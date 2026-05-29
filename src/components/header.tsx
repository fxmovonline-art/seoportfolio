import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic
      const sections = ['home', 'about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Capitalize first letter to match navItem label
            const label = section.charAt(0).toUpperCase() + section.slice(1);
            setActiveSection(label);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100/80 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
              Huzaifa Raheem
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.label);
                }}
                className={`relative font-sans text-sm font-semibold transition-all duration-200 hover:text-indigo-600 ${
                  activeSection === item.label
                    ? 'text-indigo-600'
                    : 'text-slate-600'
                }`}
              >
                {item.label}
                {/* Active indicator bar */}
                <span
                  className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-indigo-600 rounded-full transition-all duration-300 origin-left ${
                    activeSection === item.label ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Let's Chat Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-slate-950 text-white font-sans text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-indigo-600 hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-lg hover:shadow-indigo-100"
            >
              <span>Let's Chat</span>
              <span className="inline-block transition-transform duration-300 group-hover:animate-wave">
                👋
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.label);
                setIsOpen(false);
              }}
              className={`w-full text-center py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                activeSection === item.label
                  ? 'text-indigo-600 bg-indigo-50/50'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 w-full flex justify-center border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs group inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-sans text-sm font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors shadow-sm"
            >
              <span>Let's Chat</span>
              <span className="inline-block group-hover:animate-wave">👋</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
