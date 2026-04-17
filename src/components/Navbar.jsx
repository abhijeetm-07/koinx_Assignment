import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[72px] bg-brand-black flex items-center py-2 px-10 lg:px-20 border-b border-nav-border sticky top-0 z-50">
      {/* Left Container: Logo + How it works */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-white">
            Koin<span className="text-orange-500 font-black">X</span>
            <span className="text-[10px] align-top ml-0.5">®</span>
          </span>
        </div>

        {/* How it works with Tooltip */}
        <div className="relative group flex items-center h-full">
          <span className="text-brand-blue text-sm font-medium underline underline-offset-4 cursor-help">
            How it works?
          </span>
          {/* Tooltip Content */}
          <div className="absolute top-[30px] left-0 w-72 p-4 bg-brand-card border border-brand-border rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <p className="text-[11px] text-gray-400 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to push anything else to the right if needed */}
      <div className="flex-grow"></div>
    </nav>
  );
};

export default Navbar;
