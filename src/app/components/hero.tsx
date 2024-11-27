"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-content">
          <Image src={require("../../../public/nidapic.jpg")} alt="nidaportpolio" className="hero-image" />
          <div className="hero-text">
            <h1 className="hero-title">
              Hello I am
              <br className='hidden lg:inline-block'/>
             
      
              Nida Pervez.
            </h1>
            <p className="hero-description">
              Hi, I am Nida, a seasoned web developer dedicated to creating responsive websites that captivate and motivate users.
            </p>
            <div className="hero-button-container">
              <Link href="/contact">
                <button className="hero-button">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-container {
          background-color: white;
          color: black;
        }
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1rem;
        }
        .hero-content {
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-image {
          border-radius: 50%;
          max-width: 200px;
          height: auto;
          margin-bottom: 2rem;
        }
        .hero-text {
          text-align: center;
        }
        .hero-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }
        }
        .hero-description {
          font-size: 1rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .hero-button-container {
          display: flex;
          justify-content: center;
        }
        .hero-button {
          background-color: #5b21b6;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .hero-button:hover {
          background-color: #4c1d95;
        }
      `}</style>
    </div>
  );
};

export default Hero;
