import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { loadBlogPosts } from '../utils/blogLoader';
import { BlogList } from '../components/blog/BlogList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
}

export default function BlogPage({ onSelectPost }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts = await loadBlogPosts();
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Blog' }]} />

      <div className="max-w-6xl mx-auto px-8 py-12 md:py-20">
        {loading ? (
          <div className="text-center py-12">
            <p className="font-mono text-sm opacity-80">Loading posts...</p>
          </div>
        ) : (
          <BlogList posts={posts} onSelectPost={onSelectPost} />
        )}
      </div>

      <Footer />
    </div>
  );
}
