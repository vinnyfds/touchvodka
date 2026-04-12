import React from 'react';
import { BlogPost } from '../../types/blog';
import { getAuthor, findRelatedPosts } from '../../utils/blog';
import { formatDistanceToNow } from 'date-fns';
import { AuthorBio } from './AuthorBio';
import { RelatedPosts } from './RelatedPosts';

interface BlogPostProps {
  post: BlogPost;
  content: React.ReactNode;
  allPosts: BlogPost[];
  onSelectPost: (slug: string) => void;
  onBack: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  post,
  content,
  allPosts,
  onSelectPost,
  onBack,
}) => {
  const author = getAuthor(post.author);
  const relatedPosts = findRelatedPosts(post, allPosts, 3);

  return (
    <article>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="font-mono text-xs uppercase text-accent hover:underline mb-4"
        >
          ← Back to blog
        </button>

        <div className="mb-4">
          <span className="inline-block bg-accent text-black px-3 py-1 font-display uppercase text-xs font-bold border-2 border-black mr-3">
            {post.category}
          </span>
          <span className="font-mono text-xs text-neutral-600 uppercase">
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="font-display text-5xl uppercase tracking-tighter mb-4 border-b-4 border-black pb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-neutral-600">
          <time>
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </time>
          <span>•</span>
          <span>By {author.name}</span>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="mb-8 border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-invert max-w-none mb-8 py-8 border-b-4 border-black">
        {content}
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mb-8 pb-8 border-b-4 border-black">
          <p className="font-display uppercase text-xs font-bold mb-3">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-black text-accent px-3 py-2 border-2 border-accent"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      <AuthorBio author={author} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} onSelectPost={onSelectPost} />
      )}
    </article>
  );
};
