// components/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <h1>NidaPervez</h1>
      </a>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <i className="fa-solid fa-bars fa-2x"></i>
      </div>
      <nav className={`nav ${isNavActive ? 'active' : ''}`}>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/port">Our Portfolio</Link></li>
          <li><Link href="/skill">Our Skills</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .logo h1 {
          color: #FB374D; /* Pink color for the logo */
          font-size: 24px;
          font-weight: 600;
        }
        .menu-icon {
          cursor: pointer;
          display: none;
        }
        .nav {
          display: flex;
          align-items: center;
        }
        .nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        .nav ul li {
          margin: 0 20px;
        }
        .nav ul li a {
          text-decoration: none;
          color: #444;
          font-weight: 500;
          padding: 10px 15px;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .nav ul li a:hover {
          color: #fff;
          background-color: #FB374D; /* Pink background on hover */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px 20px;
          }
          .logo {
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
          }
          .menu-icon {
            display: block;
          }
          .nav {
            flex-direction: column;
            width: 100%;
          }
          .nav ul {
            flex-direction: column;
            width: 100%;
          }
          .nav ul li {
            width: 100%;
            margin: 5px 0;
          }
          .nav ul li a {
            display: block;
            width: 100%;
            text-align: left;
            padding: 10px 15px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
