import { motion } from 'motion/react';
import { Product } from '../constants';

interface BeaconIconProps {
  onClick: () => void;
  product: Product;
}

export default function BeaconIcon({ onClick, product }: BeaconIconProps) {
  const position = product.beaconPosition || { top: '50%', left: '50%' };
  const beaconColor = product.color;

  return (
    <button
      onClick={onClick}
      className="absolute z-30 transition-transform hover:scale-110 focus:outline-none"
      style={{ top: position.top, left: position.left, transform: 'translate(-50%, -50%)' }}
      aria-label="View specifications"
    >
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ width: '48px', height: '48px', borderColor: beaconColor }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        animate={{ scale: [1, 1.3], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        style={{ width: '48px', height: '48px', borderColor: beaconColor }}
      />

      {/* Inner solid beacon */}
      <div className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer" style={{ backgroundColor: beaconColor }}>
        <motion.div
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ color: beaconColor }}
          >
            <path d="M10.5 1.5H9.5V0h1v1.5zm0 17H9.5v1.5h1V18.5zM18.5 9.5v1h1.5v-1H18.5zM0 10.5v-1H1.5v1H0zm12.728-6.728l.707-.707L14.864 2.45l-.707.707-1.429-1.429zm-5.456 5.456l.707-.707L9.408 6.994l-.707.707-1.429-1.429zm5.456 5.456l.707-.707L14.864 12.45l-.707.707-1.429-1.429zM2.45 14.864l.707.707 1.429-1.429-.707-.707-1.429 1.429zm11.314-11.314l.707.707 1.429-1.429-.707-.707-1.429 1.429zM2.45 2.45l.707.707 1.429-1.429L3.879.021 2.45 2.45z" />
          </svg>
        </motion.div>
      </div>
    </button>
  );
}
