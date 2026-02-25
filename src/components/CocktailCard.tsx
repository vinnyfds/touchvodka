import { motion } from 'motion/react';
import { Cocktail } from '../data/cocktails';

interface CocktailCardProps {
  cocktail: Cocktail;
  isReversed?: boolean;
}

export default function CocktailCard({ cocktail, isReversed = false }: CocktailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 lg:grid-cols-2 border-4 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-shadow ${
        isReversed ? '' : ''
      }`}
    >
      {/* Image Section */}
      <motion.div
        className={`relative bg-neutral-50 p-8 md:p-12 flex items-center justify-center ${
          isReversed ? 'lg:order-2' : 'lg:order-1'
        } border-b-4 lg:border-b-0 ${isReversed ? 'lg:border-l-4' : 'lg:border-r-4'} border-black`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="w-full h-full max-w-xs object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`p-8 md:p-12 flex flex-col justify-between bg-white ${
          isReversed ? 'lg:order-1' : 'lg:order-2'
        }`}
        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="mb-8">
          <div
            className="inline-block px-3 py-1 text-sm font-bold text-white mb-3"
            style={{ backgroundColor: cocktail.color }}
          >
            {cocktail.baseSpirit.toUpperCase()}
          </div>
          <h2 className="text-5xl md:text-6xl font-display uppercase leading-tight mb-3">
            {cocktail.name}
          </h2>
          <p className="text-accent text-lg md:text-xl font-bold tracking-widest mb-6">
            [ {cocktail.tagline} ]
          </p>
          <p className="text-sm md:text-base font-mono lowercase opacity-80 leading-relaxed">
            {cocktail.description}
          </p>
        </div>

        {/* Recipe Details */}
        <div className="space-y-6">
          {/* Ingredients */}
          <div className="border-l-4" style={{ borderColor: cocktail.color }}>
            <h3 className="font-bold tracking-widest text-sm mb-3 pl-4">INGREDIENTS:</h3>
            <ul className="text-xs font-mono lowercase space-y-2 pl-4 opacity-80">
              {cocktail.ingredients.map((ingredient, idx) => (
                <li key={idx}>→ {ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Preparation */}
          <div>
            <h4 className="font-bold tracking-widest text-sm mb-2">PREPARATION:</h4>
            <p className="text-xs font-mono lowercase leading-relaxed opacity-80">
              {cocktail.preparation}
            </p>
          </div>

          {/* Garnish */}
          <div>
            <h4 className="font-bold tracking-widest text-sm mb-2">GARNISH:</h4>
            <p className="text-xs font-mono lowercase opacity-80">{cocktail.garnish}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
