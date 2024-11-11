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
            padding: 15px 20px;
          }
          .logo h1 {
            font-size: 20px;
          }
          .nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: #fff;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .nav.active {
            display: flex;
          }
          .menu-icon {
            display: block;
          }
          .menu-icon i {
            font-size: 24px;
            color: #FB374D; /* Pink color for menu icon */
          }
          .nav ul li {
            margin: 15px 0;
            text-align: center;
          }
          .nav ul li a {
            font-size: 18px;
            padding: 15px;
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
