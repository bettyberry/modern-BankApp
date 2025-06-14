import React from 'react';

const Reward = () => {
  const features = [
    {
      title: 'Rewards',
      description: (
        <>
          The best credit cards offer some tantalizing <br /> combinations 
          of promotions and prizes
        </>
      ),
    },
    {
      title: '100% Secured',
      description: (
        <>
          We take proactive steps make sure your <br />
          information and transactions are secure.
        </>
      ),
    },
    {
      title: 'Balance Transfer',
      description: (
        <>
          A balance transfer credit card can save <br />
          you a lot of money in interest charges.
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: '1113px',
        left: '135px',
        width: '1170px',
        height: '383px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily: 'Poppins, sans-serif',
        color: '#fff',
        padding: '0 20px',
        
        boxSizing: 'border-box',
      }}
    >
      
      <div style={{ flex: 1, maxWidth: '622px' }}>
        <h1
          style={{
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '160%',
            letterSpacing: '1%',
            margin: 0,
          }}
        >
          You do the business,<br />
          we'll handle the money.
        </h1>

        <p
          style={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '130%',
            marginTop: '16px',
            marginBottom: '24px',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          With the right credit card, you can improve your financial life by<br />
          building credit, earning rewards and saving money. But with hundreds<br />
          of credit cards on the market.
        </p>

        <button
          style={{
            width: '170px',
            height: '64px',
            borderRadius: '10px',
            background:
              'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
            color: '#000',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            marginBottom: '40px',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right Side Cards */}
      <div
        style={{
          flex: 1,
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: '18px',
                margin: '0 0 10px 0',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontWeight: 400,
                fontSize: '14px',
                margin: 0,
                opacity: 0.7,
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
