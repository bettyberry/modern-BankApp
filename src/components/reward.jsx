import React from 'react';
import Shield from '../assets/Shield.svg';
import Star from '../assets/Star.svg';
import Send from '../assets/Send.svg';

const Reward = () => {
  const features = [
    {
      title: 'Rewards',
      description: (
        <>
          The best credit cards offer some tantalizing <br /> combinations of
          promotions and prizes
        </>
      ),
      icon: Star,
    },
    {
      title: '100% Secured',
      description: (
        <>
          We take proactive steps make sure your <br />
          information and transactions are secure.
        </>
      ),
      icon: Shield,
    },
    {
      title: 'Balance Transfer',
      description: (
        <>
          A balance transfer credit card can save <br />
          you a lot of money in interest charges.
        </>
      ),
      icon: Send,
    },
  ];

  return (
    <section className="bg-[#00040f] text-white font-poppins px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-[36px] sm:text-[48px] font-semibold leading-[160%] mb-4">
            You do the business, <br /> we'll handle the money.
          </h1>
          <p className="text-white/70 text-[16px] sm:text-[18px] leading-[170%] font-abel mb-6">
            With the right credit card, you can improve your financial life by
            <br />
            building credit, earning rewards and saving money. But with hundreds
            <br />
            of credit cards on the market.
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

        {/* Right Side: Feature Cards */}
        <div className="flex-1 max-w-md flex flex-col gap-6">
          {features.map((feature, index) => {
            const hasBg = index === 1;

            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-[10px] ${
                  hasBg ? 'bg-white/5 border border-white/10' : ''
                }`}
              >
                {/* Icon wrapper */}
                <div className="relative w-[64px] h-[64px] flex items-center justify-center mt-1">
                  <div className="absolute w-full h-full rounded-full bg-white/10 z-0" />
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-[32px] h-[32px] z-10"
                  />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[14px] text-white/70 leading-[160%]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reward;
