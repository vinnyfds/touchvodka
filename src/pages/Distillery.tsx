import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { Sprout, Droplets, Waves } from 'lucide-react';

export default function Distillery() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Distillery' }]} />

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4">// PROCESS_REPORT_04</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
            THE ART OF<br />DISTILLATION
          </h1>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 border-l-4 border-accent pl-8 max-w-3xl leading-relaxed">
            Crafted with passion and precision, our proprietary process ensures the smoothest finish in every bottle. We don't just make spirits; we engineer experiences.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-b-4 border-black bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-display uppercase mb-6">Premium Grains</h2>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed mb-6">
                Sourced from the finest local fields, our winter wheat provides a silky texture and a naturally sweet finish. Each grain is carefully selected for optimal flavor and quality.
              </p>
              <div className="border-l-4 border-accent pl-6 space-y-3">
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Winter wheat from certified suppliers
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Rigorous quality testing standards
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Sustainable farming partnerships
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 border-4 border-black flex items-center justify-center min-h-[300px]">
              <Sprout className="w-24 h-24 text-accent opacity-70" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-neutral-50 p-8 border-4 border-black flex items-center justify-center min-h-[300px] order-2 lg:order-1">
              <Droplets className="w-24 h-24 text-accent opacity-70" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-display uppercase mb-6">10x Distilled</h2>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed mb-6">
                Our proprietary 10-stage distillation process refines our vodka to exceptional clarity and smoothness. Each distillation meticulously removes impurities while preserving character and complexity. For Touch One, we take it further with charcoal filtering for ultimate purity.
              </p>
              <div className="border-l-4 border-accent pl-6 space-y-3">
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> 10-stage distillation process
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Precise temperature control
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Touch One includes charcoal filtering
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-display uppercase mb-6">Pure Spring Water</h2>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed mb-6">
                Blended with pristine, mineral-rich water from natural protected springs. Our water sourcing is integral to achieving our signature profile.
              </p>
              <div className="border-l-4 border-accent pl-6 space-y-3">
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Mineral-rich natural springs
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Advanced filtration systems
                </p>
                <p className="font-mono text-xs lowercase opacity-70">
                  <span className="text-accent font-bold">→</span> Environmental protection efforts
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 border-4 border-black flex items-center justify-center min-h-[300px]">
              <Waves className="w-24 h-24 text-accent opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-display uppercase mb-12">Quality Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-black p-8 bg-white">
              <h3 className="text-3xl font-display uppercase mb-4">Testing Standards</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                Every batch undergoes rigorous testing including taste analysis, purity verification, and proof certification to ensure consistency.
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-white">
              <h3 className="text-3xl font-display uppercase mb-4">Innovation Lab</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                Our dedicated research facility explores new techniques and flavor combinations while maintaining our core commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
