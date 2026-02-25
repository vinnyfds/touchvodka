# SEO Configuration for Touch Vodka

This document outlines the SEO setup implemented for touchvodka.com, including sitemaps, robots configuration, meta tags, and structured data.

## Files Created

### 1. `public/robots.txt`
- Controls search engine crawler access
- Allows all crawlers to index the site
- References the sitemap location at `/sitemap.xml`
- Includes crawl-delay for responsible crawling

**Key Rules:**
- Allows Google and Bing crawlers full access
- Prevents crawling of admin routes, JSON files, and source code
- Specifies sitemap URL for search engines

### 2. `public/sitemap.xml`
- XML sitemap for all indexable pages
- Includes 25 URLs covering all main pages and product detail pages
- Each URL includes:
  - Location (loc)
  - Last modification date (lastmod)
  - Change frequency (changefreq)
  - Priority for crawling (priority: 0.5 - 1.0)
  - Product images with image sitemap data

**Page Priorities:**
- Home page: 1.0 (highest)
- Product pages: 0.8-0.9
- Collection pages: 0.7-0.8
- Content pages: 0.6-0.8
- Legal pages: 0.5 (lowest)

### 3. `src/utils/seoHelpers.ts`
TypeScript utilities for dynamic SEO management:

- **updateMetaTags()** - Updates all meta tags (description, OG, Twitter)
- **setProductSchema()** - Sets JSON-LD schema for products
- **setOrganizationSchema()** - Sets JSON-LD schema for the organization
- **pageMetaConfigs** - Pre-configured meta tags for all pages
- **getProductMetaConfig()** - Generates dynamic product meta tags

### 4. `index.html` (Updated)
Enhanced with comprehensive meta tags:

#### Primary Meta Tags
- Title, description, keywords
- Author, language, robots meta
- Canonical URL

#### Open Graph Tags
- OG:type, OG:url, OG:title, OG:description
- OG:image with dimensions (1200x630)
- Site name and locale

#### Twitter Card Tags
- Card type: summary_large_image
- Twitter handle: @touchvodka
- Custom image and description

#### Apple / Mobile Tags
- Apple web app support
- Status bar styling
- App title for mobile

#### JSON-LD Structured Data
- Organization schema with contact info
- Breadcrumb navigation schema

## Integration with App.tsx

The SEO utilities are integrated into `src/App.tsx`:

1. **Import SEO helpers** at the top of the file
2. **Route detection** in the useEffect hook:
   - Product routes trigger `setProductSchema()`
   - Page routes trigger `updateMetaTags()` with page-specific config
   - Home page triggers `setOrganizationSchema()`
3. **Dynamic updates** when routes change (hash navigation)

## Usage Examples

### Updating meta tags for a page:
```typescript
import { updateMetaTags, pageMetaConfigs } from './utils/seoHelpers';

updateMetaTags(pageMetaConfigs.cocktails);
```

### Updating for a product:
```typescript
import { updateMetaTags, getProductMetaConfig, setProductSchema } from './utils/seoHelpers';

const product = PRODUCTS.find(p => p.id === 'TO-001');
updateMetaTags(getProductMetaConfig('TO-001', product));
setProductSchema(product);
```

## Configuration for Production

### 1. Update Domain References
The sitemaps and meta tags currently use `touchvodka.com`. For production:
- The domain is already configured ✓
- Verify OpenGraph image URLs are accessible
- Update social media handles if needed

### 2. Add Google & Bing Verification
Add verification codes to `index.html`:

```html
<!-- Google -->
<meta name="google-site-verification" content="YOUR_CODE" />

<!-- Bing -->
<meta name="msvalidate.01" content="YOUR_CODE" />
```

### 3. Submit Sitemaps to Search Engines

**Google Search Console:**
- Go to https://search.google.com/search-console
- Add property for touchvodka.com
- Submit sitemap at https://touchvodka.com/sitemap.xml

**Bing Webmaster Tools:**
- Go to https://www.bing.com/webmasters
- Add domain
- Submit sitemap

### 4. Update OpenGraph Images
Ensure these image files exist in `/public`:
- og-home.png (1200x630px)
- og-cocktails.png
- og-story.png
- og-collection.png
- og-distillery.png
- og-findus.png
- og-products.png
- og-bestsellers.png
- og-giftsets.png
- og-limited.png
- og-about.png
- og-sustainability.png
- og-careers.png

### 5. Add Favicon Files
Add these to `/public`:
- favicon.ico
- favicon-32x32.png
- favicon-16x16.png
- apple-touch-icon.png

## SEO Checklist

- [x] robots.txt configured
- [x] sitemap.xml with all pages
- [x] Meta descriptions on all pages
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] Canonical URLs
- [x] Mobile viewport settings
- [x] Dynamic page titles
- [ ] Google Search Console verification
- [ ] Bing Webmaster verification
- [ ] OpenGraph images uploaded
- [ ] Favicon files added
- [ ] Monitor search rankings
- [ ] Track organic traffic in Google Analytics

## Maintenance

### Regular Updates
- Update `sitemap.xml` `lastmod` dates when content changes
- Review and update meta descriptions quarterly
- Monitor search console for crawl errors
- Update OpenGraph images when products change

### Adding New Pages
1. Add new page to `App.tsx` PageType
2. Add meta config to `pageMetaConfigs` in seoHelpers.ts
3. Add URL to sitemap.xml with appropriate priority
4. Create OpenGraph image file

### Updating Product Information
The SEO automatically pulls from PRODUCTS in constants.ts:
- Change product data in constants.ts
- Meta tags update automatically on next visit
- Add new products and sitemap includes them

## Performance Tips

1. **Image Optimization:**
   - Compress OpenGraph images (aim for ~200KB)
   - Use next-gen formats (WebP) if possible

2. **Schema Markup:**
   - Validate JSON-LD at https://schema.org/validator
   - Add more schema types as needed (LocalBusiness, etc.)

3. **Monitoring:**
   - Set up Google Analytics goals
   - Monitor Core Web Vitals
   - Track ranking for key terms

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [XML Sitemap Protocol](https://www.sitemaps.org/)
- [Open Graph Protocol](https://ogp.me/)
- [JSON-LD for SEO](https://schema.org/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
