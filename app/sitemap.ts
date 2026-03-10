import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/blog/what-is-maya-calendar`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/kin-number-meanings`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/maya-for-busy-moms`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/online-reading-guide`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
