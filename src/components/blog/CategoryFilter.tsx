import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selected: string | undefined;
  onSelect: (category: string | undefined) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div className="mb-8">
      <div className="mb-3 font-display uppercase text-xs font-bold">// Filter by category</div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelect(undefined)}
          className={`px-4 py-2 font-display uppercase text-xs font-bold border-4 transition-all ${
            selected === undefined
              ? 'border-accent bg-accent text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'border-black bg-white hover:bg-neutral-50'
          }`}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 font-display uppercase text-xs font-bold border-4 transition-all ${
              selected === category
                ? 'border-accent bg-accent text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'border-black bg-white hover:bg-neutral-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
