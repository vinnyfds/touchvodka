import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { COCKTAILS } from '../data/cocktails';
import CocktailCard from '../components/CocktailCard';

export default function Cocktails() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Cocktails' }]} />

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl">
          <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4">// 02_MIXOLOGY</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
            SIGNATURE<br />COCKTAILS
          </h1>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 border-l-4 border-accent pl-8 max-w-3xl leading-relaxed">
            Discover our collection of handcrafted cocktails, each one carefully designed to showcase the unique character of every Touch Vodka variant. From timeless classics to innovative creations, these are drinks that demand to be experienced.
          </p>
        </div>
      </section>

      {/* Cocktails Collection */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="space-y-12 md:space-y-16">
            {COCKTAILS.map((cocktail, idx) => (
              <div key={cocktail.id}>
                <CocktailCard 
                  cocktail={cocktail}
                  isReversed={idx % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-display uppercase mb-6 leading-tight">
            READY TO MIX?
          </h2>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 mb-8">
            Each cocktail is a journey. Explore your palate, find your favorite, and share your creation with us.
          </p>
          <button className="px-12 py-5 bg-accent text-white font-display text-3xl md:text-4xl hover:bg-black transition-all active:translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
            DISCOVER_COLLECTION
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
