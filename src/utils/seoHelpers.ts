/**
 * SEO and Meta Tag Management Utilities
 * Dynamically updates meta tags for different pages and products
 */

export interface MetaTagConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: string;
}

/**
 * Update document meta tags
 */
export const updateMetaTags = (config: MetaTagConfig) => {
  // Update title
  document.title = config.title;

  // Update or create meta description
  updateMetaTag('name', 'description', config.description, 'description');

  // Update keywords if provided
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords, 'keywords');
  }

  // Open Graph tags
  updateMetaTag('property', 'og:title', config.title, 'og:title');
  updateMetaTag('property', 'og:description', config.description, 'og:description');
  updateMetaTag('property', 'og:type', config.ogType || 'website', 'og:type');
  updateMetaTag('property', 'og:url', window.location.href, 'og:url');

  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage, 'og:image');
    updateMetaTag('property', 'og:image:width', '1200', 'og:image:width');
    updateMetaTag('property', 'og:image:height', '630', 'og:image:height');
  }

  // Twitter Card tags
  updateMetaTag('name', 'twitter:card', config.twitterCard || 'summary_large_image', 'twitter:card');
  updateMetaTag('name', 'twitter:title', config.title, 'twitter:title');
  updateMetaTag('name', 'twitter:description', config.description, 'twitter:description');

  if (config.ogImage) {
    updateMetaTag('name', 'twitter:image', config.ogImage, 'twitter:image');
  }

  // Canonical URL
  const canonicalUrl = config.canonical || window.location.href;
  updateCanonicalLink(canonicalUrl);
};

/**
 * Update or create a meta tag
 */
const updateMetaTag = (
  attribute: 'name' | 'property',
  attributeValue: string,
  content: string,
  selector?: string
) => {
  const selector_str = selector || attributeValue;
  let element = document.querySelector(`meta[${attribute}="${selector_str}"]`) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

/**
 * Update canonical link
 */
const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
};

/**
 * Set structured data (JSON-LD) for products
 */
export const setProductSchema = (product: {
  id: string;
  name: string;
  description: string;
  image: string;
  proof: string;
  category: string;
}) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://touchvodka.com${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'Touch Vodka',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
    },
  };

  setJsonLd(schema);
};

/**
 * Set organization schema
 */
export const setOrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Touch Vodka',
    url: 'https://touchvodka.com',
    logo: 'https://touchvodka.com/logo.png',
    description: 'Premium craft vodka with brutalist design and industrial elegance',
    sameAs: [
      'https://www.instagram.com/touchvodka',
      'https://www.facebook.com/touchvodka',
      'https://twitter.com/touchvodka',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Sales',
    },
  };

  setJsonLd(schema);
};

/**
 * Set JSON-LD structured data
 */
const setJsonLd = (schema: object) => {
  let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

/**
 * Page-specific meta tag configurations
 */
export const pageMetaConfigs: Record<string, MetaTagConfig> = {
  home: {
    title: 'Touch Vodka | Premium Craft Vodka with Industrial Elegance',
    description:
      'Discover Touch Vodka – brutalist, high-contrast premium spirits crafted with precision. Explore our collection of artisan-distilled vodkas.',
    keywords: 'premium vodka, craft spirits, artisan vodka, luxury alcohol, high-proof vodka',
    ogImage: 'https://touchvodka.com/og-home.png',
    ogType: 'website',
  },
  cocktails: {
    title: 'Touch Vodka Cocktails | Signature Recipes',
    description:
      'Explore signature cocktail recipes featuring Touch Vodka. Professional-grade recipes for unforgettable drinking experiences.',
    keywords: 'vodka cocktails, cocktail recipes, signature drinks, premium mixology',
    ogImage: 'https://touchvodka.com/og-cocktails.png',
  },
  'our-story': {
    title: 'Our Story | Touch Vodka',
    description:
      'Learn about Touch Vodka\'s journey from vision to reality. Discover our commitment to quality, innovation, and industrial design excellence.',
    keywords: 'craft vodka story, premium spirits, artisan distillery, vodka heritage',
    ogImage: 'https://touchvodka.com/og-story.png',
  },
  collection: {
    title: 'The Touch Collection | Premium Vodka Products',
    description:
      'Browse the complete Touch Vodka collection: artisan blends, citrus infusions, and premium distilled spirits. Find your perfect pour.',
    keywords: 'vodka collection, premium spirits, flavored vodka, craft distillery',
    ogImage: 'https://touchvodka.com/og-collection.png',
  },
  distillery: {
    title: 'The Art of Distillation | Touch Vodka Process',
    description:
      'Discover our 10x distillation process, charcoal filtration, and commitment to perfecting premium vodka. True craftsmanship in every bottle.',
    keywords: 'vodka distillation, spirit production, premium quality, craftsmanship',
    ogImage: 'https://touchvodka.com/og-distillery.png',
  },
  'find-us': {
    title: 'Find Us | Touch Vodka Locations & Distribution',
    description: 'Locate Touch Vodka at premium retailers near you. Find distribution points and purchase our collection of craft spirits.',
    keywords: 'where to buy vodka, store locator, Touch Vodka distribution, buy premium spirits',
    ogImage: 'https://touchvodka.com/og-findus.png',
  },
  'all-products': {
    title: 'All Products | Touch Vodka',
    description: 'Browse all Touch Vodka products. From premium artisan blends to unique citrus infusions, find your favorite craft spirit.',
    keywords: 'vodka products, premium spirits, craft vodka, flavored vodka',
    ogImage: 'https://touchvodka.com/og-products.png',
  },
  'best-sellers': {
    title: 'Best Sellers | Most Popular Touch Vodka Products',
    description: 'Discover our best-selling premium vodkas. Customer favorites crafted with precision and passion.',
    keywords: 'best vodka, popular spirits, top-rated vodka, customer favorites',
    ogImage: 'https://touchvodka.com/og-bestsellers.png',
  },
  'gift-sets': {
    title: 'Gift Sets | Premium Vodka Gift Ideas',
    description: 'Perfect gift sets for vodka lovers. Curated collections of Touch Vodka for any occasion.',
    keywords: 'vodka gifts, gift sets, premium spirits gift, luxury alcohol gift',
    ogImage: 'https://touchvodka.com/og-giftsets.png',
  },
  'limited-editions': {
    title: 'Limited Editions | Exclusive Touch Vodka Releases',
    description:
      'Explore limited edition Touch Vodka releases. Exclusive, small-batch spirits for discerning collectors.',
    keywords: 'limited edition vodka, exclusive spirits, small batch, collector items',
    ogImage: 'https://touchvodka.com/og-limited.png',
  },
  'about-us': {
    title: 'About Us | Touch Vodka',
    description: 'Meet the team behind Touch Vodka. Discover our mission, values, and dedication to craft excellence.',
    keywords: 'about vodka brand, craft distillery team, brand mission, spirit makers',
    ogImage: 'https://touchvodka.com/og-about.png',
  },
  sustainability: {
    title: 'Sustainability | Touch Vodka Environmental Commitment',
    description:
      'Learn about Touch Vodka\'s commitment to sustainability, eco-friendly practices, and responsible spirits production.',
    keywords: 'sustainable vodka, eco-friendly spirits, environmental responsibility, green distillery',
    ogImage: 'https://touchvodka.com/og-sustainability.png',
  },
  careers: {
    title: 'Careers | Join Touch Vodka',
    description: 'Join our team at Touch Vodka. Explore career opportunities in craft spirits and design excellence.',
    keywords: 'vodka jobs, distillery careers, craft spirits employment, team opportunities',
    ogImage: 'https://touchvodka.com/og-careers.png',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Touch Vodka',
    description: 'Touch Vodka Privacy Policy. Learn how we protect your data and privacy.',
    keywords: 'privacy policy, data protection, privacy',
    ogType: 'website',
  },
  'terms-of-service': {
    title: 'Terms of Service | Touch Vodka',
    description: 'Touch Vodka Terms of Service. Read our legal terms and conditions.',
    keywords: 'terms of service, legal terms, conditions',
    ogType: 'website',
  },
  'cookie-policy': {
    title: 'Cookie Policy | Touch Vodka',
    description: 'Touch Vodka Cookie Policy. Learn how we use cookies and tracking technologies.',
    keywords: 'cookie policy, privacy, tracking',
    ogType: 'website',
  },
};

/**
 * Product-specific meta configurations
 */
export const getProductMetaConfig = (productId: string, product: any): MetaTagConfig => {
  return {
    title: `${product.name} | ${product.tagline} | Touch Vodka`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, craft vodka, premium spirit, ${product.proof}`,
    ogImage: `https://touchvodka.com${product.image}`,
    ogType: 'product',
    canonical: `https://touchvodka.com/#product/${productId}`,
  };
};
