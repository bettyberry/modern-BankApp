import React from 'react';
import logo from '../assets/logo.svg';


const Navbar = () => {
  return (
    <div className="w-[1170px] h-[32px] mt-[30px] ml-[135.41px] flex items-center justify-between bg-[#00040f] text-white">
    
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[124px] h-[32px] object-contain"
        />
    
      </div>

     <div className="flex gap-8 font-poppins font-normal text-[16px] leading-[130%] tracking-[0]">
  <p className="hover:text-cyan-400 cursor-pointer">Home</p>
  <p className="hover:text-cyan-400 cursor-pointer">About Us</p>
  <p className="hover:text-cyan-400 cursor-pointer">Features</p>
  <p className="hover:text-cyan-400 cursor-pointer">Solution</p>
</div>

    </div>
    
  );
 
};

export default Navbar;