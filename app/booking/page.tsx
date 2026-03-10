'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

function getMonthDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const daysInMonth = last.getDate();
  const prevMonth = new Date(year, month, 0);
  const daysPrev = prevMonth.getDate();
  const cells: { date: Date; isCurrentMonth: boolean; isPast: boolean }[] = [];

  for (let i = startPad - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, daysPrev - i);
    d.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    cells.push({ date: d, isCurrentMonth: false, isPast: d < today });
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    d.setHours(0, 0, 0, 0);
    cells.push({ date: d, isCurrentMonth: true, isPast: d < today });
  }
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(year, month + 1, i);
    d.setHours(0, 0, 0, 0);
    cells.push({ date: d, isCurrentMonth: false, isPast: d < today });
  }
  return cells;
}

function formatDateJa(d: Date) {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${WEEKDAYS[d.getDay()]}）`;
}

// 30分刻み 9:00〜18:00
const TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let h = 9; h <= 18; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 18 && m > 0) break;
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return slots;
})();

export default function BookingPage() {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const cells = useMemo(
    () => getMonthDays(viewDate.year, viewDate.month),
    [viewDate.year, viewDate.month]
  );

  const prevMonth = () => {
    if (viewDate.month === 0) {
      setViewDate({ year: viewDate.year - 1, month: 11 });
    } else {
      setViewDate({ year: viewDate.year, month: viewDate.month - 1 });
    }
  };

  const nextMonth = () => {
    if (viewDate.month === 11) {
      setViewDate({ year: viewDate.year + 1, month: 0 });
    } else {
      setViewDate({ year: viewDate.year, month: viewDate.month + 1 });
    }
  };

  const viewMonthLabel = `${viewDate.year}年${viewDate.month + 1}月`;

  return (
    <>
      <section className="cosmic-bg pt-32 pb-20 px-4 sm:px-6 text-center">
        <p className="text-amber-400 font-display text-lg tracking-widest mb-3">Booking</p>
        <h1 className="text-white text-3xl sm:text-4xl tracking-wider">予約</h1>
        <p className="text-white/80 text-sm mt-4 max-w-md mx-auto">
          ご希望の日付と時間をお選びください
        </p>
      </section>

      <Section className="py-20 lg:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {/* Month navigation */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-stone-100">
              <button
                type="button"
                onClick={prevMonth}
                className="p-2 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-700 transition-colors"
                aria-label="前の月"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-stone-800 font-medium tracking-wider">{viewMonthLabel}</span>
              <button
                type="button"
                onClick={nextMonth}
                className="p-2 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-700 transition-colors"
                aria-label="次の月"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-b border-stone-100">
              {WEEKDAYS.map((day, i) => (
                <div
                  key={day}
                  className={`py-2 text-center text-xs font-medium ${
                    i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-stone-500'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 p-2">
              {cells.map((cell, i) => {
                const isSelected =
                  selectedDate &&
                  cell.date.getFullYear() === selectedDate.getFullYear() &&
                  cell.date.getMonth() === selectedDate.getMonth() &&
                  cell.date.getDate() === selectedDate.getDate();
                const isDisabled = cell.isPast;
                const isSun = cell.date.getDay() === 0;
                const isSat = cell.date.getDay() === 6;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => {
                      if (cell.isPast) return;
                      setSelectedDate(cell.date);
                      setSelectedTime(null); // 日付変更で時間をリセット
                    }}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg transition-colors
                      ${!cell.isCurrentMonth ? 'text-stone-300' : ''}
                      ${cell.isCurrentMonth && isDisabled ? 'text-stone-300 cursor-not-allowed' : ''}
                      ${cell.isCurrentMonth && !isDisabled ? 'text-stone-700 hover:bg-amber-50' : ''}
                      ${isSelected ? 'bg-amber-500 text-white hover:bg-amber-600' : ''}
                      ${isSun && cell.isCurrentMonth && !isSelected ? 'text-red-500' : ''}
                      ${isSat && cell.isCurrentMonth && !isSelected && !isSun ? 'text-blue-500' : ''}
                    `}
                  >
                    {cell.date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedDate && (
            <div className="mt-8 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <p className="text-stone-500 text-xs tracking-wider mb-1">選択した日付</p>
              <p className="text-stone-800 text-lg tracking-wider mb-4">
                {formatDateJa(selectedDate)}
              </p>

              <p className="text-stone-600 text-sm tracking-wider mb-3">ご希望の時間</p>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-6">
                {TIME_SLOTS.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-2 rounded-lg text-sm tracking-wider transition-colors
                        ${isSelected
                          ? 'bg-amber-500 text-white'
                          : 'bg-stone-50 text-stone-700 hover:bg-amber-50 border border-stone-100'}
                      `}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              {selectedTime && (
                <div className="text-center pt-2">
                  <p className="text-stone-500 text-xs tracking-wider mb-2">
                    {formatDateJa(selectedDate)} {selectedTime}
                  </p>
                  <Link
                    href={`/contact?date=${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}&time=${selectedTime}`}
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-sm px-8 py-3 rounded-full tracking-wider transition-colors"
                  >
                    この日時で予約する
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
