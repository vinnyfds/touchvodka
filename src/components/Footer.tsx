import { Instagram, Twitter } from 'lucide-react';
import TouchVodkaLogo from './TouchVodkaLogo';

export default function Footer() {
  return (
    <footer className="bg-white p-8 md:p-16 border-t-4 border-black">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="flex items-start">
            <TouchVodkaLogo className="h-5 md:h-6 flex-shrink-0" />
          </div>
          <p className="text-sm font-mono max-w-xs lowercase border-l-2 border-black pl-6 leading-relaxed opacity-60">
            Elevating spirits since 2012. Crafted for those who appreciate the finer details. Industrial precision meets artisanal soul.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-accent text-xl font-bold tracking-widest">[ SHOP ]</h4>
            <nav className="flex flex-col gap-3 text-sm lowercase font-mono opacity-70">
              {['All Products', 'Best Sellers', 'Gift Sets', 'Limited Editions'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent hover:underline">{link}</a>
              ))}
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-accent text-xl font-bold tracking-widest">[ COMPANY ]</h4>
            <nav className="flex flex-col gap-3 text-sm lowercase font-mono opacity-70">
              {['About Us', 'Sustainability', 'Careers'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent hover:underline">{link}</a>
              ))}
              <a href="#find-us" className="hover:text-accent hover:underline">Contact</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-accent text-xl font-bold tracking-widest">[ LEGAL ]</h4>
            <nav className="flex flex-col gap-3 text-sm lowercase font-mono opacity-70">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent hover:underline">{link}</a>
              ))}
              <a href="#drink-responsibly" className="font-bold text-accent hover:underline mt-2 block">Drink Responsibly</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-10 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-mono opacity-40 tracking-widest text-center sm:text-left">
          © 2024 TOUCH VODKA // INDUSTRIAL_DISTRIBUTION_SYSTEMS // ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-6">
          <a href="#" className="p-3 border-2 border-black hover:bg-accent hover:border-accent transition-all group">
            <Instagram className="w-6 h-6 group-hover:text-white" />
          </a>
          <a href="#" className="p-3 border-2 border-black hover:bg-accent hover:border-accent transition-all group">
            <Twitter className="w-6 h-6 group-hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
