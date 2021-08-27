import React from "react";

const HeaderMenu = () => {
  return (
    <nav className="flex items-center justify-between align-end flex-row px-40">
      <div className="flex-1 flex-row ">
        <ul className="flex flex-row font-light">
          <li className="p-4 pl-0">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Single Post</li>
          <li className="p-4">Category</li>
          <li className="p-4">Contact Us</li>
        </ul>
      </div>
      <div className="flex items-center py-4 border-b-2 border-gray-100 pt-5 font-light">
        <input type="text" className="font-light" placeholder="Search..." />
        <svg
          className="w-6 h-6 font-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default HeaderMenu;
