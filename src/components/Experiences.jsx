import { motion } from 'framer-motion';
import { Plane, Map, Compass, Star } from 'lucide-react';

const items = [
  {
    icon: Plane,
    title: 'Розумне планування',
    text: 'Маршрути, які підлаштовуються під твій стиль подорожей.',
  },
  {
    icon: Map,
    title: 'Офлайн-карти',
    text: 'Завантажуй маршрути та орієнтуйся без зв’язку.',
  },
  {
    icon: Compass,
    title: 'Локальні підказки',
    text: 'Місця, які знають лише місцеві — їжа, бари, атмосферні вулиці.',
  },
  {
    icon: Star,
    title: 'Перевірені відгуки',
    text: 'Спільнота мандрівників допоможе обрати найкраще.',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative w-full bg-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Досвід, який надихає</h2>
          <p className="mt-2 text-white/70">
            Від ідеї до перельоту — усе в одному місці з акцентом на зручність та стиль.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl bg-gradient-to-b from-zinc-800/60 to-zinc-800/30 p-6 ring-1 ring-white/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
