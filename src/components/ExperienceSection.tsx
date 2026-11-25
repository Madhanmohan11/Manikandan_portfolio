import React from 'react';
import { motion } from 'framer-motion';
import experienceIllustration from '../assets/experience-illustration.png';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Graphic Designer',
    company: 'LeadSense Media India Pvt. Ltd.',
    period: 'September 2026 – Present',
    highlights: [
      'Creating AI-powered visual creatives for digital marketing campaigns.',
      'Generating innovative concepts using AI image and video tools.',
      'Designing promotional creatives, social media posts, and branding materials.',
      'Integrating AI tools into creative workflows to improve design efficiency.',
      'Combining traditional graphic design skills with AI-generated visuals.',
    ],
  },
  {
    role: 'UI/UX & Graphic Designer',
    company: 'DLK Technologies Pvt. Ltd.',
    period: 'May 2024 – August 2026 · 2 Years 4 Months',
    highlights: [
      'Designed creative graphics for digital and print platforms.',
      'Created social media posts, marketing creatives, and promotional designs.',
      'Worked on branding, layout design, and visual communication.',
      'Translated business requirements into attractive visual concepts.',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative bg-black text-white pt-14 lg:pt-16 pb-0 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-[20px] sm:text-[22px] font-normal text-white mb-10">
          05/ Professional Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-end">
          {/* Left Timeline / Roles */}
          <div className="lg:col-span-6 pb-14 lg:pb-16 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                {/* Straight-left, rounded-right pill matching Figma */}
                <div className="inline-block bg-gradient-to-b from-white to-[#EAECEF] text-black rounded-r-full px-6 py-2 shadow-sm">
                  <span className="text-[15px] sm:text-[16px] font-bold tracking-tight">
                    {exp.role}
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[25px] font-bold text-white mt-4 leading-snug">
                  {exp.company}
                </h3>

                <p className="text-[14px] sm:text-[15px] font-light text-[#B8BCC2] mt-1">
                  {exp.period}
                </p>

                <ul className="mt-4 space-y-1.5 text-[14px] sm:text-[15px] font-light text-[#D1D5DB] list-disc pl-5 leading-[1.6]">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Designer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex justify-center lg:justify-end items-end"
          >
            <img
              src={experienceIllustration}
              alt="Designer working on UI/UX and Graphic Design"
              className="w-full max-w-[600px] h-auto object-contain select-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

