import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import { SITE } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'ブログ',
  description:
    'マヤ暦に関するブログ記事一覧。マヤ暦の基礎知識から、日々の生活への活かし方まで、役立つ情報をお届けします。',
  alternates: { canonical: `${SITE.url}/blog` },
};

// Sample blog posts
const posts = [
  {
    slug: 'what-is-maya-calendar',
    title: 'マヤ暦とは？初心者にもわかりやすく解説',
    excerpt:
      'マヤ暦は古代マヤ文明の暦法をもとにした占術です。生年月日からKINナンバーを割り出し、あなたの本質・才能・使命を読み解きます。',
    date: '2026-03-01',
    category: 'マヤ暦基礎',
  },
  {
    slug: 'kin-number-meanings',
    title: 'KINナンバーで何がわかるの？20の紋章を解説',
    excerpt:
      'マヤ暦のKINナンバーは「太陽の紋章」と「ウェイブスペル」で構成されます。それぞれの意味と、あなたの本質の読み解き方を紹介します。',
    date: '2026-02-15',
    category: 'マヤ暦基礎',
  },
  {
    slug: 'maya-for-busy-moms',
    title: '子育て中のママこそマヤ暦占いがおすすめな理由',
    excerpt:
      '毎日忙しく自分のことを後回しにしがちなお母さんへ。マヤ暦を知ることで自己肯定感が上がり、子育てにも変化が生まれます。',
    date: '2026-02-01',
    category: 'ライフスタイル',
  },
  {
    slug: 'online-reading-guide',
    title: 'オンライン鑑定はじめてガイド｜準備から当日の流れまで',
    excerpt:
      'はじめてオンライン鑑定を受ける方へ。事前準備から当日の接続方法、鑑定後のフォローアップまで、丁寧に解説します。',
    date: '2026-01-20',
    category: '鑑定について',
  },
];

export default function BlogPage() {
  const schema = breadcrumbSchema([
    { name: 'トップ', url: SITE.url },
    { name: 'ブログ', url: `${SITE.url}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Hero */}
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Blog</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">ブログ</h1>
      </section>

      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-stone-100 p-6 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-xs text-stone-400">{post.date}</time>
                </div>
                <h2 className="text-stone-800 text-lg tracking-wide group-hover:text-amber-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">{post.excerpt}</p>
                <p className="text-amber-600 text-xs mt-4 tracking-wider">続きを読む →</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
