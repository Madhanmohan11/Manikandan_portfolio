import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectWebsite from '../assets/project-website.png';
import projectMobile from '../assets/project-mobile.png';
import projectSocial from '../assets/project-social.png';
import projectBrochure from '../assets/project-brochure.png';
import projectVideo from '../assets/project-video.png';

interface ProjectCategory {
  id: string;
  label: string;
  image: string;
  alt: string;
}

const categories: ProjectCategory[] = [
  {
    id: 'website',
    label: 'Website Designs',
    image: projectWebsite,
    alt: 'Website Design Showcase',
  },
  {
    id: 'mobile',
    label: 'Mobile App Designs',
    image: projectMobile,
    alt: 'Mobile App Design Showcase',
  },
  {
    id: 'social',
    label: 'Social Media Creatives',
    image: projectSocial,
    alt: 'Social Media Creatives Showcase',
  },
  {
    id: 'brochures',
    label: 'Brochures & Banners',
    image: projectBrochure,
    alt: 'Brochures and Banners Showcase',
  },
  {
    id: 'videos',
    label: 'Promotion Videos',
    image: projectVideo,
    alt: 'Promotion Videos Showcase',
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('website');

  return (
    <section id="projects" className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Title */}
        <h2 className="text-[20px] sm:text-[22px] font-normal text-black mb-8 lg:mb-10">
          04/ Projects
        </h2>

        {/* Huge Faded Background Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-2 lg:right-8 top-4 text-[110px] sm:text-[165px] lg:text-[220px] font-black italic leading-[0.82] tracking-tight text-[#F1F3F5] z-0"
        >
          Projects
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-6">
          {/* Left Category Tabs */}
          <div className="w-full lg:w-[270px] shrink-0">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  className={`w-full text-left px-4 py-4 text-[18px] sm:text-[20px] border-b border-[#9CA3AF] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ECEEF1] to-transparent text-black font-normal'
                      : 'text-[#8B8F96] font-light hover:text-black hover:bg-[#F8F9FA]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Interactive Expanding Pill Gallery */}
          <div className="flex-1 flex items-center gap-2 sm:gap-3.5 h-[230px] sm:h-[310px] lg:h-[340px]">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  layout
                  onClick={() => setActiveId(cat.id)}
                  aria-label={`View ${cat.label}`}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  className={`relative h-full overflow-hidden cursor-pointer focus:outline-none group ${
                    isActive
                      ? 'flex-[4.4] rounded-[26px] shadow-[0_12px_32px_rgba(0,0,0,0.08)]'
                      : 'flex-[1] rounded-full opacity-95 hover:opacity-100'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {!isActive && (
                    <span className="sr-only">{cat.label}</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

