import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate()
  return (
    <div className="h-[10vh] bg-[#b046a2] text-white flex items-center justify-between px-6 md:px-10 shadow-md">
      {/* Left Side - Logo/Title */}
      <h1 className="text-2xl font-bold tracking-wide">QuoteHub</h1>

      {/* Right Side - Controls */}
      <div className="flex items-center gap-4 w-full max-w-[65%] justify-end">
        {/* Search Input */}
        <div className="flex-grow max-w-[300px]">
          <input
            type="text"
            placeholder="Search quotes..."
            className="w-full p-2 px-3 rounded-md text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Add Quote Button */}
        <button onClick={()=>{navigate('/home/create')}} className="bg-white text-[#cb4bb2] font-semibold px-4 py-2 rounded-md hover:bg-purple-100 transition duration-200">
          Add New Quote
        </button>

        {/* Logout Button */}
        <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#cd52b4] transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
