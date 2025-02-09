// src/app/components/Navbar.tsx

"use client"; // This makes it run on the client side
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <h1 className="text-white text-xl">My Portfolio</h1>
      <button
        className="text-white ml-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <ul className="text-white mt-4 space-y-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li> {/* This goes to the About page */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}