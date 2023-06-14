import React from 'react';
import joinImage from '../../Assets/images/join.webp';

export default function Invite() {
  return (
    <div className="flex bg-black pt-20  "  >
        <div style={{display:'flex', height:'400px'}}>
        <div className="w-1/2  p-8 text-center" style={{ backgroundColor: 'rgb(48, 44, 41)' }}>
        <h2 className="text-5xl text-white font-bold mb-4 p-7">
          Are you interested in joining us?
        </h2>
        <p className="text-white mb-4">
          227 Buteko Avenue, Town Centre, Ndola, Zambia
        </p>
        <p className="text-white mb-4">dispatch@diratransport.com</p>
        <p className="text-white">+245793022425</p>
      </div>
      <div className="w-1/2">
        <img src={joinImage} alt="Join Us" className="w-full  h-full" />
      </div>
    </div>
    </div>
  );
}
