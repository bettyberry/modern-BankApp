import React from 'react';

const Try = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16">
      <div
        className="w-full max-w-[1170px] mx-auto rounded-[20px] text-white px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        style={{
          background:
            'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
        }}
      >
        {/* Text Section */}
        <div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[140%] mb-4 font-poppins">
            Let’s try our service now!
          </h2>
          <p className="text-white/70 text-[16px] sm:text-[18px] leading-[160%] max-w-[500px] font-poppins">
            Everything you need to accept card payments
            <br className="hidden sm:block" />
            and grow your business anywhere on the planet.
          </p>
        </div>

        {/* Button */}
        <button
          className="w-[170px] h-[64px] rounded-[10px] text-black text-[16px] font-bold"
          style={{
            background:
              'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Try;
