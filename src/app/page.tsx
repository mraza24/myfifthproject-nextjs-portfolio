"use client";  // Add this at the top

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Simulate a data fetch or some initialization
    setTimeout(() => {
      setMessage('Welcome to My Portfolio!');
    }, 2000);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}