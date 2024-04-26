import React, { useState } from "react";
import burgerMenu from "../../../assets/navbar/burger-menu.svg";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Products" },
    { id: 2, text: "Solutions" },
    { id: 3, text: "Pricing" },
    { id: 4, text: "Resource" },
    { id: 5, text: "Log in" },
  ];
  return (
    <header className=" flex justify-between items-center w-full sm:max-w-[1440px] h-[67px] sm:h-24 p-4 sm:py-6 sm:px-20 text-[#78350F]">
      {/* Logo */}
      <div className=" w-[102px] h-[35px] text-center text-3xl font-bold ">
        Collers
      </div>
      {/* Desktop Navigation */}
      <menu className="hidden sm:flex sm:justify-center sm:items-center gap-4 font-medium">
        {navItems.map((item) => (
          <button key={item.id} className=" px-2 py-3">
            {item.text}
          </button>
        ))}
        <button className=" border-2 border-[#78350F] w-[149px] h-12 rounded-lg p-3">
          Sign up now
        </button>
      </menu>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block sm:hidden">
        {nav ? <img src={burgerMenu} alt="menu-logo-close" className="[transform:rotateX(180deg)]" /> : <img src={burgerMenu} alt="menu-logo-open" /> }
      </div>
      {/* Mobile Navigation Menu */}
      <menu
        className={
          nav
            ? "fixed sm:hidden top-16 w-full left-0 bg-[#FEF3C7] ease-in-out duration-500 -z-10"
            : "fixed top-[-100%] left-0 w-full ease-in-out duration-500 -z-10"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            className="p-4 border-b rounded-xl w-full text-center hover:bg-[#00df9a] duration-500 cursor-pointer"
          >
            {item.text}
          </button>
        ))}
        <button className=" border-2 border-[#78350F] w-[149px] h-12 rounded-lg p-3 mx-[calc(50%-74.5px)]">
          Sign up now
        </button>
      </menu>
    </header>
  );
};

export default Navbar;
