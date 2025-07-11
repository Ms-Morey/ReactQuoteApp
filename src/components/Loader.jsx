import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Dots */}
        <div className="flex space-x-3">
          <span className="w-4 h-4 bg-[#883377] rounded-full animate-bounce [animation-delay:0.1s]"></span>
          <span className="w-4 h-4 bg-[#aa5599] rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-4 h-4 bg-[#cc77bb] rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>

        {/* Text */}
        <p className="text-lg font-semibold text-[#883377] tracking-wider animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default Loader;
