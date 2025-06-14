import React from 'react';
import Discount from '../assets/Discount.svg';
import robot from '../assets/robot.png';

const Hero = () => {
  return (
    <div
      style={{ position: 'relative', height: '900px', backgroundColor: '#00040f', fontFamily: 'Poppins, sans-serif' }}
    >
     
      <p
        style={{
          position: 'absolute',
          width: '380px',
          height: '32px',
          borderRadius: '10px',
          top: '253px',
          left: '145px',
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
          color: 'white',
        }}
      >
        <img src={Discount} alt="Discount" style={{ marginRight: '8px' }} />
        20% DISCOUNT FOR 1 MONTH ACCOUNT
      </p>

      <p
        style={{
          position: 'absolute',
          width: '670px',
          height: '303px',
          top: '301px',
          left: '135.41px',
          fontSize: '72px',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '1%',
          color: 'white',
        }}
      >
        The Next
        <br />
        <span style={{ color: '#00FFFF' }}>Generation</span>
        <br />
        Payment Method
      </p>

      {/* Subtext */}
      <p
        style={{
          position: 'absolute',
          top: '620px',
          left: '135.41px',
          width: '600px',
          fontSize: '18px',
          lineHeight: '1.5',
          fontWeight: 'normal',
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        Our team of experts uses a methodology to identify <br />
        the credit cards most likely to fit your needs.
        <br />
        We examine annual percentage rates, annual fees.
      </p>

      <div
        style={{
          position: 'absolute',
          top: '127px',
          left: '771.41px',
          width: '669px',
          height: '674px',
          background:
            'linear-gradient(100deg, rgba(188, 165, 255, 0) 0%, #214D76 100%)',
          border: '1px solid #000000',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(123px)',
          WebkitBackdropFilter: 'blur(123px)',
        }}
      >
        <img
          src={robot}
          alt="robot"
          style={{
            width: '669px',
            height: '674px',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Stats Section */}
      <div
        style={{
          position: 'absolute',
          top: '880px',
          left: '153.19px',
          width: '1151.81px',
          height: '52.82px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {/* User Active */}
        <span className="flex items-center gap-2">
          <strong className="text-white font-bold text-[20.45px] leading-[130%] uppercase">
            3800+
          </strong>
          <span
            style={{
              background:
                'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',
            }}
            className="font-poppins font-normal text-[20.45px] leading-[130%] tracking-[0px] uppercase px-2 py-0.5"
          >
            User Active
          </span>
        </span>

        {/* Trusted By Company */}
        <span className="flex items-center gap-2">
          <strong className="text-white font-bold text-[20.45px] leading-[130%] uppercase">
            230+
          </strong>
          <span
            style={{
              background:
                'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',
            }}
            className="font-poppins font-normal text-[20.45px] leading-[130%] tracking-[0px] uppercase px-2 py-0.5"
          >
            Trusted By Company
          </span>
        </span>

        <span className="flex items-center gap-2">
          <strong className="text-white font-bold text-[20.45px] leading-[130%] uppercase">
            $230M+
          </strong>
          <span
            style={{
              background:
                'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',
            }}
            className="font-poppins font-normal text-[20.45px] leading-[130%] tracking-[0px] uppercase px-2 py-0.5"
          >
            Transaction
          </span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
