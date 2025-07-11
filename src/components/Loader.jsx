import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-200">
      <div className="flex flex-col items-center space-y-6">
        {/* Glowing Spinner */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-t-4 border-b-4 border-[#883377] animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#88337733] blur-xl animate-ping"></div>
        </div>

        {/* Fancy Text */}
        <p className="text-xl font-semibold text-[#883377] animate-pulse tracking-wide">
          Just a moment...
        </p>
      </div>
    </div>
  );
};

export default Loader;
