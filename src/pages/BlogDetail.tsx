import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { loadBlogPosts, getBlogPostBySlug } from '../utils/blogLoader';
import { BlogPost as BlogPostComponent } from '../components/blog/BlogPost';
import MDXComponents from '../components/blog/MDXComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

interface BlogDetailProps {
  slug: string;
  onBack: () => void;
}

export default function BlogDetail({ slug, onBack }: BlogDetailProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const [loadedPost, posts] = await Promise.all([
          getBlogPostBySlug(slug),
          loadBlogPosts(),
        ]);

        if (loadedPost) {
          setPost(loadedPost);
          // Create JSX from MDX content
          // For now, we'll render the raw content with basic formatting
          const contentJSX = (
            <div className="prose prose-invert max-w-none">
              {loadedPost.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0]?.length || 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  const headingClass = {
                    1: 'text-4xl md:text-5xl font-display uppercase tracking-tighter mb-6 border-b-4 border-accent pb-4 mt-8',
                    2: 'text-3xl md:text-4xl font-display uppercase tracking-tighter mb-4 mt-6 border-l-4 border-accent pl-4',
                    3: 'text-2xl font-display uppercase tracking-tight mb-3 mt-4',
                  };
                  return (
                    <div key={i} className={headingClass[level as keyof typeof headingClass] || ''}>
                      {text}
                    </div>
                  );
                }
                return (
                  <p key={i} className="font-mono text-sm opacity-80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          );
          setContent(contentJSX);
        }
        setAllPosts(posts);
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <p className="font-mono text-sm opacity-80">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Header />
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="border-4 border-black bg-neutral-50 p-8 text-center">
            <p className="font-display text-2xl uppercase mb-4">Post not found</p>
            <button
              onClick={onBack}
              className="px-4 py-2 border-4 border-black font-display uppercase text-sm hover:bg-accent hover:text-white transition-all"
            >
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '#' },
          { label: 'Blog', href: '#blog' },
          { label: post.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-8 py-12 md:py-20">
        <BlogPostComponent
          post={post}
          content={content}
          allPosts={allPosts}
          onSelectPost={() => {}}
          onBack={onBack}
        />
      </div>

      <Footer />
    </div>
  );
}
