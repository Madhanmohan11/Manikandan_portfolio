import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 3, suffix: '', label: 'Years Experience' },
  { target: 1000, suffix: '+', label: 'Projects' },
  { target: 150, suffix: '+', label: 'Clients' },
];

const AnimatedNumber: React.FC<{ target: number; suffix: string; inView: boolean }> = ({
  target,
  suffix,
  inView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frameId: number;
    const duration = 1100;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target]);

  return (
    <span>
      {inView ? count : target}
      {suffix}
    </span>
  );
};

export const StatisticsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-white border-y border-[#F0F1F3]">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#D1D5DB]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 sm:py-2 px-6 text-center"
            >
              <div className="text-[36px] sm:text-[42px] lg:text-[46px] font-bold leading-none tracking-tight text-black">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="mt-2 text-[15px] sm:text-[16px] font-light italic text-[#6B7280] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

