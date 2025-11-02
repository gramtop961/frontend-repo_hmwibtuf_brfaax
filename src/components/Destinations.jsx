import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    title: 'Санторіні, Греція',
    image: 'https://images.unsplash.com/photo-1761701474690-3447b696ec17?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlQTElRDAlQjAlRDAlQkQlRDElODIlRDAlQkUlRDElODAlRDElOTYlRDAlQkQlRDElOTYlMkMlMjAlRDAlOTMlRDElODAlRDAlQjUlRDElODYlRDElOTYlRDElOEZ8ZW58MHwwfHx8MTc2MjA3NDYxMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.9,
    tag: 'Сонце та море',
  },
  {
    title: 'Кіото, Японія',
    image: 'https://images.unsplash.com/photo-1738103388307-28f9c57c16c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOUElRDElOTYlRDAlQkUlRDElODIlRDAlQkUlMkMlMjAlRDAlQUYlRDAlQkYlRDAlQkUlRDAlQkQlRDElOTYlRDElOEZ8ZW58MHwwfHx8MTc2MjA3NDYxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.8,
    tag: 'Культура',
  },
  {
    title: 'Доломіти, Італія',
    image: 'https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?q=80&w=1974&auto=format&fit=crop',
    rating: 5.0,
    tag: 'Гори',
  },
  {
    title: 'Каппадокія, Туреччина',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7,
    tag: 'Пригоди',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative w-full bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-400/90">Напрямки</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">Натхненні місця для вашої мандрівки</h2>
          </div>
          <p className="max-w-xl text-neutral-300">
            Підібрані локації з найкращими відгуками та унікальними враженнями. Оберіть свій стиль мандрівки.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute left-3 top-3 rounded-full bg-neutral-900/80 px-3 py-1 text-xs text-white/90 ring-1 ring-white/10">
                  {d.tag}
                </div>
              </div>
              <div className="flex items-start justify-between p-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-orange-400/90">
                    <MapPin className="h-4 w-4" />
                    <span>{d.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-300">
                    Відчуй автентику та атмосферу: прогулянки, кухня, панорами.
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-neutral-800/80 px-2 py-1 text-xs text-white ring-1 ring-white/10">
                  <Star className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" />
                  <span>{d.rating.toFixed(1)}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
