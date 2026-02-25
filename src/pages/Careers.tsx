import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Company', href: '#careers' }, { label: 'Careers' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Careers</h1>
          <p className="text-lg font-mono lowercase opacity-80">Join our growing team at Touch Vodka</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-display uppercase mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-4 border-black p-6 bg-white">
                <h3 className="text-2xl font-display uppercase mb-3">Craft & Passion</h3>
                <p className="font-mono text-sm lowercase opacity-80">Work with people who care deeply about quality and innovation</p>
              </div>
              <div className="border-4 border-black p-6 bg-neutral-50">
                <h3 className="text-2xl font-display uppercase mb-3">Growing Company</h3>
                <p className="font-mono text-sm lowercase opacity-80">Be part of a dynamic team in an expanding industry</p>
              </div>
              <div className="border-4 border-black p-6 bg-neutral-50">
                <h3 className="text-2xl font-display uppercase mb-3">Competitive Comp</h3>
                <p className="font-mono text-sm lowercase opacity-80">Excellent benefits and professional development opportunities</p>
              </div>
              <div className="border-4 border-black p-6 bg-white">
                <h3 className="text-2xl font-display uppercase mb-3">Community</h3>
                <p className="font-mono text-sm lowercase opacity-80">Join a collaborative team committed to excellence</p>
              </div>
            </div>
          </div>

          <div className="border-4 border-black p-8 bg-neutral-50">
            <h2 className="text-4xl font-display uppercase mb-6">Open Positions</h2>
            <p className="font-mono text-sm lowercase opacity-80 mb-6">
              Currently hiring for distillery operations, marketing, sales, and customer service roles. Email careers@touchvodka.com to inquire about opportunities.
            </p>
            <a href="mailto:careers@touchvodka.com" className="inline-block border-2 border-black px-8 py-3 font-display hover:bg-accent hover:text-white transition-colors">
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
