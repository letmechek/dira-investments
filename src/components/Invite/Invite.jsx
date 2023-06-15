import React from 'react';
import joinImage from '../../Assets/images/join.webp';

export default function Invite() {
    return (
        <div className="flex flex-col bg-black pt-20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 text-center md:text-left" style={{ backgroundColor: 'rgb(48, 44, 41)' }}>
              <h2 className="text-5xl text-white font-bold mb-4 p-7">
                Are you interested in joining us?
              </h2>
              <p className="text-white mb-4">
                227 Buteko Avenue, Town Centre, Ndola, Zambia
              </p>
              <p className="text-white mb-4">Diralimited@gmail.com</p>
              <p className="text-white">
                <a href="tel:+26095100555">+26095100555</a>
              </p>

            </div>
            <div className="w-full md:w-1/2">
              <img src={joinImage} alt="Join Us" className="w-full h-full" />
            </div>
          </div>
        </div>
      );
      
}
