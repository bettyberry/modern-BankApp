import React from 'react';
import quotes from '../assets/quotes.svg';
import people01 from '../assets/people01.png';
import people02 from '../assets/people02.png';
import people03 from '../assets/people03.png';

const testimonials = [
  {
    id: 1,
    quote:
      'Money is only a tool. It will take \nwherever you wish, but it\nwill not replace you as the\ndriver.',
    name: 'Hermen Jensen',
    role: 'Founder and Leader',
    img: people01,
  },
  {
    id: 2,
    quote:
      'Great service and support. Truly helped me manage my finances better.',
    name: 'Jessica Brown',
    role: 'Product Manager',
    img: people02,
  },
  {
    id: 3,
    quote:
      'I love how intuitive and seamless the experience is. Highly recommend!',
    name: 'Samuel Green',
    role: 'UX Designer',
    img: people03,
  },
];

const TestimonialCard = ({ id, quote, name, role, img }) => (
  <div
    className="p-5"
    style={{
      width: '370px',
      height: '395px',
      boxSizing: 'border-box',
      color: 'white',
      marginRight: '24px',
      background:
        id === 1
          ? 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)'
          : 'transparent',
      borderRadius: id === 1 ? '20px' : '0',
    }}
  >
    <img
      src={quotes}
      alt="quotes"
      style={{
        width: '42.6px',
        height: '27.6px',
        marginBottom: '20px',
      }}
    />
    <p className="text-base opacity-70 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
      {quote}
    </p>

    <div className="flex items-center mt-10 relative" style={{ height: '48px', width: '205px' }}>
      <img
        src={img}
        alt={name}
        style={{
          width: '48px',
          height: '48px',
          position: 'absolute',
          top: '10px',
          left: '0px',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '75px',
          width: '175px',
          height: '32px',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '32px',
          color: '#FFFFFF',
        }}
      >
        {name}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '34px',
          left: '75px',
          width: '140px',
          height: '24px',
          opacity: 0.5,
          fontSize: '16px',
          lineHeight: '100%',
          color: '#FFFFFF',
        }}
      >
        {role}
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div
      className="absolute text-white font-poppins"
      style={{
        width: '1170px',
        height: '639px',
        top: '2891px',
        left: '135px',
      }}
    >
      <div className="relative w-full h-full">
        
        <div
          style={{
            width: '470px',
            height: '164px',
            fontSize: '48px',
            lineHeight: '54px',
            fontWeight: '600',
          }}
        >
          What people are<br/>Saying about us
        </div>

        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            width: '450px',
            height: '64px',
            top: '54px', // relative inside container
            left: '599px', // 135 + 470 - small offset, fits inside 1170 container
            opacity: 0.7,
            fontSize: '18px',
            lineHeight: '180%',
            fontWeight: '400',
          }}
        >
          Everything you need to accept card payments<br/>
          and grow your business anywhere on the planet.
        </p>

        {/* Testimonials row */}
        <div
          className="flex px-8"
          style={{
            marginTop: '130px',
          }}
        >
          {testimonials.map(({ id, quote, name, role, img }) => (
            <TestimonialCard key={id} id={id} quote={quote} name={name} role={role} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
