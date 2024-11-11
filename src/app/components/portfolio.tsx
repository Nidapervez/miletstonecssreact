"use client";
import { useState } from 'react';
import Image from 'next/image';

const Port = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  const projects = [
    { title: 'Next js Project', description: 'This is my portfolio in next.js.', image: '/next.jpg', link: 'https://second-mile-stone-96sf.vercel.app/project' },
    { title: 'Amazon Clone Project', description: 'This website is the clone of amazon.', image: '/ama.jpg', link: 'https://amazon-clone-mfaky44e3-nida-pervezs-projects.vercel.app/' },
    { title: 'Grocery Project', description: 'This website is designed to streamline the shopping experience for groceries.', image: '/gro.jpg', link: 'https://grocery-website-o9959o86c-nida-pervezs-projects.vercel.app/' },
    { title: 'Animated Project', description: 'This website is designed to show animation.', image: '/ani.jpg', link: 'https://animated-z7gfz3jpa-nida-pervezs-projects.vercel.app/' },
    { title: 'Facebook Clone Project', description: 'This website is designed to show a Facebook clone.', image: '/fa.jpg', link: 'https://facebookloginclone-e5u8o20tb-nida-pervezs-projects.vercel.app/' },
    { title: 'Calculator Project', description: 'This website is designed to streamline calculations.', image: '/ca.jpg', link: 'https://calculator-4hg8rzgo2-nida-pervezs-projects.vercel.app/' },
    { title: 'Simplest Navbar Project', description: 'This website demonstrates a simple navbar.', image: '/nav.jpg', link: 'https://nav-glonf74bu-nida-pervezs-projects.vercel.app/' },
    { title: 'Accessories Project', description: 'This website is designed to shop for accessories.', image: '/acc.jpg', link: 'https://accessories-website-nlek30y81-nida-pervezs-projects.vercel.app/index.html' },
    { title: 'Timer Project', description: 'This project is a timer with different functionalities.', image: '/timer.jpg', link: 'https://counter1st-project.vercel.app/' },
    { title: 'CV Project', description: 'This project displays my CV.', image: '/cv.jpg', link: 'https://cv-project-example.com' },
  ];

  return (
    <>
      <div className="container">
        <header className="header">
          <a href="#" className="logo">NidaPervez</a>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </div>
        </header>

        <section className="projects">
          <h1>My Projects</h1>
          <div className="project-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Image src={project.image} alt={project.title} width={500} height={300} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Nida Pervez. All rights reserved.</p>
        </footer>
      </div>

      <style jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(120deg, #f0f4f8, #e6e9f0);
          color: #444;
          margin: 0;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header .logo {
          font-size: 24px;
        }
        .projects {
          padding: 50px 20px;
          text-align: center;
        }
        .projects h1 {
          margin-bottom: 40px;
          font-size: 36px;
        }
        .project-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .project-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.3);
          margin: 15px;
          padding: 20px;
          width: calc(30% - 40px); /* Three cards in a row */
          text-align: left;
          transition: transform 0.3s;
        }
        .project-card img {
          width: 100%;
          border-radius: 10px;
        }
        .project-card h2 {
          margin: 15px 0 10px;
          font-size: 22px;
        }
        .project-card p {
          margin-bottom: 15px;
          color: #999;
        }
        .project-card a {
          display: inline-block;
          padding: 10px 15px;
          background: #FB374D;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.3s;
        }
        .project-card a:hover {
          background: #e02a39;
        }
        @media (max-width: 990px) {
          .project-card {
            width: calc(45% - 40px); /* Two cards in a row */
          }
        }
        @media (max-width: 600px) {
          .project-card {
            width: calc(100% - 40px); /* One card in a row */
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav {
            display: none; /* Hide nav by default */
            flex-direction: column; /* Stack vertically */
            position: absolute;
            top: 60px; /* Below the header */
            left: 0;
            right: 0;
            background: #fff;
            z-index: 1000;
          }
          .nav.active {
            display: flex; /* Show when active */
          }
          .menu-icon {
            display: block; /* Show hamburger icon */
            cursor: pointer;
          }
          .menu-icon i {
            font-size: 24px;
          }
        }

        .footer {
          text-align: center;
          padding: 20px;
          background: #fff;
          margin-top: 20px;
          box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Port;
