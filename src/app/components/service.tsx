"use client";

import Head from 'next/head';
import Link from 'next/link';

const Service = () => {
  return (
    <>
      <Head>
        <title>Nidz</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div className="container">
        <main>
          <div className="service-container">
            <div className="serviceBox">
              <div className="service-icon">
                <span><i className="fa fa-globe"></i></span>
              </div>
              <h3 className="title">Web Design</h3>
              <p className="description">Create visually appealing and user-friendly websites.</p>
              <Link href="#" className="read-more">Read More</Link>
            </div>
            <div className="serviceBox">
              <div className="service-icon">
                <span><i className="fa fa-code"></i></span>
              </div>
              <h3 className="title">Web Development</h3>
              <p className="description">Build robust and scalable web applications.</p>
              <Link href="#" className="read-more">Read More</Link>
            </div>
            <div className="serviceBox">
              <div className="service-icon">
                <span><i className="fa fa-pencil"></i></span>
              </div>
              <h3 className="title">UX Design</h3>
              <p className="description">Focus on user experience and creating intuitive interfaces.</p>
              <Link href="#" className="read-more">Read More</Link>
            </div>
            <div className="serviceBox">
              <div className="service-icon">
                <span><i className="fa fa-paint-brush"></i></span>
              </div>
              <h3 className="title">UI Design</h3>
              <p className="description">Craft stunning and engaging user interfaces.</p>
              <Link href="#" className="read-more">Read More</Link>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(120deg, #f0f4f8, #e6e9f0);
          color: #444;
        }

        .service-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 50px 20px;
        }
        .serviceBox {
          padding: 25px;
          margin: 10px;
          border-radius: 10px;
          box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease 0s;
          width: calc(25% - 40px); /* Four boxes in a row */
        }
        .serviceBox:hover {
          background: #FB374D;
        }
        .serviceBox .service-icon {
          color: #FB374D;
          font-size: 55px;
          margin: 0 0 20px;
        }
        .serviceBox .title {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 10px;
        }
        .serviceBox .description {
          font-size: 14px;
          margin: 0 0 15px;
        }
        .serviceBox .read-more {
          color: #FB374D;
          font-size: 15px;
          text-decoration: underline;
        }
        .serviceBox:hover .read-more {
          text-shadow: 4px 4px rgba(255, 255, 255, 0.3);
        }

        /* Responsive Styles */
        @media (max-width: 990px) {
          .serviceBox {
            width: calc(50% - 40px); /* Two boxes in a row */
          }
        }
        @media (max-width: 600px) {
          .serviceBox {
            width: calc(100% - 40px); /* One box in a row */
          }
        }
      `}</style>
    </>
  );
};

export default Service;
