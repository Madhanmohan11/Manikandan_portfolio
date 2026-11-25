import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import aiIconImg from '../assets/skill-ai-icon.png';
import canvaHandImg from '../assets/skill-canva-hand.png';
import aiRobotImg from '../assets/skill-ai-robot.png';

const softSkills = [
  'Creative Thinking',
  'Problem-Solving',
  'Teamwork & Collaboration',
  'Adaptability',
  'AI Video Editing',
  'Communication',
  'Attention to Detail',
  'Time Management',
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full overflow-hidden">
      {/* 03 / Soft skills (Black Band) */}
      <div className="relative bg-black text-white py-12 lg:py-16 overflow-hidden">
        {/* Decorative background watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-4 lg:left-10 bottom-0 translate-y-4 text-[140px] sm:text-[185px] lg:text-[225px] font-black italic leading-[0.8] text-[#141414]"
        >
          Soft
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-[20px] sm:text-[22px] font-normal text-white mb-9">
            03 / <span className="ml-1">Soft skills</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 pl-0 sm:pl-6 lg:pl-12"
          >
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-300 stroke-[1.3] shrink-0" />
                <span className="text-[16px] lg:text-[18px] font-light tracking-wide text-white/95">
                  {skill}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Technical Skills (White Section) */}
      <div className="relative bg-white py-14 lg:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <h3 className="text-[19px] sm:text-[21px] font-normal text-[#4B5563] mb-10">
            Technical skills
          </h3>

          {/* Row 1: Adobe Illustrator */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 pb-12 lg:pb-16">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5 lg:pr-8 lg:border-r lg:border-[#D1D5DB] py-2"
            >
              <h4 className="text-[16px] font-bold italic underline underline-offset-4 decoration-[1.5px] text-black mb-3">
                Adobe Illustrator
              </h4>
              <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#6B7280] font-light italic list-disc pl-5">
                <li>
                  I create professional{' '}
                  <strong className="font-medium italic text-black">
                    vector graphics, brochures, business cards, social media creatives, and
                    large-format banners
                  </strong>{' '}
                  optimized for high-quality printing
                </li>
                <li>
                  I focus on precision, visual consistency, and impactful brand storytelling
                  across print and digital media.
                </li>
              </ul>
            </motion.div>

            {/* Right Visual (Ai icon + Tech watermark) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 relative flex items-center justify-center min-h-[210px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-0 lg:-right-6 bottom-0 text-[120px] sm:text-[160px] lg:text-[190px] font-black italic leading-[0.8] text-[#F1F3F5]"
              >
                Tech
              </div>
              <img
                src={aiIconImg}
                alt="Adobe Illustrator"
                className="relative z-10 w-[145px] sm:w-[165px] h-auto object-contain drop-shadow-md"
              />
            </motion.div>
          </div>

          {/* Row 2: Adobe XD & Canva */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 pt-4">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5 lg:pr-8 lg:border-r lg:border-[#D1D5DB] py-2"
            >
              <h4 className="text-[16px] font-bold italic underline underline-offset-4 decoration-[1.5px] text-black mb-3">
                Adobe XD &amp; Canva
              </h4>
              <p className="text-[15px] leading-[1.6] text-[#6B7280] font-light italic mb-2.5">
                Adobe XD, focusing on usability, visual consistency, and seamless user
                experiences.
              </p>
              <ul className="space-y-2 text-[15px] leading-[1.6] text-[#6B7280] font-light italic list-disc pl-5">
                <li>
                  I create{' '}
                  <strong className="font-medium italic text-black">
                    interactive prototypes, wireframes, and user flows to visualize concepts, solve
                    design challenges, and bring digital experiences
                  </strong>{' '}
                  to life.
                </li>
              </ul>
            </motion.div>

            {/* Right Visual (Hand holding Canva + Tech watermark) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative flex items-end justify-center lg:justify-end min-h-[240px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute right-0 lg:-right-6 bottom-2 text-[120px] sm:text-[160px] lg:text-[190px] font-black italic leading-[0.8] text-[#F1F3F5]"
              >
                Tech
              </div>
              <img
                src={canvaHandImg}
                alt="Canva Design Tool"
                className="relative z-10 w-full max-w-[560px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Tools (Light Gray Section) */}
      <div className="relative bg-[#F5F6F8] pt-12 lg:pt-14 pb-0 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <h3 className="text-[20px] sm:text-[22px] font-normal text-black mb-6">AI Tools</h3>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Visual: Robotic hand + AI watermark */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative flex items-end justify-start min-h-[260px] lg:min-h-[300px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-0 bottom-8 text-[150px] sm:text-[200px] lg:text-[230px] font-black italic leading-[0.8] text-[#E9ECEF]"
              >
                AI
              </div>
              <img
                src={aiRobotImg}
                alt="AI Tools Creative Workflow"
                className="relative z-10 w-full max-w-[540px] h-auto object-contain"
              />
            </motion.div>

            {/* Right Copy with thin left vertical divider */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 lg:border-l lg:border-[#D1D5DB] lg:pl-10 pb-12 lg:py-8"
            >
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#6B7280] font-light italic mb-2">
                <span className="font-normal italic text-[#1F2937]">and storytelling</span> to bring
                innovative ideas to life.
              </p>
              <ul className="space-y-2 text-[15px] sm:text-[16px] leading-[1.6] text-[#6B7280] font-light italic list-disc pl-5">
                <li>
                  I leverage AI to create visual concepts,{' '}
                  <span className="font-normal italic text-[#1F2937]">
                    develop engaging stories, streamline workflows, and enhance creativity across
                    design, branding, and digital content creation.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

