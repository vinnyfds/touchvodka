import { motion } from 'motion/react';

interface TouchVodkaLogoProps {
  className?: string;
  [key: string]: any;
}

export default function TouchVodkaLogo({ className = '', ...props }: TouchVodkaLogoProps) {
  const letters = [
    { char: 'T', file: 'T' },
    { char: 'o', file: 'o' },
    { char: 'U', file: 'U' },
    { char: 'C', file: 'C' },
    { char: 'H', file: 'H' },
    { char: ' ', file: null },
    { char: 'V', file: 'V' },
    { char: 'o', file: 'o' },
    { char: 'D', file: 'D' },
    { char: 'K', file: 'K' },
    { char: 'A', file: 'A' },
  ];

  return (
    <div className={`flex items-center gap-0 ${className}`} {...props}>
      {letters.map((letter, index) => (
        letter.file ? (
          <motion.img
            key={`${letter.file}-${index}`}
            src={`/logo/${letter.file}.svg`}
            alt={letter.char}
            initial={{ opacity: 0, scale: 0.8, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
              ease: 'easeOut',
            }}
            className="h-full w-auto"
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <div key={`space-${index}`} className="w-1" />
        )
      ))}
    </div>
  );
}
