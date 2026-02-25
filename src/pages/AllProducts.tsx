import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

export default function AllProducts() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Shop', href: '#all-products' }, { label: 'All Products' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">All Products</h1>
          <p className="text-lg font-mono lowercase opacity-80">Browse our complete selection of premium vodkas</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="border-4 border-black p-6 flex flex-col group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all"
              >
                <div className="relative aspect-[3/4] mb-4 border-2 border-neutral-200 bg-neutral-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
                  <div className="absolute top-0 right-0 text-white text-[10px] p-1.5 font-bold" style={{ backgroundColor: product.color }}>
                    {product.proof}
                  </div>
                </div>
                <h3 className="text-xl font-display mb-1">{product.name}</h3>
                <p className="text-xs font-mono lowercase opacity-60 mb-3">{product.category}</p>
                <a href={`#product/${product.id}`} className="mt-auto border-2 border-black p-2 text-center font-display text-sm hover:bg-accent hover:text-white">
                  VIEW
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
