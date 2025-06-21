import React from 'react';
import card from '../assets/card.png';

const Deal = () => {
  return (
    <section className="bg-[#00040f] text-white px-4 sm:px-8 lg:px-16 py-20 font-poppins">
      <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-[36px] sm:text-[48px] font-semibold leading-[160%] mb-4">
            Find a better card deal <br /> in few easy steps
          </h2>

          <p className="text-[16px] leading-[130%] opacity-70 max-w-md mb-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
          </p>

          <button
            className="w-[170px] h-[64px] rounded-[10px] text-black font-bold text-[16px]"
            style={{
              background:
                'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-md w-full">
          <img
            src={card}
            alt="card"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Deal;
