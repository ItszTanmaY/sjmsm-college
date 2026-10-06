import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sjmsmcollege.edu.in'; // Replace with actual production URL

  // Define all static routes
  const routes = [
    '',
    '/about',
    '/governing-body',
    '/staff',
    '/affiliations',
    '/academics',
    '/committees',
    '/audit-reports',
    '/admissions',
    '/academic-calendar',
    '/facilities',
    '/gallery',
    '/contact',
  ];

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
