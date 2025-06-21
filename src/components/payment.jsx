import React from 'react';
import bill from '../assets/bill.png';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Payment = () => {
  return (
    <section className="bg-transparent px-4 sm:px-8 lg:px-16 py-20 font-poppins">
      <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full max-w-[600px] flex justify-center">
          <img
            src={bill}
            alt="bill"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center items-start flex-1">
          <h2 className="text-white font-semibold text-[36px] sm:text-[48px] leading-[160%] mb-4 max-w-[470px] whitespace-normal">
            Easily control your <br /> billing & invoicing.
          </h2>

          <p className="text-white/70 text-[16px] sm:text-[18px] leading-[160%] tracking-[0.01em] mb-6 max-w-[470px]">
            Elit enim sed massa etiam. Mauris eu adipiscing <br />
            ultrices ametodio aenean neque. Fusce ipsum orci <br />
            rhoncus aliporttitor integer platea placerat.
          </p>

          <div className="flex gap-6 mt-4">
            <img
              src={apple}
              alt="apple store"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
            <img
              src={google}
              alt="google play"
              className="w-[144px] h-[43px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
