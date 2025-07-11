import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-7xl font-extrabold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">Page Not Found</h2>
        <p className="text-purple-700 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoPageFound;
