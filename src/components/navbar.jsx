import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full text-white px-4 py-8 bg-[#00040f]">
      <div className="max-w-[1170px] mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-[124px] h-[32px] object-contain" />

        <ul className="hidden sm:flex items-center font-poppins font-normal text-[16px] leading-[130%]">
          <li className="hover:text-cyan-400 cursor-pointer mr-14">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer mr-14">About Us</li>
          <li className="hover:text-cyan-400 cursor-pointer mr-14">Features</li>
          <li className="hover:text-cyan-400 cursor-pointer">Solution</li>
        </ul>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {toggle && (
        <div className="sm:hidden px-4 mt-4">
          <ul className="flex flex-col font-poppins text-[16px] p-4 rounded-lg bg-[#00040f]">
            <li className="hover:text-cyan-400 cursor-pointer mb-4">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer mb-4">About Us</li>
            <li className="hover:text-cyan-400 cursor-pointer mb-4">Features</li>
            <li className="hover:text-cyan-400 cursor-pointer">Solution</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
