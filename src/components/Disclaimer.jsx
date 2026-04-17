import React, { useState } from "react";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col border border-brand-blue/30 rounded-lg overflow-hidden bg-[#0F172A]/30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-brand-blue flex items-center justify-center">
              <span className="text-brand-blue text-xs font-bold">i</span>
            </div>
            <span className="text-white font-semibold text-sm">
              Important Notes & Disclaimers
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="p-4 border-t border-brand-blue/20 bg-brand-black/40">
            <p className="text-xs text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Disclaimer;
