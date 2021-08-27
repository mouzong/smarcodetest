import React from "react";

const HeaderMenu = () => {
  return (
    <nav className="flex pt-6 justify-between align-end flex-row px-40">
      <div className="flex-1 flex-row ">
        <ul className="flex flex-row ">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Single Post</li>
          <li className="p-4">Category</li>
          <li className="p-4">Contact Us</li>
        </ul>
      </div>
      <div className="">
        <input className="" />
      </div>
    </nav>
  );
};

export default HeaderMenu;
