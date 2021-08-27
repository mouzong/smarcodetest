import React from "react";

const SectionOne = () => {
  return (
    <div className="flex flex-row  px-40">
      <h1 className="text-9xl w-4/6 bg-yellow-400 h-screen">Section 1</h1>
      <div className="flex w-2/6 bg-white flex-col">
        <div className="h-1/2 bg-green-200 ml-10 mb-5">section11</div>
        <div className="h-1/2 bg-red-300 ml-10 mt-5">section12</div>
      </div>
    </div>
  );
};

export default SectionOne;
