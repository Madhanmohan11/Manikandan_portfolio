import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  variant?: 'light' | 'darkPill';
  className?: string;
}

interface SocialItem {
  name: string;
  href: string;
  target?: string;
  icon: React.ReactNode;
}

const socialItems: SocialItem[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.21 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    target: '_blank',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[19px] h-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[21px] h-[21px] fill-current" aria-hidden="true">
        <path d="M9.7 11.35C10.56 10.94 11.04 10.17 11.04 9.15C11.04 7.12 9.52 6.3 7.36 6.3H2V17.7H7.57C9.89 17.7 11.55 16.58 11.55 14.37C11.55 12.91 10.84 11.79 9.7 11.35ZM4.45 8.18H7.1C8.14 8.18 8.75 8.63 8.75 9.48C8.75 10.37 8.11 10.8 7.05 10.8H4.45V8.18ZM7.32 15.82H4.45V12.58H7.38C8.55 12.58 9.18 13.09 9.18 14.16C9.18 15.27 8.46 15.82 7.32 15.82ZM19.55 8.35H14.55V6.9H19.55V8.35ZM17.15 9.6C14.35 9.6 12.55 11.62 12.55 14.08C12.55 16.69 14.23 18.2 17.1 18.2C19.25 18.2 20.67 17.15 21.18 15.32H19.04C18.77 16.05 18.02 16.48 17.18 16.48C15.81 16.48 14.95 15.65 14.91 14.38H21.35C21.48 11.67 20.06 9.6 17.15 9.6ZM14.96 12.88C15.13 11.82 15.92 11.18 17.07 11.18C18.23 11.18 18.93 11.85 19.05 12.88H14.96Z" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    href: 'tel:+919345510110',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[19px] h-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 4.5a5 5 0 0 1 5 5" />
        <path d="M14.5 8a1.5 1.5 0 0 1 1.5 1.5" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919345510110',
    target: '_blank',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[19px] h-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-12.56 7.47L3 20.5l1.62-5.13A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M9.4 8.7c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.4.5c-.1.1-.1.3 0 .5.4.7 1 1.4 1.8 1.9.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .4-.4.9-.9 1.1-.7.3-1.8.3-3.2-.4-1.6-.8-3-2.2-3.9-3.9-.7-1.4-.7-2.5-.3-3.1z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:manikandan.uiux@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[19px] h-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    ),
  },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'light',
  className = '',
}) => {
  const isPill = variant === 'darkPill';

  const content = (
    <div
      className={`flex flex-wrap items-center gap-3 sm:gap-3.5 ${
        isPill ? 'justify-center' : ''
      } ${className}`}
    >
      {socialItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target={item.target}
          rel={item.target ? 'noopener noreferrer' : undefined}
          aria-label={item.name}
          title={item.name}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`inline-flex items-center justify-center transition-colors duration-200 ${
            isPill
              ? 'w-11 h-11 rounded-[10px] bg-white text-black hover:bg-neutral-200'
              : 'w-11 h-11 rounded-[12px] bg-white text-black border border-[#1A1A1A] hover:bg-black hover:text-white'
          }`}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );

  if (isPill) {
    return (
      <div className="inline-flex items-center justify-center bg-black rounded-[20px] px-4 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
        {content}
      </div>
    );
  }

  return content;
};

