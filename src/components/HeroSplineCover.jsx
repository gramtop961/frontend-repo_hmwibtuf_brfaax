import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Plane, Compass } from 'lucide-react';

export default function HeroSplineCover() {
  const headline = useMemo(() => 'Твоя наступна подорож починається тут', []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Compass className="h-4 w-4 text-orange-300" />
          <span className="text-sm text-orange-200">Відкрий нові горизонти</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Інтерактивні маршрути, натхненні добірки та найкращі пропозиції. Прокручуй — і вирушай назустріч пригодам.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            <Plane className="h-5 w-5" />
            Обрати напрямок
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Досвід подорожей
          </a>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
          <span className="animate-bounce">Прокручуй</span>
        </div>
      </div>
    </section>
  );
}
