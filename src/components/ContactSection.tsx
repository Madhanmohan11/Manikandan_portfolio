import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-[#F2F4F6] pt-14 lg:pt-16 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Large Faded Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-2 lg:right-8 top-24 sm:top-20 text-[74px] sm:text-[120px] lg:text-[158px] font-black italic leading-[0.85] tracking-tight text-[#E4E7EB] z-0"
        >
          Let&apos;s Connect
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Section Indicator */}
          <h2 className="text-[20px] sm:text-[22px] font-normal text-black">
            07/ Let&apos;s Connect
          </h2>

          {/* Main Invite */}
          <h3 className="text-[24px] sm:text-[28px] lg:text-[31px] font-normal text-black mt-5 leading-snug">
            Have a project in mind? Let&apos;s create something amazing together.
          </h3>

          <p className="text-[15px] sm:text-[16px] font-light text-[#4B5563] mt-2">
            I&apos;m always open to exciting opportunities, creative collaborations, freelance
            projects, and connecting with people around the world.
          </p>

          {/* Contact Details Heading */}
          <h4 className="text-[18px] sm:text-[20px] font-bold text-black mt-8 mb-6">
            Contact Details
          </h4>

          {/* 3-Column Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pb-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="pt-1 text-black shrink-0" aria-hidden="true">
                <svg
                  viewBox="0 0 36 36"
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="8" width="24" height="18" rx="3" />
                  <path d="M5 10l11 8 11-8" />
                  <circle cx="27.5" cy="24.5" r="5" fill="#F2F4F6" stroke="currentColor" />
                  <text
                    x="27.5"
                    y="27"
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="700"
                    fill="currentColor"
                    stroke="none"
                  >
                    @
                  </text>
                </svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-black">Email Address</div>
                <div className="text-[15px] font-light text-[#374151] mt-0.5">
                  manikandan.uiux@gmail.com
                </div>
                <a
                  href="mailto:manikandan.uiux@gmail.com"
                  className="inline-block mt-1 text-[14px] italic underline underline-offset-4 text-[#EA580C] hover:text-[#C2410C] transition-colors"
                >
                  Send an Email
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-4">
              <div className="pt-1 text-black shrink-0" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M27 21.5v3.6a2.4 2.4 0 0 1-2.62 2.4 23.7 23.7 0 0 1-10.35-3.68 23.4 23.4 0 0 1-7.2-7.2A23.7 23.7 0 0 1 3.15 6.22 2.4 2.4 0 0 1 5.54 3.6h3.6a2.4 2.4 0 0 1 2.4 2.06 15.4 15.4 0 0 0 .84 3.37 2.4 2.4 0 0 1-.54 2.53l-1.52 1.52a19.2 19.2 0 0 0 7.2 7.2l1.52-1.52a2.4 2.4 0 0 1 2.53-.54 15.4 15.4 0 0 0 3.37.84A2.4 2.4 0 0 1 27 21.5z" />
                  <path d="M18.5 6.5a6 6 0 0 1 6 6" />
                  <path d="M18.5 10.2a2.3 2.3 0 0 1 2.3 2.3" />
                </svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-black">Phone Number</div>
                <div className="text-[15px] font-light text-[#374151] mt-0.5">+91 93455 10110</div>
                <a
                  href="tel:+919345510110"
                  className="inline-block mt-1 text-[14px] italic underline underline-offset-4 text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  Call Me
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="pt-1 text-black shrink-0" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M27.5 15.5a11.5 11.5 0 0 1-17 10.1L4 27.5l2.1-6.7A11.5 11.5 0 1 1 27.5 15.5z" />
                  <path d="M12.3 11.3c.25-.5.5-.5.8-.5h.7c.25 0 .5.15.65.5l.9 2.15c.1.25.08.5-.12.75l-.55.65c-.15.18-.18.4 0 .65.6 1 1.4 1.9 2.45 2.55.25.15.48.12.68-.05l.8-.65c.25-.2.5-.22.75-.1l2.05.95c.35.18.5.4.5.68v.7c0 .55-.5 1.15-1.2 1.4-.95.35-2.4.35-4.3-.6-2.2-1.1-4.05-3-5.25-5.25-.95-1.9-.95-3.35-.4-4.25z" />
                </svg>
              </div>
              <div>
                <div className="text-[16px] font-bold text-black">WhatsApp</div>
                <div className="text-[15px] font-light text-[#374151] mt-0.5">+91 9345510110</div>
                <a
                  href="https://wa.me/919345510110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[14px] italic underline underline-offset-4 text-[#16A34A] hover:text-[#15803D] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Centered Floating Black Social Pill straddling gray section and white footer */}
      <div className="relative z-20 flex justify-center -mb-24 mt-4">
        <SocialLinks variant="darkPill" />
      </div>
    </section>
  );
};

