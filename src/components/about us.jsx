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
    className={`p-6 rounded-[20px] max-w-[370px] w-full text-white ${
      id === 1
        ? 'bg-gradient-to-br from-white/20 via-zinc-600/20 to-[#11101D]'
        : ''
    }`}
  >
    <img src={quotes} alt="quotes" className="w-[43px] h-[28px] mb-5" />
    <p className="text-base leading-relaxed opacity-70 whitespace-pre-line">{quote}</p>

    <div className="flex items-center gap-4 mt-10">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full object-cover" />
      <div>
        <h4 className="text-white font-semibold text-[20px] leading-[32px]">{name}</h4>
        <p className="text-white text-[16px] opacity-50">{role}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="bg-[#00040f] text-white px-4 sm:px-8 lg:px-16 py-20 font-poppins">
      <div className="max-w-[1170px] mx-auto">
        {/* Heading Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          <h2 className="text-[36px] sm:text-[48px] font-semibold leading-tight">
            What people are <br className="hidden sm:block" />
            saying about us
          </h2>
          <p className="text-white/70 text-[16px] sm:text-[18px] leading-[180%] max-w-[500px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-y-8 gap-x-20 justify-start items-stretch">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
