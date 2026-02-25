import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Legal', href: '#privacy-policy' }, { label: 'Privacy Policy' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Privacy Policy</h1>
          <p className="text-sm font-mono uppercase tracking-widest opacity-60">Effective: January 1, 2024</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto space-y-8 font-mono text-sm lowercase opacity-80 leading-relaxed">
          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Introduction</h2>
            <p>
              Touch Vodka ("Company", "we", "our", or "us") operates the touchvodka.com website. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our site.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you complete a form, make a purchase, or contact us. This may include your name, email address, phone number, and other contact information.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">How We Use Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send promotional communications, and comply with legal obligations.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@touchvodka.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
