import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({
  onSearch,
  placeholder = 'Search posts...',
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="mb-8">
      <div className="relative border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 font-mono text-sm uppercase placeholder-neutral-400 outline-none bg-transparent"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
