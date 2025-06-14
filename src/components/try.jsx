import React from 'react';

const Try = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '1170px',
        height: '293px',
        top: '3790px',
        left: '130px',
        borderRadius: '20px',
        background:
          'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
        boxSizing: 'border-box',
      }}
    >
      {/* "Let’s try our service now!" */}
      <div
        style={{
          position: 'absolute',
          width: '670px',
          height: '67px',
          top: '72px',   // 3862 - 3790 = 72px relative to container
          left: '102px', // 232 - 130 = 102px relative to container
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '140%',
          letterSpacing: '0%',
          color: 'white',
          margin: 0,
        }}
      >
        <p style={{ margin: 0 }}>Let’s try our service now!</p>
      </div>

 <div>
        <button
          style={{
            position: 'absolute',
            width: '170px',
            height: '64px',
            top: '123px',  // 3913 - 3790 = 123px relative to container
            left: '905px', // 1035 - 130 = 905px relative to container
            borderRadius: '10px',
            background:
              'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
            border: 'none',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Get Started
        </button>
      </div>
      <div
        style={{
          position: 'absolute',
          width: '445px',
          height: '58px',
          top: '163px',   
          left: '102px',  
          color: 'white',
          margin: 0,
          fontSize: '18px',
          lineHeight: '160%',
        

        }}
      >
        <p style={{ margin: 0,fontWeight:400,color:'#FFFFFFB2' }}>
          Everything you need to accept card payments
          <br />
          and grow your business anywhere on the planet.
        </p>
      </div>

    </div>
  );
};

export default Try;
