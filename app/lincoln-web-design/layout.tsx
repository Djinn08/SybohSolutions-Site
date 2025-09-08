import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design in Lincoln, NE | Syboh Solutions',
  description:
    'Operator-first web design and SEO in Lincoln, NE. Fast sites, ongoing care plans from $149/mo. View work and pricing.',
  alternates: { canonical: '/lincoln-web-design' },
  openGraph: {
    title: 'Web Design in Lincoln, NE | Syboh Solutions',
    description:
      'Operator-first web design and SEO in Lincoln, NE. Fast sites, ongoing care plans from $149/mo.',
    url: 'https://sybohsolutions.com/lincoln-web-design',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function LincolnWebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
