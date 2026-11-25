import React from 'react';
import { motion } from 'framer-motion';
import globeImg from '../assets/globe.png';

export const GlobalClientsSection: React.FC = () => {
  return (
    <section id="clients" className="relative bg-[#F2F4F6] overflow-hidden">
      {/* Top White Area with Heading, Watermark, and Globe */}
      <div className="bg-white pt-14 lg:pt-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-[20px] sm:text-[22px] font-normal text-black mb-4">
            06/ Working with Global Clients
          </h2>
        </div>

        {/* Globe + Watermark + Curved Black Cradle Transition */}
        <div className="relative flex flex-col items-center pt-6 sm:pt-10">
          {/* Faded Clients Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none text-[125px] sm:text-[190px] lg:text-[240px] font-black italic leading-[0.8] tracking-tight text-[#F1F3F5] translate-y-12 sm:translate-y-16"
          >
            Clients
          </div>

          {/* Earth Globe overlapping the U-shaped cradle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative z-20 -mt-12 sm:-mt-20 lg:-mt-24 -mb-[145px] sm:-mb-[175px] lg:-mb-[195px]"
          >
            <img
              src={globeImg}
              alt="Global Clients Earth Globe"
              className="w-[245px] sm:w-[305px] lg:w-[345px] h-[245px] sm:h-[305px] lg:h-[345px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.22)] select-none"
            />
          </motion.div>

          {/* Curved Black Cradle SVG */}
          <div className="relative z-10 w-full leading-none">
            <svg
              viewBox="0 0 1440 240"
              preserveAspectRatio="none"
              className="w-full h-[155px] sm:h-[190px] lg:h-[220px] block"
              aria-hidden="true"
            >
              {/* White top bg already behind; draw the black shape with rounded outer corners and tighter center U-well */}
              <path
                d="
                  M 0,240
                  L 0,32
                  Q 0,0 32,0
                  L 485,0
                  Q 520,0 528,42
                  C 548,148 614,204 720,204
                  C 826,204 892,148 912,42
                  Q 920,0 955,0
                  L 1408,0
                  Q 1440,0 1440,32
                  L 1440,240
                  Z
                "
                fill="#000000"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Black Quote Container with rounded bottom corners */}
      <div className="bg-black text-white rounded-b-[28px] sm:rounded-b-[36px] pb-14 lg:pb-16 pt-4 px-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="max-w-[680px] mx-auto text-center text-[16px] sm:text-[18px] font-light leading-[1.65] text-[#D1D5DB]"
        >
          &ldquo;Collaborating with international clients to create creative, AI-powered visual
          solutions that meet diverse brand requirements and global design standards.&rdquo;
        </motion.p>
      </div>
    </section>
  );
};

