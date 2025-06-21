import React from 'react';
import logo from '../assets/logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 lg:px-20 pt-16 pb-8 font-poppins">
      <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="col-span-1">
          <img src={logo} alt="Logo" className="w-[266px] h-[72px] object-contain" />
          <p className="text-gray-400 text-[18px] leading-8 mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4">Community</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4">Partner</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10" />

      {/* Bottom Bar */}
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          Copyright © 2021 HooBank. All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <img src={instagram} alt="instagram" className="w-5 h-5 cursor-pointer" />
          <img src={facebook} alt="facebook" className="w-5 h-5 cursor-pointer" />
          <img src={twitter} alt="twitter" className="w-5 h-5 cursor-pointer" />
          <img src={linkedin} alt="linkedin" className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
