"use client";
import { useState } from "react";
import React from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const numCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white text-gray-800 text-center p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <button
        onClick={numCount}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
         {/*업!*/}
        UP
      </button>
    </div>
  );
}
