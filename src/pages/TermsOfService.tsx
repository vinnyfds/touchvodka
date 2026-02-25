import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Legal', href: '#terms-of-service' }, { label: 'Terms of Service' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Terms of Service</h1>
          <p className="text-sm font-mono uppercase tracking-widest opacity-60">Effective: January 1, 2024</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto space-y-8 font-mono text-sm lowercase opacity-80 leading-relaxed">
          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Touch Vodka's website for personal, non-commercial transitory viewing only.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Disclaimer</h2>
            <p>The materials on Touch Vodka's website are provided on an 'as is' basis. Touch Vodka makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Legal Drinking Age</h2>
            <p>By purchasing alcohol products from this website, you confirm that you are of legal drinking age in your jurisdiction. Proof of age may be required at delivery.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us at legal@touchvodka.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
