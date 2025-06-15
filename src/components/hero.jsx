import React from 'react';
import Discount from '../assets/Discount.svg';
import robot from '../assets/robot.png';
import arrow from '../assets/arrow.svg';

const Hero = () => {
  return (
    <div className="relative bg-[#00040f] font-poppins rounded-[10px] mb-2 h-[1100px] overflow-hidden">

      {/* Discount Banner */}
      <div
        className="absolute top-[150px] left-[135px] w-[408px] h-[40px] rounded-[10px] flex items-center text-white"
        style={{
          background: "linear-gradient(125.17deg, #272727 0%, #11101D 100%)",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "150%",
        }}
      >
        <img src={Discount} alt="Discount" className="w-[32px] h-[32px]" />
        <span className="ml-2">20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
      </div>

      {/* Headline Section */}
      <div className="absolute top-[200px] left-[135px]">
        {/* Line 1 */}
        <h1
          className="text-white"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '72px',
            lineHeight: '110%',
            letterSpacing: '0.01em',
            marginBottom: '16px',
          }}
        >
          The Next
        </h1>

        {/* Line 2 with button */}
        <div className="flex items-center">
          <h1
            className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '72px',
              lineHeight: '110%',
              letterSpacing: '0.01em',
              marginBottom: '16px',
            }}
          >
            Generation
          </h1>

          {/* Get Started Button lifted a bit above */}
          <div className="ml-4 relative" style={{ top: '-30px' }}>
            <div
              className="w-[140px] h-[140px] rounded-full p-[3px] flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
              }}
            >
              <div
                className="w-full h-full rounded-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #0b0f2c, #00040f)',
                }}
              >
                <div className="flex items-center justify-center">
                  <p
                    className="text-[18px] font-medium"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      background:
                        'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginRight: '4px',
                    }}
                  >
                    Get
                  </p>
                  <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
                </div>
                <p
                  className="text-[18px] font-medium"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    background:
                      'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Started
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Line 3 */}
        <h1
          className="text-white"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '72px',
            lineHeight: '110%',
            letterSpacing: '0.01em',
          }}
        >
          Payment Method.
        </h1>
      </div>

      {/* Description */}
      <p
        className="absolute w-[483px] left-[136px] top-[544px] text-white/80 text-[18px] font-normal leading-[150%]"
      >
        Our team of experts uses a methodology to identify <br />
        the credit cards most likely to fit your needs.
        <br />
        We examine annual percentage rates, annual fees.
      </p>

      {/* Robot Image */}
      <div className="flex-1 flex justify-center items-center my-10 md:my-0 relative">
        <div className="absolute top-[100px] left-[771px] w-[669px] h-[561px]">
          <img src={robot} alt="robot" className="w-full h-full object-contain relative z-[5]" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute top-[750px] left-[153px] z-30 w-[1152px] h-[53px] flex justify-between items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <h4 className="text-white font-bold text-[40px] font-poppins leading-[53px] uppercase">3800+</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[20.45px] uppercase">
            User Active
          </span>
        </span>

        <span className="flex items-center gap-2">
          <h4 className="text-white font-bold text-[40px] font-poppins leading-[53px] uppercase">230+</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[20.45px] uppercase">
            Trusted by Company
          </span>
        </span>

        <span className="flex items-center gap-2">
          <h4 className="text-white font-bold text-[40px] font-poppins leading-[53px] uppercase">$230M</h4>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 text-transparent bg-clip-text text-[20.45px] uppercase">
            Transaction
          </span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
