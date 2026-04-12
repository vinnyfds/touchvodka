import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '../types/blog';
import { calculateReadingTime } from './blog';

/**
 * Parse frontmatter and content from MDX file text
 */
export const parseMDXFile = async (content: string, slug: string): Promise<BlogPost> => {
  const { data, content: mdxContent } = matter(content);
  const metadata = data as BlogMetadata;

  return {
    slug,
    title: metadata.title,
    excerpt: metadata.excerpt,
    date: metadata.date,
    author: metadata.author || 'admin',
    category: metadata.category,
    tags: metadata.tags || [],
    image: metadata.image,
    content: mdxContent,
    readingTime: calculateReadingTime(mdxContent),
  };
};

/**
 * Dynamic blog post loader
 * This function will be used to load MDX files at runtime
 */
export const loadBlogPosts = async (): Promise<BlogPost[]> => {
  // Import all MDX files from the content/blog directory
  const blogModules = import.meta.glob<{ default: string }>('../content/blog/*.mdx', {
    query: '?raw',
    import: 'default',
  });

  const posts: BlogPost[] = [];

  for (const [filepath, importModule] of Object.entries(blogModules)) {
    try {
      const content = await importModule();
      // Extract slug from filepath (e.g., '../content/blog/my-post.mdx' -> 'my-post')
      const slug = filepath.replace(/.*\/([^\/]+)\.mdx$/, '$1');
      const post = await parseMDXFile(content, slug);
      posts.push(post);
    } catch (error) {
      console.error(`Error loading blog post from ${filepath}:`, error);
    }
  }

  return posts;
};

/**
 * Get a single blog post by slug
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const posts = await loadBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
};
