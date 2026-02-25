import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Our Story' }]} />

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4">// OUR HERITAGE</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
            OUR STORY
          </h1>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 border-l-4 border-accent pl-8 max-w-3xl leading-relaxed">
            Since 2012, Touch Vodka has been crafting premium spirits with an unwavering commitment to excellence. Our story is one of passion, precision, and the relentless pursuit of perfection in every bottle.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-display uppercase mb-8">Our Mission</h2>
              <p className="text-lg font-mono lowercase opacity-80 leading-relaxed mb-6">
                To elevate the art of spirit craft through industrial precision and artisanal soul. We believe that vodka should be more than just a product—it should be an experience.
              </p>
              <p className="text-lg font-mono lowercase opacity-80 leading-relaxed">
                Every bottle represents our commitment to quality, innovation, and the craft of distillation. We don't compromise on ingredients, process, or passion.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 md:p-12 border-4 border-black">
              <h3 className="text-4xl font-display uppercase mb-6">Guiding Principles</h3>
              <ul className="space-y-4 font-mono text-sm lowercase">
                <li className="flex gap-4">
                  <span className="text-accent font-bold">→</span>
                  <span>Premium ingredients sourced from trusted suppliers</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">→</span>
                  <span>Triple distilled for exceptional clarity and smoothness</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">→</span>
                  <span>Pure spring water from protected natural sources</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">→</span>
                  <span>Sustainable practices across all operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-display uppercase mb-12">Our Timeline</h2>
          <div className="space-y-8 md:space-y-12">
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-4xl font-display uppercase mb-2">2012</h3>
              <p className="font-mono text-sm lowercase opacity-80">Touch Vodka founded with a vision to revolutionize premium spirit craft</p>
            </div>
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-4xl font-display uppercase mb-2">2015</h3>
              <p className="font-mono text-sm lowercase opacity-80">Expanded product line with specialty infusions while maintaining core values</p>
            </div>
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-4xl font-display uppercase mb-2">2018</h3>
              <p className="font-mono text-sm lowercase opacity-80">Achieved national distribution and industry recognition for excellence</p>
            </div>
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-4xl font-display uppercase mb-2">2024</h3>
              <p className="font-mono text-sm lowercase opacity-80">Now recognized as a leader in premium vodka craft and innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b-4 border-black bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-display uppercase mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-black p-8">
              <h3 className="text-3xl font-display uppercase mb-4">Excellence</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                Every detail matters. From source selection to final bottling, we maintain the highest standards of quality and craftsmanship.
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-neutral-50">
              <h3 className="text-3xl font-display uppercase mb-4">Innovation</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                We embrace modern techniques while honoring traditional methods, constantly pushing the boundaries of what's possible in spirit craft.
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-neutral-50">
              <h3 className="text-3xl font-display uppercase mb-4">Sustainability</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                We are committed to environmentally responsible practices, ensuring our success doesn't compromise the world we share.
              </p>
            </div>
            <div className="border-4 border-black p-8">
              <h3 className="text-3xl font-display uppercase mb-4">Community</h3>
              <p className="font-mono text-sm lowercase opacity-80 leading-relaxed">
                We believe in giving back and fostering genuine connections with our customers, partners, and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
