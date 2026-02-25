/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  Droplets, 
  Waves, 
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS, Product } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import BeaconIcon from './components/BeaconIcon';
import SpecPanel from './components/SpecPanel';

// Page imports
import Cocktails from './pages/Cocktails';
import OurStory from './pages/OurStory';
import Collection from './pages/Collection';
import Distillery from './pages/Distillery';
import FindUs from './pages/FindUs';
import AllProducts from './pages/AllProducts';
import BestSellers from './pages/BestSellers';
import GiftSets from './pages/GiftSets';
import LimitedEditions from './pages/LimitedEditions';
import AboutUs from './pages/AboutUs';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ProductDetail from './pages/ProductDetail';

type PageType = 'home' | 'cocktails' | 'our-story' | 'collection' | 'distillery' | 'find-us' | 
  'all-products' | 'best-sellers' | 'gift-sets' | 'limited-editions' | 
  'about-us' | 'sustainability' | 'careers' | 
  'privacy-policy' | 'terms-of-service' | 'cookie-policy';

export default function App() {
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isSpecPanelOpen, setIsSpecPanelOpen] = useState(false);
  const [productDetailId, setProductDetailId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      
      // Check if hash is a product detail route
      if (hash.startsWith('product/')) {
        const productId = hash.split('/')[1];
        setProductDetailId(productId);
        window.scrollTo(0, 0);
        return;
      }
      
      setProductDetailId(null);
      setCurrentPage(hash as PageType);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Route to appropriate page component
  if (productDetailId) return <ProductDetail productId={productDetailId} />;
  if (currentPage === 'cocktails') return <Cocktails />;
  if (currentPage === 'our-story') return <OurStory />;
  if (currentPage === 'collection') return <Collection />;
  if (currentPage === 'distillery') return <Distillery />;
  if (currentPage === 'find-us') return <FindUs />;
  if (currentPage === 'all-products') return <AllProducts />;
  if (currentPage === 'best-sellers') return <BestSellers />;
  if (currentPage === 'gift-sets') return <GiftSets />;
  if (currentPage === 'limited-editions') return <LimitedEditions />;
  if (currentPage === 'about-us') return <AboutUs />;
  if (currentPage === 'sustainability') return <Sustainability />;
  if (currentPage === 'careers') return <Careers />;
  if (currentPage === 'privacy-policy') return <PrivacyPolicy />;
  if (currentPage === 'terms-of-service') return <TermsOfService />;
  if (currentPage === 'cookie-policy') return <CookiePolicy />;

  // Home page
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home' }]} />

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-6rem)] border-b-4 border-black overflow-hidden">
        {/* Left: Headline & Buttons */}
        <div className="w-full lg:w-[45%] p-8 md:p-12 flex flex-col justify-end border-r-4 border-black relative bg-neutral-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="mb-6">
                <span className="bg-accent text-white px-3 py-1 text-sm font-bold inline-block mb-2">
                  ID: {activeProduct.id}
                </span>
                <br />
                <span className="text-accent text-lg md:text-xl font-bold tracking-widest">
                  [ {activeProduct.category} ]
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl break-words uppercase leading-[0.9] mb-12 max-w-full">
                {activeProduct.tagline.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>

              <div className="flex flex-col gap-3">
                <a 
                  href="#collection"
                  className="w-full py-5 bg-accent text-white font-display text-3xl md:text-4xl hover:bg-black transition-all active:translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none text-center block"
                >
                  DISCOVER_COLLECTION
                </a>
                <a href="#our-story" className="w-full py-5 bg-white text-black font-display text-3xl md:text-4xl border-4 border-black hover:bg-black hover:text-white transition-colors text-center block">
                  OUR_STORY
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Background Text Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
            {activeProduct.name}
          </div>
        </div>

        {/* Right: Product Carousel (Stretched) */}
        <div className="w-full lg:w-[55%] relative bg-transparent group overflow-hidden flex flex-col">
          {/* Product Image Carousel - Stretched */}
          <div className="flex-grow relative overflow-hidden bg-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(100%)' }}
                animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                   alt={activeProduct.name} 
                   className="h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)]" 
                   src={activeProduct.image} 
                 />
              </motion.div>
            </AnimatePresence>

            {/* Beacon Icon */}
            <BeaconIcon onClick={() => setIsSpecPanelOpen(true)} product={activeProduct} />

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  className={`w-3 h-3 border-2 border-black transition-all ${
                    activeProduct.id === p.id ? 'bg-accent border-accent scale-125' : 'bg-transparent hover:bg-black/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Spec Panel */}
        <SpecPanel 
          product={activeProduct}
          isOpen={isSpecPanelOpen}
          onClose={() => setIsSpecPanelOpen(false)}
        />
      </section>

      {/* Collection Section */}
      <section id="collection" className="border-b-4 border-black">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 bg-neutral-50 border-b-4 border-black gap-6">
          <div>
            <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-2">// 01_CATALOGUE</span>
            <h2 className="text-5xl md:text-7xl">THE TOUCH COLLECTION</h2>
          </div>
          <a href="#collection" className="border-4 border-black px-8 py-4 font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-3 group">
            VIEW_ALL_PROD <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="border-r-2 border-b-2 border-black last:border-r-0 p-6 flex flex-col group hover:bg-neutral-50 transition-colors"
            >
              <div className="relative aspect-[3/4] mb-6 border border-neutral-200 overflow-hidden bg-neutral-100">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100" 
                  src={product.image} 
                />
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] p-1.5 font-bold">
                  {product.proof}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
              <p className="text-[10px] text-neutral-500 mb-6 lowercase font-mono tracking-wider">
                {product.category}
              </p>
              <button 
                onClick={() => {
                  window.location.hash = `#product/${activeProduct.id}`;
                }}
                className="mt-auto border-2 border-black p-3 font-display text-xl hover:bg-accent hover:text-white transition-all cursor-pointer"
              >
                EXPLORE_LINK
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="distillery" className="grid grid-cols-1 lg:grid-cols-4 border-b-4 border-black">
        <div className="lg:col-span-2 p-8 md:p-16 border-r-4 border-black flex flex-col justify-center bg-neutral-50">
          <span className="text-accent mb-6 block font-bold tracking-[0.3em]">// PROCESS_REPORT_04</span>
          <h2 className="text-7xl md:text-9xl mb-10">THE ART OF DISTILLATION</h2>
          <p className="text-lg md:text-xl lowercase font-mono border-l-8 border-accent pl-8 leading-relaxed opacity-80">
            Crafted with passion and precision, our proprietary process ensures the smoothest finish in every bottle. We don't just make spirits; we engineer experiences.
          </p>
          <a href="#distillery" className="mt-12 w-fit px-12 py-5 bg-black text-white font-display text-3xl hover:bg-accent transition-all hover:-translate-y-1 active:translate-y-0">
            LEARN_MORE
          </a>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="p-10 border-b-2 border-r-2 border-black bg-white group hover:bg-accent hover:text-white transition-colors">
            <Sprout className="w-12 h-12 mb-8 text-accent group-hover:text-white" />
            <h3 className="text-4xl mb-4">PREMIUM GRAINS</h3>
            <p className="text-sm font-mono lowercase opacity-70 group-hover:opacity-100">
              Sourced from the finest local fields, our winter wheat provides a silky texture and a naturally sweet finish.
            </p>
          </div>
          <div className="p-10 border-b-2 border-black bg-neutral-50 group hover:bg-accent hover:text-white transition-colors">
            <Droplets className="w-12 h-12 mb-8 text-accent group-hover:text-white" />
            <h3 className="text-4xl mb-4">TRIPLE DISTILLED</h3>
            <p className="text-sm font-mono lowercase opacity-70 group-hover:opacity-100">
              Refined exactly three times for exceptional clarity and smoothness, removing impurities while keeping character.
            </p>
          </div>
          <div className="p-10 border-r-2 border-black sm:col-span-2 bg-neutral-100 group hover:bg-accent hover:text-white transition-colors">
            <Waves className="w-12 h-12 mb-8 text-accent group-hover:text-white" />
            <h3 className="text-4xl mb-4">PURE SPRING WATER</h3>
            <p className="text-sm font-mono lowercase opacity-70 max-w-md group-hover:opacity-100">
              Blended with pristine, mineral-rich water from natural protected springs for a crisp, clean taste that defines our signature profile.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
