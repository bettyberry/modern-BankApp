import React from 'react';
import bill from '../assets/bill.png';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Payment = () => {
  return (
    <div
      className="absolute flex rounded-[9.12px]"
      style={{
        width: '1170px',
        height: '455px',
        top: '1656px',
        left: '135px',
      }}
    >
    
      <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '530px', height: '455px' }}>
        <img
          src={bill}
          alt="bill"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 px-10">
        <p className="text-white font-semibold text-3xl leading-snug mb-5" style={{ maxWidth: '470px',fontWeight:600 }}>
          Easily control your<br />billing & invoicing.
        </p>
        <p className="text-white text-opacity-70 text-base leading-relaxed mb-10" style={{ maxWidth: '470px' }}>
          Elit enim sed massa etiam. Mauris eu adipiscing<br />
          ultrices ametodio aenean neque. Fusce ipsum orci<br />
          rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex gap-6">
          <img src={apple} alt="apple store" className="w-12 h-12 cursor-pointer" />
          <img src={google} alt="google play" className="w-12 h-12 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
