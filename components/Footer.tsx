import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-xl text-white tracking-widest mb-1">
              Maya Calendar
            </p>
            <p className="text-amber-400 text-xs tracking-wider mb-4">
              {SITE.shortName}
            </p>
            <p className="text-sm leading-relaxed text-stone-400">
              マヤ暦があなたの本質を照らし、
              <br />
              人生に輝きを取り戻すお手伝いをします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm tracking-wider mb-4">メニュー</h3>
            <nav className="space-y-2">
              {[
                { label: 'トップ', href: '/' },
                { label: 'プロフィール', href: '/about' },
                { label: 'サービス・料金', href: '/service' },
                { label: 'ブログ', href: '/blog' },
                { label: '予約', href: '/booking' },
                { label: 'お問い合わせ', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm tracking-wider mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-sm text-stone-400">
              <p>営業時間: {SITE.businessHours}</p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white text-xs px-5 py-2.5 rounded-full tracking-wider transition-colors"
            >
              無料相談はこちら
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-500">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <p>Powered by マヤ暦の叡智</p>
        </div>
      </div>
    </footer>
  );
}
