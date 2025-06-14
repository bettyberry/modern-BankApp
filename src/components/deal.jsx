import React from 'react';
import card from '../assets/card.png';

const Deal = () => {
  return (
    <>
      {/* Left container with text and button */}
      <div
        className="absolute text-white"
        style={{
          width: '657px', // 792 - 135 (space before image)
          height: '449px',
          top: '2271.88px',
          left: '135px',
        }}
      >
        <div className="px-8 pt-5">
          <p
            className="font-semibold text-[48px] leading-[160%]"
            style={{ width: '570px', height: '154px' }}
          >
            Find a better card deal
            <br />
            in few easyy steps
          </p>

          <p
            className="text-[16px] leading-[130%] opacity-70 mt-5"
            style={{ width: '500px', height: '62px' }}
          >
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
          </p>

          <button
            className="mt-10 font-bold text-[16px] text-black"
            style={{
              width: '170px',
              height: '64px',
              borderRadius: '10px',
              background:
                'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
            }}
          >
            Get Started
          </button>
        </div>
      </div>

    
      <img
        src={card}
        alt="card"
        style={{
          position: 'absolute',
          width: '513px',
          height: '449px',
          top: '2271.88px',
          left: '792px',
        }}
      />
    </>
  );
};

export default Deal;
