import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-12 px-6 text-center">
      <div className="max-w-[960px] mx-auto">
        <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold italic uppercase tracking-tight text-black">
          GOOD IDEAS START WITH A CONVERSATION.
        </h3>
        <p className="text-[15px] sm:text-[16px] font-light text-[#374151] mt-2">
          Let&apos;s turn your ideas into impactful visual experiences!
        </p>
        <p className="text-[14px] sm:text-[15px] font-light italic text-[#6B7280] mt-1">
          Available for creative collaborations, freelance projects &amp; global opportunities.
        </p>
      </div>
    </footer>
  );
};

