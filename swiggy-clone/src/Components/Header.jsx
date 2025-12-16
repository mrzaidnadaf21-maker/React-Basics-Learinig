import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
const Header = () => {
  const [toggle, setToogle] = useState(false);

  const showSideMenu = () => {
    setToogle(true);
  };

  const hideSideMenu = () => {
    setToogle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },

    {
      icon: <CiDiscount1 />,
      name: "offer",
      sup: "new",
    },

    {
      icon: <IoMdHelpCircleOutline />,
      name: "Help",
    },

    {
      icon: <MdLogin />,
      name: "Sign in",
    },

    {
      icon: <MdShoppingCart />,
      name: "Cart",
      sup: 0,
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="flex m-3 justify-center">
            <input
              className=" p-2 border border-gray-400  mt-10 rounded-lg px-4 py-2 w-90 "
              type="text"
              placeholder="Search for area, Street name"
            />
          </div>

          <div className="flex justify-center items-center ">
            <h3 className="flex items-start gap-3 mt-7 border border-gray-400 rounded-lg px-4 py-4 w-[70%] font-bold">
              <MdMyLocation className=" text-2xl mt-1" />

              <div className="flex flex-col">
                <span>Get Current Location,</span>
                <span className="text-gray-600 font-normal">using GPS</span>
              </div>
            </h3>
          </div>
        </div>
      </div>

      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-[100px]">
            <img src="images/Swiggy-logo.png" className="w-full" alt="" />
          </div>

          <div className="">
            <span className="font-bold border-b border-b-[3px]">Pune</span>{" "}
            Maharashtra,India{" "}
            <RxCaretDown
              fontSize={25}
              onClick={showSideMenu}
              className="inline font-bold text-[#fc8019] cursor-pointer"
            />
          </div>

          <nav className="flex list-none gap-8 ml-auto font-semibold text-[18px]">
            {links.map((links, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                >
                  {links.icon}
                  {links.name}
                  <sup> {links.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
