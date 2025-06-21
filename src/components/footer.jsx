import React from 'react';
import logo from '../assets/logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 lg:px-20 pt-16 pb-8 font-poppins">
      <div className="max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
       <div>
  <img src={logo} alt="Logo" className="w-[180px] sm:w-[220px] lg:w-[266px] h-auto object-contain" />
  <p className="text-gray-40 leading-7 mt-4 max-w-[280px] ">
    A new way to make the payments<br/>
     easy, reliable and secure.
  </p>
</div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[clamp(16px,1.5vw,18px)] font-semibold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2 text-[clamp(14px,1.2vw,16px)]">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-[clamp(16px,1.5vw,18px)] font-semibold mb-4">Community</h3>
          <ul className="text-gray-400 space-y-2 text-[clamp(14px,1.2vw,16px)]">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-[clamp(16px,1.5vw,18px)] font-semibold mb-4">Partner</h3>
          <ul className="text-gray-400 space-y-2 text-[clamp(14px,1.2vw,16px)]">
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
{/* Divider inside the container */}
<div className="max-w-[1170px] mx-auto">
  <div className="border-t border-gray-800 my-10" />
</div>

      {/* Bottom Bar */}
      <div className="max-w-[1170px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-[clamp(13px,1.2vw,15px)] text-center sm:text-left">
          © 2021 HooBank. All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-6">
          <img src={instagram} alt="Instagram" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <img src={facebook} alt="Facebook" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <img src={linkedin} alt="LinkedIn" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
