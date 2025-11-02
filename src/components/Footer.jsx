import React from 'react';
import { Plane, Map, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-16 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
              <Plane className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold">Voyage</div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white">Головна</a>
            <a href="#destinations" className="hover:text-white">Напрямки</a>
            <a href="#itinerary" className="hover:text-white">Маршрут</a>
          </nav>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Map className="mt-0.5 h-5 w-5 text-orange-400" />
            <p>Створи власний маршрут із улюбленими місцями та локаціями. Натхнення поруч.</p>
          </div>
          <div className="flex items-start gap-3">
            <Compass className="mt-0.5 h-5 w-5 text-orange-400" />
            <p>Отримуй персональні поради щодо сезонності, бюджету та логістики.</p>
          </div>
          <div className="flex items-start gap-3">
            <Plane className="mt-0.5 h-5 w-5 text-orange-400" />
            <p>Легко бронюй перельоти та житло з прозорими цінами без прихованих комісій.</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Voyage — Подорожі зі змістом</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Політика конфіденційності</a>
            <a href="#" className="hover:text-neutral-300">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
