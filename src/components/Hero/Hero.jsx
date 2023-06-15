import React from 'react'
import hero from '../../Assets/images/hero.jpeg'

export default function Hero() {
    return (
        <div className="bg-gray-900 p-4 md:p-8">
          <div className="bg-black flex flex-col items-center md:flex-row">
            <img src={hero} alt="hero" className="w-full md:w-1/2 h-auto" style={{height: '80vh'}}/>
            <div className="ml-10 text-center">
              <p className="mt-4 text-white text-4xl md:text-8xl font-bold leading-tight p-1" style={{ fontSize: '72px', lineHeight: '1.25em' }}>
                Become a Valued Partner
              </p>
              <p className="text-white font-bold pb-5">No Limits</p>
            </div>
          </div>
        </div>
      );
      
      
  }
  