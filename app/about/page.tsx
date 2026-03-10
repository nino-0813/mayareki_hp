import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import { SITE } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'プロフィール',
  description:
    'マヤ暦鑑定士・小林のプロフィールページ。マヤ暦との出会いや、占いへの想いをお伝えします。40代のお母さんたちが自分らしく輝けるお手伝いをしています。',
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: 'トップ', url: SITE.url },
    { name: 'プロフィール', url: `${SITE.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Hero */}
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Profile</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">プロフィール</h1>
      </section>

      {/* Content */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-amber-100 border-4 border-amber-200 flex items-center justify-center shadow-lg">
                <span className="text-6xl">🌙</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-stone-800 text-2xl tracking-wider mb-1">小林</h2>
              <p className="text-amber-600 text-xs tracking-widest mb-6">
                Maya Calendar Reader / マヤ暦鑑定士
              </p>

              <div className="space-y-4 text-stone-600 text-sm leading-loose">
                <p>
                  はじめまして、小林です。マヤ暦占いのオンライン鑑定を行っています。
                </p>
                <p>
                  「このままの人生でいいのかな…」
                  そう感じていたとき、マヤ暦との運命的な出会いがありました。
                  生まれた日に宿る本質を知ることで、自分を肯定できるようになり、
                  毎日に喜びと目的を感じられるようになったのです。
                </p>
                <p>
                  特に40代、子育て中のお母さんたちにその体験をお届けしたいと思っています。
                  忙しい毎日の中で「自分のこと」を後回しにしがちな方に、
                  マヤ暦を通じて「あなたは素晴らしい存在だ」と感じてほしいのです。
                </p>
                <p>
                  占いというよりも「自己理解ツール」として活用できるマヤ暦。
                  鑑定を通じて、あなたの本来の輝きを一緒に見つけましょう。
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-stone-800 text-xl tracking-wider mb-8 text-center">
              大切にしていること
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: '🌟',
                  title: '批判ではなく肯定',
                  desc: 'マヤ暦は「あなたはこういう人」と決めつけるものではありません。本来の才能と可能性を見つけるためのものです。',
                },
                {
                  icon: '🤝',
                  title: '寄り添うリーディング',
                  desc: '鑑定は一方的なお伝えではなく、対話を大切にします。あなたの状況や気持ちを聞きながら、一緒に答えを探します。',
                },
                {
                  icon: '✨',
                  title: '行動へのヒント',
                  desc: '鑑定後に「で、何をすればいいの？」と迷わないよう、具体的な次のステップもご提案します。',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-stone-100 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-stone-800 text-sm font-medium tracking-wider mb-2">
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-sm tracking-widest transition-all"
            >
              ✨ 無料相談はこちら
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
