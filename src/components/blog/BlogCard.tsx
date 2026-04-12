import React from 'react';
import { BlogPost } from '../../types/blog';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(post.slug)}
      className="group cursor-pointer border-4 border-black bg-white hover:bg-neutral-50 transition-all p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      {post.image && (
        <div className="mb-4 border-4 border-black overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}

      <div className="mb-3 flex items-center gap-2 flex-wrap">
        <span className="inline-block bg-accent text-black px-3 py-1 font-display uppercase text-xs font-bold border-2 border-black">
          {post.category}
        </span>
        <span className="font-mono text-xs text-neutral-600 uppercase">
          {post.readingTime} min read
        </span>
      </div>

      <h3 className="font-display text-xl uppercase tracking-tighter mb-2 line-clamp-2 group-hover:text-accent transition-colors">
        {post.title}
      </h3>

      <p className="font-mono text-sm opacity-80 mb-4 line-clamp-3">{post.excerpt}</p>

      <div className="flex items-center justify-between pt-4 border-t-4 border-black">
        <time className="font-mono text-xs text-neutral-600 uppercase">
          {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
        </time>
        <span className="font-display text-xs uppercase text-accent font-bold">
          Read →
        </span>
      </div>

      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="font-mono text-xs bg-neutral-100 px-2 py-1 border border-neutral-400">
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="font-mono text-xs text-neutral-600">+{post.tags.length - 2}</span>
          )}
        </div>
      )}
    </article>
  );
};
