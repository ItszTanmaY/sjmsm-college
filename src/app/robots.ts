import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Hide internal endpoints
    },
    sitemap: 'https://sjmsmcollege.edu.in/sitemap.xml',
  };
}
