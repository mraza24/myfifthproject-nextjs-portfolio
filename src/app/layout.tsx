import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';  // Adjusted path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* Render Navbar component */}
        {children}
      </body>
    </html>
  );
}