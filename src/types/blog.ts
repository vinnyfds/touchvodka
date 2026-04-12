export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  image?: string;
  readingTime: number;
}

export interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  email?: string;
  social?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
