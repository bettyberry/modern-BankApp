import React from 'react';
import logo from '../assets/logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';      
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '1440px',
        height: '418px',
        top: '4165px',
        left: '0px',
        backgroundColor: 'black',
        color: 'white',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo and Description */}
      <div
        style={{
          position: 'absolute',
          width: '266px',
          height: '72.14px',
          top: '72px',
          left: '135px',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '266px', height: '72.14px', objectFit: 'contain' }}
        />
        <p
          style={{
            color: '#9CA3AF',
            fontSize: '18px',
            width: '312px',
            height: '64px',
            marginTop: '20px',
            fontWeight: '400',
            lineHeight: '32px',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {/* Useful Links */}
      <div
        style={{
          position: 'absolute',
          width: '136px',
          height: '219px',
          top: '72px',
          left: '611px',
        }}
      >
        <h3
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px',
          }}
        >
          Useful Links
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Content', 'How it Works', 'Create', 'Explore', 'Terms & Services'].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  color: '#9CA3AF',
                  width: '65px',
                  height: '24px',
                  marginBottom: '4px',
                  position: 'relative',
                  left: '1px',
                }}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Community */}
      <div
        style={{
          position: 'absolute',
          width: '136px',
          top: '72px',
          left: '811px',
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Community
        </h3>
        <ul style={{ color: '#9CA3AF', listStyle: 'none', padding: 0, lineHeight: '28px' }}>
          <li>Help Center</li>
          <li>Partners</li>
          <li>Suggestions</li>
          <li>Blog</li>
          <li>Newsletters</li>
        </ul>
      </div>

      {/* Partner */}
      <div
        style={{
          position: 'absolute',
          width: '136px',
          top: '72px',
          left: '1011px',
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Partner
        </h3>
        <ul style={{ color: '#9CA3AF', listStyle: 'none', padding: 0, lineHeight: '28px' }}>
          <li>Our Partner</li>
          <li>Become a Partner</li>
        </ul>
      </div>

      {/* Horizontal break line */}
      <div
        style={{
          position: 'absolute',
          top: '350px',  // adjust this if needed
          left: '160px',
          width: '1170px',
          borderTop: '1px solid #1F2937',
        }}
      />

      
      <div
        style={{
          position: 'absolute',
          width: '100%',
          paddingTop: '20px',
        }}
      >
        <p
          style={{
            position: 'absolute',
            width: '419px',
            height: '27px',
            top: '361px',
            left: '160px',
            color: '#9CA3AF',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '150%',
            fontFamily: 'arial, sans-serif',
          }}
        >
          Copyright © 2021 HooBank. All Rights Reserved.
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '364px', // adjust as needed
          left: '1125px',
          width: '176px',
          height: '21px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={instagram} alt="instagram" style={{ height: '21px', width: 'auto' }} />
        <img src={facebook} alt="facebook" style={{ height: '21px', width: 'auto' }} />
        <img src={twitter} alt="twitter" style={{ height: '21px', width: 'auto' }} />
        <img src={linkedin} alt="linkedin" style={{ height: '21px', width: 'auto' }} />
      </div>
    </div>
  );
};

export default Footer;
