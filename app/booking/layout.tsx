import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '予約',
  description: `ご希望の日付をカレンダーから選んでご予約ください。${SITE.name}`,
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
