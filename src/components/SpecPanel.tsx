import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Product } from '../constants';

interface SpecPanelProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'specifications' | 'tasting';

export default function SpecPanel({ product, isOpen, onClose }: SpecPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('specifications');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-full sm:w-96 bg-white z-50 overflow-y-auto shadow-2xl border-r-4 border-black flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b-4 border-black flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-display">{product.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 transition-colors"
                aria-label="Close panel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b-4 border-black sticky top-20 bg-white z-10">
              <button
                onClick={() => setActiveTab('specifications')}
                className={`flex-1 py-4 px-6 font-display text-sm md:text-base transition-all border-r-2 border-black ${
                  activeTab === 'specifications'
                    ? 'bg-accent text-white'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-black'
                }`}
              >
                SPECIFICATIONS
              </button>
              <button
                onClick={() => setActiveTab('tasting')}
                className={`flex-1 py-4 px-6 font-display text-sm md:text-base transition-all ${
                  activeTab === 'tasting'
                    ? 'bg-accent text-white'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-black'
                }`}
              >
                TASTING NOTES
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'specifications' && (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="border-4 p-6 mb-6"
                      style={{ borderColor: product.color }}
                    >
                      <h3 className="text-lg font-display mb-4">SPECIFICATIONS:</h3>
                      <p className="text-sm leading-relaxed font-mono lowercase opacity-80">
                        {product.description}
                      </p>
                      <div 
                        className="mt-6 px-3 py-2 text-white font-bold text-sm inline-block"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.proof}
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 'tasting' && (
                  <motion.div
                    key="tasting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-display mb-3">NOSE:</h3>
                        <p className="text-sm leading-relaxed font-mono lowercase opacity-80">
                          {product.tastingNotes.nose}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-display mb-3">PALATE:</h3>
                        <p className="text-sm leading-relaxed font-mono lowercase opacity-80">
                          {product.tastingNotes.palate}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-display mb-3">FINISH:</h3>
                        <p className="text-sm leading-relaxed font-mono lowercase opacity-80">
                          {product.tastingNotes.finish}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-display mb-3">PAIRINGS:</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.tastingNotes.pairings.map((pairing, i) => (
                            <span
                              key={i}
                              className="bg-neutral-100 px-3 py-2 text-sm font-mono rounded border border-neutral-300 lowercase"
                            >
                              {pairing}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
