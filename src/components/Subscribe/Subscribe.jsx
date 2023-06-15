import React from 'react';

export default function Subscribe() {
  return (
    <div  className="bg-black flex justify-center py-4 ">
      <div className="text-white text-center p-3">
        <h2 className="text-4xl font-bold mb-9">Subscribe Form</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-64 rounded-l border border-gray-500 px-4 py-2 mr-2 focus:outline-none bg-black text-white"
          />
          <button className="bg-white text-black px-4 py-2 rounded-r">Join</button>
        </div>
      </div>
    </div>
  );
}
