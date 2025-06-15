import React from 'react';
import bill from '../assets/bill.png';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Payment = () => {
  return (
    <div
      className="absolute flex rounded-[9.12px] bg-transparent"
      style={{
        width: '1170px',
        height: '455px',
        top: '1560px',
        left: '135px',
      }}
    >
      {/* Left: Image */}
      <div
        className="flex-shrink-0 flex justify-center items-center"
        style={{ width: '530px', height: '455px' }}
      >
        <img
          src={bill}
          alt="bill"
          className="max-w-full max-h-full object-contain"
        />
      </div>

     
      <div className="flex flex-col justify-center flex-1 px-10">
        <p
  className="text-white mb-5"
  style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '160%',
    letterSpacing: '1%',
    maxWidth: '470px',
  }}
>
  Easily control your
  <br />
  billing & invoicing.
</p>

        <p className="text-white/70  font-poppins text-[18px] leading-[160%] tracking-[0.01em] max-w-[470px]">
  Elit enim sed massa etiam. Mauris eu adipiscing
  <br />
  ultrices ametodio aenean neque. Fusce ipsum orci
  <br />
  rhoncus aliporttitor integer platea placerat.
</p>


<div className="absolute flex gap-[24px] top-[400px] ">
  <img
    src={apple}
    alt="apple store"
    className="w-[128.6px] h-[42.05px] object-contain cursor-pointer mt-0.5"
  />
  <img
    src={google}
    alt="google play"
    className="w-[144px] h-[43px] object-contain cursor-pointer"
  />
</div>

      </div>
    </div>
  );
};

export default Payment;
