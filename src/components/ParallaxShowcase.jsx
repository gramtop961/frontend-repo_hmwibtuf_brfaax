import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,115,0,0.15),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Прокручуй і занурюйся</h2>
          <p className="mt-2 text-white/70">Легка паралакса створює відчуття руху та подорожі.</p>
        </div>

        <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <motion.div style={{ y: y1 }} className="relative h-80 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              alt="Scenic city"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative h-80 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
              alt="Mountains"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center text-white/80">
          Від міських променад до гірських стежок — обирай свій темп, ми подбаємо про враження.
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center">
        <a
          href="#top"
          className="rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
        >
          Повернутися нагору
        </a>
      </div>
    </section>
  );
}
