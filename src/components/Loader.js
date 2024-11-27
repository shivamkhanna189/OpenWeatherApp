import React from "react";

const Loader = ({ loading }) => {
  return (
    <div
      id="loader"
      className={`fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 ${
        loading ? "" : "hidden"
      }`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
