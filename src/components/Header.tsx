import React, { useState, useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <QrCode className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">QRSolutions</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#sectors" onClick={smoothScroll} className="text-gray-600 hover:text-blue-600">Sectors</a></li>
            <li><a href="#plans" onClick={smoothScroll} className="text-gray-600 hover:text-blue-600">Plans</a></li>
            <li><a href="#dashboard" onClick={smoothScroll} className="text-gray-600 hover:text-blue-600">Dashboard</a></li>
            <li><a href="#extras" onClick={smoothScroll} className="text-gray-600 hover:text-blue-600">Extras</a></li>
            <li><a href="#faq" onClick={smoothScroll} className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;