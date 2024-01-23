import { SITE_URL } from '$lib/siteConfig';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const pages = ['about', 'services', 'contact', 'wordpress-website-design', 'custom-wordpress-theme-development', 'plugin-development-and-integration', 'wordpress-maintenance-and-support', 'api-integration-with-wordpress', 'e-commerce-development-with-woocommerce', 'headless-wordpress-development', 'custom-gutenberg-block-development'];
  const body = sitemap(pages);

  return new Response(body, {
    headers: {
      'Cache-Control': `public, max-age=${86400}`, // 24 hours
      'Content-Type': 'application/xml',
    },
  });
}

const sitemap = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${SITE_URL}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    ${pages
      .map(
        (page, index) => `
    <url>
      <loc>${SITE_URL}/${page}</loc>
      <changefreq>daily</changefreq>
      <priority>${(1 - index / (pages.length - 1)).toFixed(2)}</priority>
    </url>
    `
      )
      .join('')}    
  </urlset>`;
