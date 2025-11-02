import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradient and content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-orange-400/90 uppercase">
          Explore the world
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
          Відкрий для себе подорожі нового покоління
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-neutral-200/90">
          Інтерактивні маршрути, натхненні напрямки та безшовне бронювання. 
          Прокрути вниз і почни свою пригоду.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#destinations" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-white shadow-lg shadow-orange-500/20 transition-transform hover:scale-[1.03]">
            Популярні напрямки
          </a>
          <a href="#itinerary" className="rounded-full border border-white/20 px-6 py-3 text-white/90 hover:border-white/40 hover:text-white">
            Як це працює
          </a>
        </div>

        <a href="#destinations" className="absolute bottom-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm">Прокрути вниз</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
