# Quick SEO Reference - Touch Vodka

## Files Created

```
touchvodka/
├── public/
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # 25 URLs for search engines
├── src/
│   ├── utils/
│   │   └── seoHelpers.ts       # Dynamic SEO management
│   └── App.tsx                 # Updated with SEO integration
├── index.html                  # Enhanced with meta tags
├── SEO_SETUP.md                # Detailed setup guide
└── SEO_IMPLEMENTATION_SUMMARY.md # This implementation overview
```

## How It Works

### 1. On Page Load
```
User visits touchvodka.com
    ↓
index.html loads with base meta tags
    ↓
App.tsx detects route (home, cocktails, product/TO-001, etc.)
    ↓
updateMetaTags() runs with page-specific config
    ↓
Meta tags update dynamically in DOM
```

### 2. SEO Elements Updated per Route

**Home Page:**
- Title: "Touch Vodka | Premium Craft Vodka with Industrial Elegance"
- Desc: "Discover Touch Vodka – brutalist, high-contrast premium spirits..."
- Schema: Organization info + Breadcrumb

**Product Pages (e.g., TO-001):**
- Title: "Touch Artisan | Crafted with Tradition | Touch Vodka"
- Desc: "Our artisanal blend, carefully crafted using traditional distillation methods..."
- Schema: Product schema with ratings, image, brand

**Other Pages:**
- Auto-configured from pageMetaConfigs in seoHelpers.ts

### 3. Structured Data (JSON-LD)
- Automatically added for products
- Organization data on home page
- Breadcrumbs for navigation

## Testing SEO

### Validate Meta Tags
```bash
# Check in browser DevTools (F12)
# Elements tab → <head> section
# Look for: meta[name="description"], og:title, etc.
```

### Test Social Sharing
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: Share a link and preview

### Validate Sitemap
- https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Check Schema Markup
- https://schema.org/validator

### SEO Audit
- Use: Lighthouse (built into Chrome DevTools)
- Use: Screaming Frog (crawl site locally)
- Use: Ubersuggest or SEMrush (after launch)

## Common Tasks

### Adding a New Page
1. Add route to `App.tsx` PageType
2. Add config to `pageMetaConfigs`:
```typescript
'new-page': {
  title: 'Page Title | Touch Vodka',
  description: 'Page description...',
  keywords: 'keyword1, keyword2',
  ogImage: 'https://touchvodka.com/og-new.png',
},
```
3. Add URL to sitemap.xml with `<url>` entry
4. Create og-new.png image

### Updating Product Info
1. Edit `src/constants.ts` - Product data
2. Automatically updates:
   - Product page title/description
   - Product schema
   - Social sharing preview
3. Update product image in sitemap.xml

### Changing Meta Descriptions
- Edit `pageMetaConfigs` in `src/utils/seoHelpers.ts`
- Changes apply immediately on next page load
- No rebuild needed!

## Amplify Deployment Checklist

- [x] robots.txt in public/
- [x] sitemap.xml in public/
- [x] Meta tags in index.html
- [x] SEO utils created
- [ ] Verify files deploy to touchvodka.com root
- [ ] Check robots.txt accessible at touchvodka.com/robots.txt
- [ ] Check sitemap accessible at touchvodka.com/sitemap.xml

## Search Console Setup

### Google
1. Go: https://search.google.com/search-console
2. Add property: touchvodka.com
3. Verify ownership (add meta tag from verification above)
4. Submit sitemap: touchvodka.com/sitemap.xml

### Bing
1. Go: https://www.bing.com/webmasters
2. Add site: touchvodka.com
3. Verify ownership
4. Submit sitemap

## Monitoring

### Watch These Metrics
- **Impressions**: How often Touch Vodka appears in search results
- **CTR**: Click-through rate from search results
- **Position**: Average ranking for keywords
- **Crawl Errors**: Fix any errors reported
- **Mobile Usability**: Ensure mobile-friendly

### Tools to Use
- Google Search Console (free, essential)
- Google Analytics (free, track traffic)
- Ubersuggest or SEMrush (rank tracking)
- PageSpeed Insights (performance)

## Key Meta Tags Deployed

```html
<!-- Dynamic per page -->
<title>Page Title | Touch Vodka</title>
<meta name="description" content="Page description...">
<meta name="keywords" content="keywords...">

<!-- Open Graph (Facebook, LinkedIn, etc.) -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://touchvodka.com/og-*.png">
<meta property="og:url" content="https://touchvodka.com/...">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:image" content="...">

<!-- Structured Data -->
<script type="application/ld+json">
  {Organization / Product / BreadcrumbList schema}
</script>
```

## Performance Impact

- **robots.txt**: 372 bytes - negligible
- **sitemap.xml**: 4.7 KB - served only to crawlers
- **seoHelpers.ts**: Compiled into bundle (~2 KB minified)
- **Meta tags**: Already in HTML, no performance cost
- **JSON-LD**: Minimal impact, ~1-2 KB

**Total SEO overhead: <10 KB** ✅

---

**Ready to deploy!** 🚀
