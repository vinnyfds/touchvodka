import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import TouchVodkaLogo from './TouchVodkaLogo';

interface HeaderProps {
  currentPage?: string;
  onNavClick?: (page: string) => void;
}

export default function Header({ currentPage = 'home', onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Our Story', 'Collection', 'Distillery', 'Cocktails', 'Find Us'];

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    if (onNavClick) {
      onNavClick(item);
    }
  };

  return (
    <header className="border-b-4 border-black sticky top-0 z-[100] bg-white">
      <div className="flex items-stretch h-20 md:h-24">
        <a
          href="#"
          className="px-4 md:px-6 border-r-4 border-black flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <TouchVodkaLogo className="h-6 md:h-8" />
        </a>
        
        <nav className="hidden lg:flex flex-grow items-center px-8 gap-10 text-xs font-bold tracking-widest uppercase">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex-grow lg:hidden"></div>

        {/* Desktop SHOP_NOW Button */}
        <a 
          href="#all-products"
          className="hidden lg:flex p-6 bg-white text-black font-display text-xl hover:bg-accent hover:text-white transition-colors items-center gap-2"
        >
          SHOP_NOW
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-6 bg-white text-black hover:bg-accent transition-colors flex items-center gap-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-accent text-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-display uppercase">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 border-4 border-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-5xl font-display uppercase">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => handleNavClick(item)}
                  className="hover:translate-x-4 transition-transform"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <a 
                href="#all-products"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-6 bg-black text-white font-display text-4xl block text-center hover:bg-accent transition-colors"
              >
                SHOP_NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
