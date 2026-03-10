import Link from 'next/link';
import Section from '@/components/Section';
import { SERVICES, FAQS } from '@/lib/constants';
import { faqSchema } from '@/lib/schema';

export default function Home() {
  const schema = faqSchema([...FAQS]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
        {/* Stars overlay */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 20% 30%, white, transparent),
                radial-gradient(1px 1px at 80% 20%, white, transparent),
                radial-gradient(1px 1px at 50% 70%, white, transparent),
                radial-gradient(1px 1px at 70% 50%, white, transparent),
                radial-gradient(1px 1px at 30% 80%, white, transparent),
                radial-gradient(1px 1px at 90% 60%, white, transparent),
                radial-gradient(1px 1px at 10% 50%, white, transparent),
                radial-gradient(1px 1px at 60% 10%, white, transparent),
                radial-gradient(1.5px 1.5px at 40% 45%, rgba(255,255,255,0.8), transparent),
                radial-gradient(1.5px 1.5px at 75% 75%, rgba(255,255,255,0.8), transparent)`,
            }}
          />
        </div>

        {/* Gold ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-amber-500/10 rounded-full" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <p className="text-amber-400 font-display text-lg sm:text-xl tracking-[0.3em] mb-6">
            Maya Calendar Reading
          </p>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-relaxed tracking-wider mb-6">
            毎日が同じ繰り返し…
            <br />
            <span className="text-amber-300">そう感じているあなたへ</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            マヤ暦があなたの本質を照らし出します。
            <br className="hidden sm:block" />
            生まれ持った使命と才能を知ることで、
            <br className="hidden sm:block" />
            人生が輝きはじめる瞬間を体験してください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-sm tracking-widest transition-all hover:shadow-lg hover:shadow-amber-500/30"
            >
              ✨ 無料相談はこちら
            </Link>
            <Link
              href="/service"
              className="border border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-full text-sm tracking-widest transition-all hover:bg-white/10"
            >
              サービス・料金を見る
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ===== PROBLEM ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 text-sm tracking-widest mb-3">Problem</p>
          <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-3">
            こんなお悩み、ありませんか？
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {[
              {
                icon: '🔄',
                text: '毎日が同じことの繰り返しで、充実感が感じられない',
              },
              {
                icon: '🌿',
                text: '子育てで忙しく、いつも自分のことは後回しにしている',
              },
              {
                icon: '❓',
                text: '自分の人生、このままでいいのかな…と漠然と不安',
              },
              {
                icon: '🌟',
                text: '前向きになりたいけど、なにかきっかけがつかめない',
              },
              {
                icon: '💫',
                text: '自分の強みや才能が何かわからない',
              },
              {
                icon: '🛤️',
                text: '人生の方向性を見つけて、もっと自分らしく生きたい',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-stone-100"
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <p className="text-stone-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 text-white">
            <p className="text-lg sm:text-xl leading-relaxed">
              その悩み、<span className="text-amber-300 font-medium">マヤ暦</span>が
              解決への扉を開いてくれるかもしれません。
            </p>
            <p className="text-white/70 text-sm mt-3">
              生まれた日に宿る「使命」と「才能」を読み解くことで、
              <br className="hidden sm:block" />
              人生の流れがクリアに見えてきます。
            </p>
          </div>
        </div>
      </Section>

      {/* ===== SOLUTION ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-white" delay={0.1}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 text-sm tracking-widest mb-3">Solution</p>
          <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-3">
            マヤ暦鑑定が選ばれる理由
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'オンラインで完結',
                desc: 'Zoomまたは LINEビデオ通話。自宅からリラックスした状態で受けられます。移動時間ゼロ、お子さんの寝かしつけ後でもOK。',
              },
              {
                number: '02',
                title: '初心者でも安心',
                desc: '難しい知識は一切不要。生年月日さえわかれば大丈夫。わかりやすい言葉で丁寧にお伝えします。',
              },
              {
                number: '03',
                title: '前向きになれる占い',
                desc: '批評や予言ではなく、あなたの「本質」と「才能」にフォーカス。鑑定後に「自分を好きになれた」と言っていただける鑑定を目指しています。',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="text-center p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="font-display text-4xl text-amber-400 mb-4">{item.number}</div>
                <h3 className="text-stone-800 font-medium tracking-wider mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SERVICE ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50" delay={0.1}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 text-sm tracking-widest mb-3">Service</p>
          <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-3">
            鑑定メニュー
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 text-left border transition-all hover:shadow-lg ${
                  index === 2
                    ? 'bg-gradient-to-br from-purple-900 to-indigo-900 border-purple-800 text-white'
                    : 'bg-white border-stone-100 text-stone-800'
                }`}
              >
                {index === 2 && (
                  <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-4 tracking-wider">
                    人気 No.1
                  </span>
                )}
                <h3
                  className={`font-medium tracking-wider mb-1 ${
                    index === 2 ? 'text-white' : 'text-stone-800'
                  }`}
                >
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-2xl font-light ${
                      index === 2 ? 'text-amber-300' : 'text-amber-600'
                    }`}
                  >
                    ¥{service.price}
                  </span>
                  <span
                    className={`text-xs ${index === 2 ? 'text-white/60' : 'text-stone-400'}`}
                  >
                    / {service.duration}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    index === 2 ? 'text-white/80' : 'text-stone-500'
                  }`}
                >
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className={`text-xs flex items-start gap-2 ${
                        index === 2 ? 'text-white/70' : 'text-stone-500'
                      }`}
                    >
                      <span className="text-amber-400 mt-0.5">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/service"
              className="inline-block border border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 px-8 py-3 rounded-full text-sm tracking-wider transition-all"
            >
              サービス詳細を見る →
            </Link>
          </div>
        </div>
      </Section>

      {/* ===== PROFILE ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-white" delay={0.1}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-600 text-sm tracking-widest mb-3">Profile</p>
          <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-3">
            はじめまして
          </h2>
          <div className="section-divider mb-10" />

          {/* Avatar placeholder */}
          <div className="w-28 h-28 rounded-full mx-auto mb-6 bg-gradient-to-br from-purple-100 to-amber-100 border-2 border-amber-200 flex items-center justify-center">
            <span className="text-4xl">🌙</span>
          </div>

          <h3 className="text-stone-800 text-xl tracking-wider mb-1">小林</h3>
          <p className="text-amber-600 text-xs tracking-widest mb-6">Maya Calendar Reader</p>

          <p className="text-stone-600 text-sm leading-loose text-left max-w-xl mx-auto">
            「このままの人生でいいのかな…」
            <br />
            <br />
            そう感じていたとき、マヤ暦との出会いが私自身の人生を変えました。
            生まれた日に宿る本質を知ることで、自分を肯定できるようになり、
            毎日に喜びを感じられるようになったのです。
            <br />
            <br />
            特に40代のお母さんたちに、その体験をお届けしたいと思っています。
            子育てに追われながらも「自分らしく生きたい」と願うあなたの、
            一歩前へ踏み出す勇気を一緒に育んでいきましょう。
          </p>

          <Link
            href="/about"
            className="inline-block mt-8 border border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 px-8 py-3 rounded-full text-sm tracking-wider transition-all"
          >
            プロフィール詳細 →
          </Link>
        </div>
      </Section>

      {/* ===== TARGET ===== */}
      <Section
        className="py-20 lg:py-28 px-4 sm:px-6 cosmic-bg"
        delay={0.1}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-sm tracking-widest mb-3">For You</p>
          <h2 className="text-2xl sm:text-3xl text-white tracking-wider mb-3">
            こんな方に来てほしい
          </h2>
          <div className="section-divider mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              '子育て中で自分の時間が取れない40代の女性',
              '毎日同じことの繰り返しに疲れを感じている方',
              '自分の強みや才能がわからないと感じている方',
              '人生の転換期に差し掛かり、次の一歩を模索している方',
              '占いで前向きなエネルギーを取り入れたい方',
              '自分自身をもっと好きになりたいと思っている方',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <span className="text-amber-400 text-lg mt-0.5">🌟</span>
                <p className="text-white/85 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50" delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider">
              よくあるご質問
            </h2>
            <div className="section-divider mt-3" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-100 overflow-hidden"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer text-stone-800 text-sm leading-relaxed tracking-wide hover:text-amber-600 transition-colors">
                  <span className="flex items-start gap-3">
                    <span className="text-amber-500 font-display text-lg shrink-0">Q.</span>
                    {faq.q}
                  </span>
                  <span className="text-stone-400 ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-50 pt-4">
                  <span className="text-amber-500 font-display text-lg mr-2">A.</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-white" delay={0.1}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-600 text-sm tracking-widest mb-3">✨ First Step</p>
          <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-4">
            まず一歩、踏み出してみませんか？
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-10">
            「新規顧客10人・月売上30万」を目標に、
            <br className="hidden sm:block" />
            あなたの人生を変えるきっかけをお届けします。
            <br />
            初回相談は無料ですので、お気軽にどうぞ。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-sm tracking-widest transition-all hover:shadow-lg hover:shadow-amber-500/30"
          >
            ✨ 無料相談はこちら
          </Link>

          <p className="mt-4 text-xs text-stone-400">
            返信は24時間以内 ｜ 強引な勧誘は一切ありません
          </p>
        </div>
      </Section>
    </>
  );
}
