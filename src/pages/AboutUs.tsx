import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Company', href: '#about-us' }, { label: 'About Us' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">About Us</h1>
          <p className="text-lg font-mono lowercase opacity-80">Touch Vodka's commitment to excellence</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="border-4 border-black p-8 bg-white">
            <h2 className="text-4xl font-display uppercase mb-6">Our Mission</h2>
            <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
              To craft premium vodka that elevates moments and brings people together. We believe in uncompromising quality, innovation, and the artistry of distillation.
            </p>
          </div>

          <div className="border-4 border-black p-8 bg-neutral-50">
            <h2 className="text-4xl font-display uppercase mb-6">Our Team</h2>
            <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
              Our diverse team of experts brings together decades of experience in distillation, marketing, and hospitality. We're passionate about what we do.
            </p>
          </div>

          <div className="border-4 border-black p-8 bg-white">
            <h2 className="text-4xl font-display uppercase mb-6">Our Impact</h2>
            <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
              From supporting local farmers to reducing our environmental footprint, Touch Vodka is committed to making a positive impact on the community and the world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
