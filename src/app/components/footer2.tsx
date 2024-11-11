"use client"
import React from 'react';
import Image from "next/image";
import image from "@/app/public/images/nidz.jpg"; // Replace with your actual image path

const Gooter = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src={image} alt="Nida Pervez" height={50} width={50} />
            <span className="footer-title">NidzWeb</span>
            <p>Your go-to place for web solutions.</p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="https://second-mile-stone-96sf.vercel.app/project" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/Nidapervez" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nida-pervez-8468202b6/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:nnpervez333@gmail.com">nnpervez333@gmail.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 NidzWeb. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .footer-container {
          background-color: #000;
          color: white;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          margin-bottom: 20px;
        }

        .footer-logo {
          text-align: center;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-left: 10px;
        }

        .footer-links {
          text-align: left;
        }

        .footer-links h2 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: white;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #fb374d;
        }

        .footer-contact {
          text-align: left;
        }

        .footer-contact h2 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .footer-contact p {
          font-size: 1rem;
        }

        .footer-bottom {
          margin-top: 20px;
        }

        .footer-bottom p {
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-logo {
            margin-bottom: 20px;
          }

          .footer-links,
          .footer-contact {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Gooter;
