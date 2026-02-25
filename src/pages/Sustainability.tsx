import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Company', href: '#sustainability' }, { label: 'Sustainability' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Sustainability</h1>
          <p className="text-lg font-mono lowercase opacity-80">Our commitment to environmental responsibility</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="border-4 border-black p-8 bg-white">
            <h2 className="text-4xl font-display uppercase mb-6">Environmental Practices</h2>
            <ul className="space-y-4 font-mono text-sm lowercase opacity-80">
              <li className="flex gap-4">
                <span className="text-accent font-bold">→</span>
                <span>100% renewable energy in our distillery operations</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold">→</span>
                <span>Recycled and recyclable packaging materials</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold">→</span>
                <span>Water conservation and filtration systems</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold">→</span>
                <span>Carbon-neutral shipping options available</span>
              </li>
            </ul>
          </div>

          <div className="border-4 border-black p-8 bg-neutral-50">
            <h2 className="text-4xl font-display uppercase mb-6">Community Partnerships</h2>
            <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
              We partner with local farms and suppliers to support sustainable agriculture and reduce our transportation footprint while creating jobs in our community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
