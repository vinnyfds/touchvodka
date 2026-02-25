import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function GiftSets() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Shop', href: '#gift-sets' }, { label: 'Gift Sets' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Gift Sets</h1>
          <p className="text-lg font-mono lowercase opacity-80">Curated collections for the discerning vodka enthusiast</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['The Collector Set', 'The Experience Set', 'The Artisan Collection'].map((set, idx) => (
              <div key={idx} className="border-4 border-black p-8 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-display uppercase mb-4">{set}</h3>
                <p className="font-mono text-sm lowercase opacity-80 mb-6">
                  A carefully curated selection of our finest vodkas, elegantly packaged for the perfect gift or personal collection.
                </p>
                <button className="border-2 border-black px-6 py-3 font-display hover:bg-accent hover:text-white transition-colors">
                  ORDER NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
