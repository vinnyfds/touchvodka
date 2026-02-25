import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRODUCTS } from '../constants';
import { COCKTAILS } from '../data/cocktails';
import { ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
        <Header />
        <div className="max-w-6xl mx-auto p-8 text-center">
          <h1 className="text-4xl font-display uppercase mb-4">Product Not Found</h1>
          <p className="font-mono lowercase opacity-80">
            The product you're looking for doesn't exist.
          </p>
          <a href="#" className="text-accent font-bold mt-8 inline-block hover:underline">
            ← Back to Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedCocktails = product.relatedCocktailIds
    ? COCKTAILS.filter(c => product.relatedCocktailIds?.includes(c.id))
    : [];

  const recommendedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '#' },
          { label: 'All Products', href: '#all-products' },
          { label: product.name }
        ]}
      />

      {/* Product Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-4 border-black p-8 flex items-center justify-center min-h-[400px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 w-auto object-contain"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4 uppercase">
              {product.category}
            </span>
            <h1 className="text-6xl md:text-7xl font-display uppercase leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-mono opacity-80 mb-8">
              {product.tagline}
            </p>

            {/* Key Details */}
            <div className="border-l-4 border-accent pl-6 space-y-4 mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">
                  Proof
                </p>
                <p className="text-lg font-bold">{product.proof}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">
                  Distillation
                </p>
                <p className="text-lg font-bold">{product.distillationProcess}</p>
              </div>
            </div>

            {/* Call to Action */}
            <button className="bg-black text-white font-bold py-4 px-8 hover:bg-accent hover:text-black transition-colors border-2 border-black text-lg uppercase">
              Order Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b-4 border-black bg-white p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display uppercase mb-8">About This Spirit</h2>
          <p className="font-mono text-lg lowercase opacity-80 leading-relaxed mb-8 border-l-4 border-accent pl-8">
            {product.description}
          </p>
        </div>
      </motion.section>

      {/* Tasting Notes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display uppercase mb-12">Tasting Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-2xl font-display uppercase mb-4">Nose</h3>
              <p className="font-mono text-sm lowercase opacity-80">
                {product.tastingNotes.nose}
              </p>
            </div>
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-2xl font-display uppercase mb-4">Palate</h3>
              <p className="font-mono text-sm lowercase opacity-80">
                {product.tastingNotes.palate}
              </p>
            </div>
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-2xl font-display uppercase mb-4">Finish</h3>
              <p className="font-mono text-sm lowercase opacity-80">
                {product.tastingNotes.finish}
              </p>
            </div>
          </div>

          {/* Pairings */}
          <div className="mt-12 bg-white border-4 border-black p-8">
            <h3 className="text-2xl font-display uppercase mb-6">Perfect Pairings</h3>
            <div className="flex flex-wrap gap-4">
              {product.tastingNotes.pairings.map((pairing, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white font-mono text-sm px-6 py-3 uppercase tracking-widest"
                >
                  {pairing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Cocktails */}
      {relatedCocktails.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b-4 border-black bg-white p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display uppercase mb-12">Featured Cocktails</h2>
            <div className="space-y-12">
              {relatedCocktails.map((cocktail, idx) => (
                <motion.div
                  key={cocktail.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4 uppercase">
                          Signature Recipe
                        </span>
                        <h3 className="text-4xl font-display uppercase mb-4">{cocktail.name}</h3>
                        <p className="text-xl font-mono opacity-80 mb-6">
                          {cocktail.tagline}
                        </p>
                        <p className="font-mono text-sm lowercase opacity-80 leading-relaxed mb-8">
                          {cocktail.description}
                        </p>
                        <a
                          href={`#cocktails`}
                          className="inline-flex items-center gap-2 text-accent font-bold hover:underline uppercase text-sm tracking-widest"
                        >
                          View Recipe <ChevronRight size={16} />
                        </a>
                      </div>
                      <div className="bg-neutral-50 border-4 border-black p-8 flex items-center justify-center min-h-[300px]">
                        <img
                          src={cocktail.image}
                          alt={cocktail.name}
                          className="max-h-64 w-auto object-contain"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-neutral-50 border-4 border-black p-8 flex items-center justify-center min-h-[300px] order-2 lg:order-1">
                        <img
                          src={cocktail.image}
                          alt={cocktail.name}
                          className="max-h-64 w-auto object-contain"
                        />
                      </div>
                      <div className="order-1 lg:order-2">
                        <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4 uppercase">
                          Signature Recipe
                        </span>
                        <h3 className="text-4xl font-display uppercase mb-4">{cocktail.name}</h3>
                        <p className="text-xl font-mono opacity-80 mb-6">
                          {cocktail.tagline}
                        </p>
                        <p className="font-mono text-sm lowercase opacity-80 leading-relaxed mb-8">
                          {cocktail.description}
                        </p>
                        <a
                          href={`#cocktails`}
                          className="inline-flex items-center gap-2 text-accent font-bold hover:underline uppercase text-sm tracking-widest"
                        >
                          View Recipe <ChevronRight size={16} />
                        </a>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Recommendations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display uppercase mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedProducts.map((rec, idx) => (
              <motion.a
                key={rec.id}
                href={`#product/${rec.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border-4 border-black p-8 hover:bg-black hover:text-white transition-colors group"
              >
                <div className="bg-neutral-50 border-4 border-black p-6 mb-6 min-h-[200px] flex items-center justify-center group-hover:bg-white">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="max-h-32 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-display uppercase mb-2">{rec.name}</h3>
                <p className="font-mono text-xs uppercase opacity-60 tracking-widest">
                  {rec.category}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
