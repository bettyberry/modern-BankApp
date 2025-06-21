import React from 'react';
import Discount from '../assets/Discount.svg';
import robot from '../assets/robot.png';
import arrow from '../assets/arrow.svg';

const Hero = () => {
  return (
    <section className="relative bg-[#00040f] font-poppins rounded-[10px] mb-12 max-w-[1170px] mx-auto px-4 pt-20 pb-28">

      {/* Discount Banner */}
      <div className="flex items-center bg-gradient-to-r from-[#272727] to-[#11101D] rounded-[10px] w-full max-w-md h-10 text-white text-[18px] font-normal mb-10 sm:mb-12">
        <img src={Discount} alt="Discount" className="w-8 h-8 ml-2" />
        <span className="ml-3">20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

        {/* Text Block */}
        <div className="flex-1 min-w-0 md:pr-6">
          <h1 className="text-white font-semibold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] mb-4">
            The Next
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text font-semibold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1]">
              Generation
            </h1>
          </div>

          <h1 className="text-white font-semibold text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] whitespace-nowrap mb-6">
            Payment Method.
          </h1>

          <p className="text-white/80 text-[17px] sm:text-[18px] font-normal leading-[1.6] max-w-[480px]">
            Our team of experts uses a methodology to identify <br />
            the credit cards most likely to fit your needs. We <br />
            examine annual percentage rates, annual fees.
          </p>
        </div>

        {/* Robot Image */}
        <div className="flex-shrink-0 w-full md:max-w-[550px] relative mt-10 md:mt-0">
          <img
            src={robot}
            alt="robot"
            className="w-full max-w-[550px] h-auto object-contain relative z-10"
          />

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-2/5 h-1/3 blue__gradient rounded-lg" />
          <div className="absolute bottom-40 left-10 w-4/5 h-4/5 rounded-full white__gradient opacity-20" />
          <div className="absolute bottom-20 right-10 w-1/2 h-1/2 blue__gradient rounded-lg" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-between max-w-[1150px] mx-auto mt-20 gap-6">
        <div className="flex items-center gap-3">
          <h4 className="text-white font-bold text-[2rem] sm:text-[2.5rem] uppercase leading-[1.3]">3800+</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[1rem] sm:text-[1.3rem] uppercase">
            User Active
          </span>
        </div>
        <div className="flex items-center gap-3">
          <h4 className="text-white font-bold text-[2rem] sm:text-[2.5rem] uppercase leading-[1.3]">230+</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[1rem] sm:text-[1.3rem] uppercase">
            Trusted by Company
          </span>
        </div>
        <div className="flex items-center gap-3">
          <h4 className="text-white font-bold text-[2rem] sm:text-[2.5rem] uppercase leading-[1.3]">$230M</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[1rem] sm:text-[1.3rem] uppercase">
            Transaction
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
