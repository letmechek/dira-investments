import React from 'react';
import joinImage from '../../Assets/images/join.webp';
// import { MailIcon } from '@heroicons/react/outline'

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
          <p className="text-white mb-4">
            <a href="mailto:diralimited@gmail.com">
              diralimited@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
            </a>
          </p>
          <p className="text-white">
            <a href="tel:+26095100555">+26095100555
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
            </a>

          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={joinImage} alt="Join Us" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

