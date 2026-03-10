'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Section from '@/components/Section';
import { SITE } from '@/lib/constants';

type FormData = {
  name: string;
  email: string;
  tel: string;
  service: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
};

function formatDateFromQuery(dateStr: string, timeStr?: string | null) {
  const [y, m, d] = dateStr.split('-').map(Number);
  if (!y || !m || !d) return null;
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return null;
  const base = `${y}年${m}月${d}日（${weekdays[date.getDay()]}）`;
  if (timeStr && /^\d{1,2}:\d{2}$/.test(timeStr)) {
    return `${base} ${timeStr}`;
  }
  return base;
}

function ContactContent() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get('date');
  const timeParam = searchParams.get('time');
  const preferredDateLabel = dateParam ? formatDateFromQuery(dateParam, timeParam) : null;

  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    if (dateParam) setValue('preferredDate', dateParam);
    if (timeParam) setValue('preferredTime', timeParam);
  }, [dateParam, timeParam, setValue]);

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to form submission service (Formspree, Resend, etc.)
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Contact</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">お問い合わせ</h1>
      </section>

      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center bg-white rounded-2xl p-12 border border-stone-100 shadow-sm">
              <div className="text-5xl mb-6">✨</div>
              <h2 className="text-2xl text-stone-800 tracking-wider mb-4">
                お問い合わせありがとうございます
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-8">
                24時間以内にご返信いたします。
                <br />
                しばらくお待ちください。
              </p>
              <Link
                href="/"
                className="inline-block border border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 px-8 py-3 rounded-full text-sm tracking-wider transition-all"
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
              <p className="text-stone-500 text-sm leading-relaxed mb-8 text-center">
                ご質問・ご予約はこちらのフォームからどうぞ。
                <br />
                <span className="text-amber-600">返信は24時間以内</span>。強引な勧誘は一切ありません。
              </p>

              {preferredDateLabel && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-100 text-center">
                  <p className="text-amber-800 text-sm tracking-wider">
                    ご希望日時: <span className="font-medium">{preferredDateLabel}</span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-stone-700 text-xs tracking-wider mb-1.5">
                    お名前 <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="山田 花子"
                    {...register('name', { required: 'お名前を入力してください' })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-stone-200 bg-stone-50'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-stone-700 text-xs tracking-wider mb-1.5">
                    メールアドレス <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    {...register('email', {
                      required: 'メールアドレスを入力してください',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: '正しいメールアドレスを入力してください',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-stone-200 bg-stone-50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Tel */}
                <div>
                  <label className="block text-stone-700 text-xs tracking-wider mb-1.5">
                    電話番号（任意）
                  </label>
                  <input
                    type="tel"
                    placeholder="090-xxxx-xxxx"
                    {...register('tel')}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-stone-700 text-xs tracking-wider mb-1.5">
                    ご興味のあるサービス
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
                  >
                    <option value="">選択してください</option>
                    <option value="basic">ベーシック鑑定（¥5,500）</option>
                    <option value="relationship">相性・人間関係鑑定（¥8,800）</option>
                    <option value="life">人生転換期鑑定（¥12,100）</option>
                    <option value="consult">まず相談したい（無料）</option>
                  </select>
                </div>

                {preferredDateLabel && (
                  <>
                    <input type="hidden" {...register('preferredDate')} />
                    <input type="hidden" {...register('preferredTime')} />
                  </>
                )}

                {/* Message */}
                <div>
                  <label className="block text-stone-700 text-xs tracking-wider mb-1.5">
                    ご質問・ご要望 <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="気になっていること、悩んでいること、何でもお気軽にどうぞ。"
                    {...register('message', { required: 'メッセージを入力してください' })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all resize-none ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-stone-200 bg-stone-50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white py-4 rounded-full text-sm tracking-widest transition-all"
                >
                  {isSubmitting ? '送信中...' : '✨ 送信する'}
                </button>
              </form>

              <p className="text-xs text-stone-400 text-center mt-4">
                ご入力いただいた情報は鑑定目的以外には使用しません。
              </p>
            </div>
          )}

          {/* Direct contact */}
          <div className="mt-8 text-center text-stone-500 text-sm">
            <p>またはメールで直接ご連絡ください</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-amber-600 hover:underline mt-1 block"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactFallback() {
  return (
    <>
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Contact</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">お問い合わせ</h1>
      </section>
      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 animate-pulse">
            <div className="h-6 bg-stone-100 rounded w-3/4 mx-auto mb-8" />
            <div className="space-y-5">
              <div className="h-12 bg-stone-100 rounded-xl" />
              <div className="h-12 bg-stone-100 rounded-xl" />
              <div className="h-12 bg-stone-100 rounded-xl" />
              <div className="h-32 bg-stone-100 rounded-xl" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactContent />
    </Suspense>
  );
}
