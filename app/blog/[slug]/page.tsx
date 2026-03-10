import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';

// Blog content map
const posts: Record<
  string,
  { title: string; date: string; category: string; content: string }
> = {
  'what-is-maya-calendar': {
    title: 'マヤ暦とは？初心者にもわかりやすく解説',
    date: '2026-03-01',
    category: 'マヤ暦基礎',
    content: `
マヤ暦は古代マヤ文明が使用していた暦法を現代に活かした占術です。
一般的な占いとは異なり、あなたの「本質」「使命」「才能」にフォーカスするため、
前向きなエネルギーをもたらしてくれます。

## KINナンバーとは？

生年月日から計算される260種類の組み合わせがあり、これが「KINナンバー」です。
20の太陽の紋章と13のトーン（音）の組み合わせで構成されています。

## マヤ暦でわかること

- **本来の才能・強み**：生まれながらに持っているギフト
- **今世の使命**：この人生で果たすべきテーマ
- **今年のエネルギー**：1年の流れとフォーカスポイント

## 他の占いとの違い

マヤ暦の大きな特徴は「批判しない」こと。
どのKINナンバーも等しく尊い存在として扱います。
鑑定後に「自分を好きになれた」という感想をよくいただきます。

まずは無料相談で、あなたのKINナンバーを調べてみませんか？
    `,
  },
  'kin-number-meanings': {
    title: 'KINナンバーで何がわかるの？20の紋章を解説',
    date: '2026-02-15',
    category: 'マヤ暦基礎',
    content: `
KINナンバーを構成する「20の太陽の紋章」。それぞれに固有の意味と特性があります。

## 20の太陽の紋章

赤い龍・白い風・青い夜・黄色い種…それぞれの紋章が持つエネルギーを知ることで、
自分の本質的な性質が見えてきます。

## 13のトーン（音）

1〜13の数字で表されるトーンは、「どのように」そのエネルギーを発揮するかを示します。

## 組み合わせの妙

260通りの組み合わせは、すべて等しく尊いユニークな存在を表しています。
あなただけのKINナンバーを、ぜひ一緒に読み解きましょう。
    `,
  },
  'maya-for-busy-moms': {
    title: '子育て中のママこそマヤ暦占いがおすすめな理由',
    date: '2026-02-01',
    category: 'ライフスタイル',
    content: `
40代、子育て中のお母さん。毎日忙しく、自分のことは後回し…
そんな方にこそ、マヤ暦占いをおすすめしたいのです。

## なぜ子育て中のママに？

1. **自己肯定感が上がる**：自分の本質を知ることで「私はこれでいい」と思えるようになります
2. **子どもへの理解が深まる**：子どものKINナンバーを知ることで関わり方のヒントに
3. **オンラインで受けられる**：子どもが寝た後、自宅から気軽に参加できます

## 鑑定を受けた方の声

「鑑定後、自分に自信が持てるようになった」
「子どもとの関係が変わった気がする」
「毎日が少し楽しくなった」

あなたも一歩、踏み出してみませんか？
    `,
  },
  'online-reading-guide': {
    title: 'オンライン鑑定はじめてガイド｜準備から当日の流れまで',
    date: '2026-01-20',
    category: '鑑定について',
    content: `
はじめてオンライン鑑定を受ける方へ。準備から当日の流れまでご説明します。

## 事前準備

1. **生年月日を確認**：ご自身と（相性鑑定の場合は）お相手の正確な生年月日
2. **Zoom または LINE の準備**：アプリのダウンロードと接続テスト
3. **事前アンケートの記入**：お申し込み後にフォームをお送りします

## 当日の流れ

1. 時間になったらZoom/LINEに接続
2. 簡単な自己紹介とヒアリング（10分）
3. KINナンバー解読・リーディング（40〜100分）
4. ご質問タイム

## 鑑定後

- 録画データをお送りします（後で見直せます）
- 1週間以内であればメッセージでのご質問OK

ご不明な点はお気軽にお問い合わせください。
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: '記事が見つかりません' };
  return {
    title: post.title,
    description: post.content.slice(0, 120).replace(/\n/g, ' ').replace(/#/g, ''),
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-stone-800 mb-4">記事が見つかりません</h1>
          <Link href="/blog" className="text-amber-600 hover:underline">
            ブログ一覧へ戻る
          </Link>
        </div>
      </div>
    );
  }

  const schema = breadcrumbSchema([
    { name: 'トップ', url: SITE.url },
    { name: 'ブログ', url: `${SITE.url}/blog` },
    { name: post.title, url: `${SITE.url}/blog/${slug}` },
  ]);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-xl text-stone-800 tracking-wide mt-8 mb-3">
              {line.slice(3)}
            </h2>
          );
        }
        if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
          return (
            <li key={i} className="text-stone-600 text-sm leading-relaxed ml-4 list-decimal">
              {line.slice(3).replace(/\*\*(.*?)\*\*/g, '$1')}
            </li>
          );
        }
        if (line === '') return <br key={i} />;
        return (
          <p key={i} className="text-stone-600 text-sm leading-loose">
            {line.replace(/\*\*(.*?)\*\*/g, '$1')}
          </p>
        );
      });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Hero */}
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <span className="text-amber-400 text-xs tracking-widest">{post.category}</span>
        <h1 className="text-white text-2xl sm:text-3xl tracking-wider mt-3 max-w-2xl mx-auto leading-relaxed">
          {post.title}
        </h1>
        <time className="text-white/50 text-xs mt-4 block">{post.date}</time>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-stone-50">
        <article className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          <div className="prose-like space-y-2">{renderContent(post.content)}</div>

          <div className="mt-10 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blog"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              ← ブログ一覧へ
            </Link>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-500 text-white text-sm px-6 py-3 rounded-full tracking-wider transition-all"
            >
              ✨ 無料相談はこちら
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
