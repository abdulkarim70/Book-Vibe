import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl shadow hover:bg-indigo-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;