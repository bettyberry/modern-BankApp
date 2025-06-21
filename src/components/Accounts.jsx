import React from 'react';
import airbnb from '../assets/airbnb.png';
import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import dropbox from '../assets/dropbox.png';

const Accounts = () => {
  return (
    <section className="bg-[#00040f] py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1170px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <img
          src={airbnb}
          alt="Airbnb"
          className="h-[60px] w-[192px] object-contain"
        />
        <img
          src={binance}
          alt="Binance"
          className="h-[60px] w-[192px] object-contain"
        />
        <img
          src={coinbase}
          alt="Coinbase"
          className="h-[60px] w-[192px] object-contain"
        />
        <img
          src={dropbox}
          alt="Dropbox"
          className="h-[60px] w-[192px] object-contain"
        />
      </div>
    </section>
  );
};

export default Accounts;
