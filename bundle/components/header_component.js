import React from "react";

function HeaderComponent() {
  return (
    <div className="flex justify-between  items-center align-end flex-row px-40">
      <div className="font-sans font-bold">
        <h1>Blog Gem</h1>
      </div>
      <div className="h-10 bg-gray-100 w-80 font-thin text-center self-center pt-2 text-sm">
        Ads 570x76
      </div>
    </div>
  );
}

export default HeaderComponent;
