import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BestSellers() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Shop', href: '#best-sellers' }, { label: 'Best Sellers' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Best Sellers</h1>
          <p className="text-lg font-mono lowercase opacity-80">Our most popular and beloved products</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {['Touch One', 'Touch Artisan', 'Touch Key Lime'].map((name, idx) => (
              <div key={idx} className="border-4 border-black p-8 bg-neutral-50 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-4xl font-display uppercase">{name}</h3>
                  <span className="text-accent font-bold text-lg">#{ idx + 1}</span>
                </div>
                <p className="font-mono text-sm lowercase opacity-80 mb-6">
                  One of our most sought-after selections, loved by enthusiasts worldwide for its exceptional quality and distinctive character.
                </p>
                <a href="#all-products" className="inline-block border-2 border-black px-8 py-3 font-display hover:bg-accent hover:text-white transition-colors">
                  EXPLORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
