import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';

export default function Collection() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Collection' }]} />

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4">// 01_CATALOGUE</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
            THE TOUCH<br />COLLECTION
          </h1>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 border-l-4 border-accent pl-8 max-w-3xl leading-relaxed">
            Our complete collection of premium vodkas, each crafted with unique character and purpose. From classic elegance to bold innovation, find your perfect spirit.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border-4 border-black p-6 flex flex-col group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all"
              >
                <div className="relative aspect-[3/4] mb-6 border-2 border-neutral-200 overflow-hidden bg-neutral-100">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    src={product.image} 
                  />
                  <div className="absolute top-0 right-0 text-white text-[10px] p-1.5 font-bold" style={{ backgroundColor: product.color }}>
                    {product.proof}
                  </div>
                </div>
                <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-[10px] text-neutral-500 mb-4 lowercase font-mono tracking-wider opacity-60">
                  {product.category}
                </p>
                <p className="text-xs font-mono lowercase opacity-70 mb-4 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#all-products"
                  className="mt-auto border-2 border-black p-3 font-display text-sm text-center hover:bg-accent hover:text-white transition-all"
                >
                  EXPLORE
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
