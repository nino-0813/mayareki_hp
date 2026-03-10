import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import { SITE, SERVICES, FAQS } from '@/lib/constants';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'サービス・料金',
  description:
    'マヤ暦鑑定のオンラインサービスと料金一覧。ベーシック鑑定（¥5,500）から人生転換期鑑定（¥12,100）まで、あなたに合ったメニューをご用意しています。',
  alternates: { canonical: `${SITE.url}/service` },
};

export default function ServicePage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'トップ', url: SITE.url },
    { name: 'サービス・料金', url: `${SITE.url}/service` },
  ]);
  const faq = faqSchema([...FAQS]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      {/* Page Hero */}
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Service & Price</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">サービス・料金</h1>
      </section>

      {/* Services */}
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-stone-800 tracking-wider mb-3">
              鑑定メニュー
            </h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`rounded-2xl overflow-hidden border ${
                  index === 2
                    ? 'border-purple-800'
                    : 'border-stone-100'
                }`}
              >
                <div
                  className={`p-6 sm:p-8 ${
                    index === 2
                      ? 'bg-gradient-to-br from-purple-900 to-indigo-900 text-white'
                      : 'bg-white text-stone-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      {index === 2 && (
                        <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-2 tracking-wider">
                          人気 No.1
                        </span>
                      )}
                      <h3
                        className={`text-xl tracking-wider ${
                          index === 2 ? 'text-white' : 'text-stone-800'
                        }`}
                      >
                        {service.name}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          index === 2 ? 'text-white/60' : 'text-stone-400'
                        }`}
                      >
                        所要時間: {service.duration}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`text-3xl font-light ${
                          index === 2 ? 'text-amber-300' : 'text-amber-600'
                        }`}
                      >
                        ¥{service.price}
                      </span>
                      <span
                        className={`text-sm ml-1 ${
                          index === 2 ? 'text-white/60' : 'text-stone-400'
                        }`}
                      >
                        (税込)
                      </span>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      index === 2 ? 'text-white/80' : 'text-stone-500'
                    }`}
                  >
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2 text-sm ${
                          index === 2 ? 'text-white/70' : 'text-stone-500'
                        }`}
                      >
                        <span className="text-amber-400 mt-0.5 shrink-0">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="mt-16">
            <h3 className="text-stone-800 text-xl tracking-wider mb-8 text-center">
              鑑定の流れ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'お問い合わせ', desc: 'フォームまたはLINEからご連絡ください' },
                { step: '02', title: '日程調整', desc: 'ご都合の良い日時を一緒に決めます' },
                { step: '03', title: 'オンライン鑑定', desc: 'Zoom / LINE ビデオ通話で実施' },
                { step: '04', title: '録画データお渡し', desc: 'セッション後に動画をお送りします' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <span className="font-display text-amber-600 text-lg">{item.step}</span>
                  </div>
                  <h4 className="text-stone-800 text-sm font-medium tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-stone-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="mt-12 bg-stone-100 rounded-2xl p-6 text-center">
            <h4 className="text-stone-700 text-sm font-medium tracking-wider mb-3">
              お支払い方法
            </h4>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-500">
              {['銀行振込', 'PayPay', 'クレジットカード（Stripe）'].map((method) => (
                <span
                  key={method}
                  className="bg-white px-4 py-2 rounded-full border border-stone-200"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-xs text-stone-400 mt-3">
              ※ 鑑定前日までにお支払いをお願いしております
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/booking"
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-sm tracking-widest transition-all"
            >
              ✨ 無料相談・ご予約はこちら
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
