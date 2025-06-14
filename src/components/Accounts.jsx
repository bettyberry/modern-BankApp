import React from 'react';
import airbnb from '../assets/airbnb.png';
import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import dropbox from '../assets/dropbox.png';


const Accounts = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '3630px',
        left: '187.41px',
        width: '1065.76px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
      }}
    >
      <img
        src={airbnb}
        alt="Airbnb"
        style={{ height: '60px', width:'192.25px',objectFit: 'contain' }}
      />
      <img
        src={binance}
        alt="Binance"
        style={{ height: '60px', width:'192.25px',objectFit: 'contain' }}
      />
      <img
        src={coinbase}
        alt="Coinbase"
        style={{ height: '60px', width:'192.25px',objectFit: 'contain' }}
      />
      <img
        src={dropbox}
        alt="Dropbox"
        style={{ height: '60px', width:'192.25px',objectFit: 'contain' }}
      />
    </div>
  );
};

export default Accounts;
