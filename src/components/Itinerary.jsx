import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Plane, Camera } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Обирай напрямок',
    desc: 'Фільтруй за сезоном, бюджетом і стилем подорожі. Отримай рекомендації на основі вподобань.'
  },
  {
    icon: Calendar,
    title: 'Плануй розклад',
    desc: 'Гнучкий таймлайн із ключовими подіями, перервами та вільним часом без перевантаження.'
  },
  {
    icon: Plane,
    title: 'Бронюй миттєво',
    desc: 'Квитки, житло та активності — все в одному місці з прозорими цінами.'
  },
  {
    icon: Camera,
    title: 'Ділись враженнями',
    desc: 'Збережи спогади в подорожному щоденнику та надихай друзів.'
  },
];

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-400/90">Процес</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">Маршрут, який створюється разом з тобою</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-300">
            Плавний скрол-ефект відкриває етапи підготовки — від ідеї до перших фотографій.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-900 p-6 text-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-300">{s.desc}</p>

                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-center text-neutral-200">
          Прокручуй сторінку, щоб побачити більше деталей і підказок для планування.
        </div>
      </div>
    </section>
  );
}
