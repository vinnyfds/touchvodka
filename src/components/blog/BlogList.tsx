import React, { useState, useMemo } from 'react';
import { BlogPost } from '../../types/blog';
import { filterPosts, getAllCategories, sortPostsByDate } from '../../utils/blog';
import { BlogCard } from './BlogCard';
import { BlogSearch } from './BlogSearch';
import { CategoryFilter } from './CategoryFilter';

interface BlogListProps {
  posts: BlogPost[];
  onSelectPost: (slug: string) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ posts, onSelectPost }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const categories = useMemo(() => getAllCategories(posts), [posts]);

  const filteredPosts = useMemo(() => {
    const sorted = sortPostsByDate(posts);
    return filterPosts(sorted, {
      search: searchTerm,
      category: selectedCategory,
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <div>
      <div className="mb-8 border-b-4 border-black pb-6">
        <div className="font-display uppercase text-xs font-bold text-accent mb-2">// 03_Blog</div>
        <h1 className="font-display text-5xl uppercase tracking-tighter mb-2">Read Our Stories</h1>
        <p className="font-mono text-sm opacity-80">
          Explore our collection of stories about craft, mixology, and the art of spirits.
        </p>
      </div>

      <BlogSearch onSearch={setSearchTerm} />
      <CategoryFilter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="mb-4 font-mono text-sm text-neutral-600">
        Showing {filteredPosts.length} of {posts.length} posts
      </div>

      {filteredPosts.length === 0 ? (
        <div className="border-4 border-black bg-neutral-50 p-8 text-center">
          <p className="font-display text-xl uppercase mb-2">No posts found</p>
          <p className="font-mono text-sm opacity-80">
            Try adjusting your search or category filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} onSelect={onSelectPost} />
          ))}
        </div>
      )}
    </div>
  );
};
