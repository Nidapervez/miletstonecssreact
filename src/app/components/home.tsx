"use client";
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
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
      <style jsx>{`
        /* Global styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          color: #fff;
          position: relative;
          z-index: 10;
        }

        .logo h1 {
          color: #333;
          font-size: 24px;
          margin: 0;
        }

        /* Main content styles */
        .main-content {
          padding: 50px 20px;
          text-align: center;
        }

        .image-container {
          margin-bottom: 20px;
        }

        .office-image {
          border-radius: 8px;
          width: 100%;
          max-width: 500px;
          height: auto;
        }

        .main-title {
          font-size: 32px;
          margin: 20px 0;
        }

        .search-form {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .city-input {
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .find-office-btn {
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .companies-used {
          margin-top: 30px;
        }

        .companies-used ul {
          display: flex;
          justify-content: center;
          gap: 15px;
          list-style: none;
        }

        .companies-used i {
          font-size: 24px;
          color: #333;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .header {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }

          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            width: 100%;
            background-color: #fff; /* Changed to white to remove black line */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }

          .main-content {
            padding-top: 100px; /* To avoid content being hidden behind navbar */
          }
        }

        /* Adjust the logo size for smaller screens */
        @media (max-width: 480px) {
          .logo h1 {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <header className="header">
          {/* Removed the logo and login/register buttons */}
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="image-container">
            <Image src="/nidapic.jpg" alt="Office Space" className="office-image" width={500} height={300} />
          </div>
          <div className="text-container">
            <h1 className="main-title">Hi My Name is Nida</h1>
            <p>Welcome to my Profile. I am here to give You services Of WebDevelopment.I have completed my bachelor from Punjab University.Now I am Student of GIAIC Cloud Computing</p>
            <form className="search-form">
              <input type="text" placeholder="Enter Your Name" className="city-input" />
              <button className="find-office-btn">Submit</button>
            </form>
            <div className="companies-used">
              <p>Also Available here:</p>
              <ul>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-airbnb"></i></li>
                <li><i className="fa-brands fa-apple"></i></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
