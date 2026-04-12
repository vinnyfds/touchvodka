import React from 'react';
import { BlogPost } from '../../types/blog';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  onSelectPost: (slug: string) => void;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, onSelectPost }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="my-12">
      <div className="mb-6 border-b-4 border-black pb-4">
        <div className="font-display uppercase text-xs font-bold text-accent mb-2">// Related Reading</div>
        <h2 className="font-display text-2xl uppercase tracking-tighter">More from this category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} onSelect={onSelectPost} />
        ))}
      </div>
    </section>
  );
};
