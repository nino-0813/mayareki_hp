import type { Metadata } from 'next';
import { Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import { SITE } from '@/lib/constants';
import { localBusinessSchema } from '@/lib/schema';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | マヤ暦占いのオンライン鑑定`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | マヤ暦占いのオンライン鑑定`,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | マヤ暦占いのオンライン鑑定`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = localBusinessSchema();

  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-serif bg-stone-50 text-stone-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
