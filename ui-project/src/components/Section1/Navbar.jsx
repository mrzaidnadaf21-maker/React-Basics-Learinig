import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-18 py-8 ">
      <h4 className="bg-black text-white px-6 py-2 rounded-full uppercase">
        Target Audience
      </h4>
      <button className="bg-gray-100 px-6 py-2 uppercase rounded-full tracking-wider text-sm">
        Digital banking platform
      </button>
    </div>
  );
};
export default Navbar;
