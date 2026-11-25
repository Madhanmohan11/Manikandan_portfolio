import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero-illustration.png';
import { SocialLinks } from './SocialLinks';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-12 lg:pt-4 lg:pb-14">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative z-10 w-full lg:w-[52%] pt-2 lg:pt-4"
          >
            {/* Introduction Badge */}
            <div className="inline-block bg-[#F4F5F6] border border-[#E5E7EB] rounded-full px-5 sm:px-6 py-2 mb-7">
              <span className="text-[14px] sm:text-[16px] lg:text-[17px] font-bold tracking-tight text-black">
                Manikandaprabhu N | UI/UX &amp; Graphic Designer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[50px] lg:text-[54px] xl:text-[58px] font-bold leading-[1.06] tracking-[-0.02em] text-black mb-5">
              <span className="block lg:whitespace-nowrap">Designing Digital Experiences.</span>
              <span className="block">Creating Visual Impact.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[15px] sm:text-[17px] font-light italic leading-[1.55] text-[#6B7280] max-w-[465px] mb-8">
              I transform ideas into intuitive digital experiences and compelling visual
              identities through thoughtful design, creativity, and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-black text-white rounded-full px-7 py-3 text-[14px] sm:text-[15px] font-normal hover:bg-neutral-800 transition-colors"
              >
                <span>Explore my work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white text-black border border-[#1A1A1A] rounded-full px-7 py-3 text-[14px] sm:text-[15px] font-normal hover:bg-neutral-50 transition-colors"
              >
                <span className="underline underline-offset-4 decoration-[1px]">
                  Let&apos;s Connect
                </span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
              </motion.a>
            </div>

            {/* Social Links */}
            <SocialLinks variant="light" />
          </motion.div>

          {/* Right Workspace Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="relative z-0 w-full lg:w-[50%] lg:-ml-4 flex justify-center lg:justify-end"
          >
            <img
              src={heroIllustration}
              alt="UI/UX & Graphic Designer Workspace Illustration"
              className="w-full max-w-[640px] h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

