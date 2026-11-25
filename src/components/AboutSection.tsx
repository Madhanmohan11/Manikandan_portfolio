import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutPortrait from '../assets/about-portrait.png';

export const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Triggers a clean downloadable CV summary file; replace with public/Manikandaprabhu_N_CV.pdf when available.
    const cvContent = [
      'MANIKANDAPRABHU N',
      'AI Graphic Designer | UI/UX Designer | AI Video Editor',
      '',
      'CONTACT',
      'Email: manikandan.uiux@gmail.com',
      'Phone / WhatsApp: +91 93455 10110',
      '',
      'EXPERIENCE',
      '1. AI Graphic Designer — LeadSense Media India Pvt. Ltd. (September 2026 - Present)',
      '   - Creating AI-powered visual creatives for digital marketing campaigns.',
      '   - Generating innovative concepts using AI image and video tools.',
      '   - Designing promotional creatives, social media posts, and branding materials.',
      '   - Integrating AI tools into creative workflows to improve design efficiency.',
      '   - Combining traditional graphic design skills with AI-generated visuals.',
      '',
      '2. UI/UX & Graphic Designer — DLK Technologies Pvt. Ltd. (May 2024 - August 2026 | 2 Years 4 Months)',
      '   - Designed creative graphics for digital and print platforms.',
      '   - Created social media posts, marketing creatives, and promotional designs.',
      '   - Worked on branding, layout design, and visual communication.',
      '   - Translated business requirements into attractive visual concepts.',
      '',
      'SKILLS',
      'Technical: Adobe Illustrator, Adobe XD, Canva, Figma, AI Tools',
      'Soft Skills: Creative Thinking, Problem-Solving, Teamwork & Collaboration, Adaptability, AI Video Editing, Communication, Attention to Detail, Time Management',
    ].join('\n');

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manikandaprabhu_N_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative bg-white overflow-hidden pt-12 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Indicator */}
        <div className="text-[17px] sm:text-[19px] font-normal text-[#6B7280] mb-6">
          <span className="text-[#6B7280]">02 /</span>{' '}
          <span className="text-[#4B5563]">About us</span>
        </div>

        {/* Large Faded Background Typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-2 bottom-0 translate-y-2 text-[130px] sm:text-[180px] lg:text-[245px] font-black italic leading-[0.82] tracking-tight text-[#F1F3F5] z-0"
        >
          About
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 pr-0 lg:pr-8"
          >
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal tracking-tight text-black leading-tight">
              Manikandaprabhu N
            </h2>

            <p className="text-[15px] sm:text-[16px] font-bold italic text-black mt-1">
              AI Graphic Designer | UI/UX Designer | AI Video Editor
            </p>

            <div className="mt-6 space-y-1 text-[15px] sm:text-[16px] font-light italic leading-[1.6] text-[#6B7280]">
              <p>
                <strong className="font-bold italic text-black">
                  Hello! I&apos;m Manikandaprabhu,
                </strong>{' '}
                a passionate and creative individual who enjoys exploring new ideas and turning
                them into engaging visual experiences. I believe that good design is more than just
                aesthetics—it is about communicating a message, solving problems, and creating a
                connection with people.
              </p>
              <p>
                I enjoy learning new skills, experimenting with creative concepts, and continuously
                improving my abilities. My goal is to create work that combines creativity,
                purpose, and simplicity.
              </p>
            </div>

            <div className="mt-7">
              <h3 className="text-[15px] sm:text-[16px] font-bold italic underline underline-offset-4 decoration-[1.5px] text-black">
                My Design Philosophy
              </h3>
              <div className="mt-2 space-y-1 text-[15px] sm:text-[16px] font-light italic leading-[1.6] text-[#6B7280]">
                <p>
                  I believe that great design should be simple, meaningful, and user-focused. Every
                  design has a purpose, and my approach is to understand that purpose before
                  bringing an idea to life.
                </p>
                <p>
                  I focus on balancing creativity with functionality, ensuring that every element
                  contributes to a clear and engaging experience.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                type="button"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-black text-white rounded-full px-7 py-3 text-[14px] sm:text-[15px] font-normal hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span>Download CV</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Profile Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[445px]">
              <img
                src={aboutPortrait}
                alt="Manikandaprabhu N Portrait"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

