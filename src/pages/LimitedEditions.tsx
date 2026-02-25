import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function LimitedEditions() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Shop', href: '#limited-editions' }, { label: 'Limited Editions' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Limited Editions</h1>
          <p className="text-lg font-mono lowercase opacity-80">Exclusive releases and special collections</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="border-4 border-black p-8 bg-neutral-50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-display uppercase">Heritage Reserve</h3>
                <span className="text-accent font-bold">EXCLUSIVE</span>
              </div>
              <p className="font-mono text-sm lowercase opacity-80 mb-6">
                A limited release celebrating our heritage. Only 500 bottles produced. Numbered and signed by our master distiller.
              </p>
              <a href="#find-us" className="inline-block border-2 border-black px-8 py-3 font-display hover:bg-accent hover:text-white transition-colors">
                INQUIRE
              </a>
            </div>

            <div className="border-4 border-black p-8 bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-display uppercase">Craft Series</h3>
                <span className="text-accent font-bold">LIMITED</span>
              </div>
              <p className="font-mono text-sm lowercase opacity-80 mb-6">
                Rotating limited releases featuring experimental flavor profiles and special aging processes. Available while supplies last.
              </p>
              <a href="#all-products" className="inline-block border-2 border-black px-8 py-3 font-display hover:bg-accent hover:text-white transition-colors">
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
