import { BlogPost, Author } from '../types/blog';

export const DEFAULT_AUTHORS: Record<string, Author> = {
  'admin': {
    id: 'admin',
    name: 'Touch Vodka Team',
    bio: 'The creative team behind Touch Vodka, crafting stories about spirits and mixology.',
    avatar: undefined,
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
};

export interface FilterOptions {
  category?: string;
  tags?: string[];
  search?: string;
}

/**
 * Calculate approximate reading time in minutes
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Filter posts based on category, tags, and search term
 */
export const filterPosts = (posts: BlogPost[], options: FilterOptions): BlogPost[] => {
  return posts.filter((post) => {
    // Category filter
    if (options.category && post.category !== options.category) {
      return false;
    }

    // Tags filter
    if (options.tags && options.tags.length > 0) {
      const hasMatchingTag = options.tags.some((tag) => post.tags.includes(tag));
      if (!hasMatchingTag) return false;
    }

    // Search filter
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      const searchableText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Sort posts by date (newest first)
 */
export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

/**
 * Get unique tags from all posts
 */
export const getAllTags = (posts: BlogPost[]): string[] => {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

/**
 * Get unique categories from all posts
 */
export const getAllCategories = (posts: BlogPost[]): string[] => {
  const categories = new Set<string>();
  posts.forEach((post) => categories.add(post.category));
  return Array.from(categories).sort();
};

/**
 * Find related posts (same category or shared tags)
 */
export const findRelatedPosts = (post: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] => {
  const related = allPosts.filter((p) => {
    if (p.slug === post.slug) return false;

    // Same category
    if (p.category === post.category) return true;

    // Shared tags
    const sharedTags = p.tags.filter((tag) => post.tags.includes(tag));
    return sharedTags.length > 0;
  });

  return related.slice(0, limit);
};

/**
 * Highlight search terms in text
 */
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

/**
 * Get author by ID
 */
export const getAuthor = (authorId: string): Author => {
  return DEFAULT_AUTHORS[authorId] || DEFAULT_AUTHORS['admin'];
};
