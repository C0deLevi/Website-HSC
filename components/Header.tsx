import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md text-black border-gray-200 py-3' 
            : 'bg-transparent text-white border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center z-50">
            <div className={`text-2xl font-bold tracking-tighter uppercase ${isScrolled || mobileMenuOpen ? 'text-black' : 'text-white'}`}>
              Van Hal<span className="font-light"> Group</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveSubMenu(item.label)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <a 
                  href={item.href} 
                  className={`text-sm font-semibold tracking-wide uppercase hover:text-red-600 transition-colors flex items-center gap-1 ${isScrolled ? 'text-black' : 'text-white'}`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-3 h-3" />}
                </a>

                {/* Mega Menu Dropdown */}
                {item.subItems && activeSubMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-xl border border-gray-100 py-4 fade-up-enter fade-up-active">
                    {item.subItems.map(sub => (
                      <a 
                        key={sub.label} 
                        href={sub.href} 
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden z-50 text-current"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-30 transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-2xl font-bold uppercase tracking-tight text-black hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;