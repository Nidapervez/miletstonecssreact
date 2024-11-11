"use client"
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container">
        <main>
          <section className="contact-section">
            <div className="map-container">
              <iframe
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1453961307!2d66.49590584412604!3d25.191740168548172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724261648001!5m2!1sen!2s"
                style={{ filter: 'contrast(1.2) opacity(0.6)' }}
              ></iframe>
              <div className="contact-details">
                <div className="address">
                  <h2>ADDRESS</h2>
                  <p>Karachi, Sindh, Pakistan</p>
                </div>
                <div className="email-phone">
                  <h2>EMAIL</h2>
                  <a href="mailto:nnpervez333@gmail.com">nnpervez333@gmail.com</a>
                  <h2>PHONE</h2>
                  <p>0333XXX</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h2>Contact Us</h2>
              <p>Feel free to reach out!</p>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(120deg, #f0f4f8, #e6e9f0);
          color: #444;
        }
        .contact-section {
          padding: 50px 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .map-container {
          position: relative;
          width: 60%;
          margin-right: 20px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.3);
        }
        .map-container iframe {
          border: 0;
          height: 300px;
          width: 100%;
        }
        .contact-details {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
        }
        .contact-form {
          width: 35%;
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.3);
        }
        .contact-form h2 {
          margin-bottom: 10px;
          font-size: 24px;
        }
        .contact-form label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: border-color 0.3s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #fb374d;
        }
        .contact-form button {
          background-color: #fb374d;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .contact-form button:hover {
          background-color: #d7284a;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .contact-section {
            flex-direction: column;
            align-items: center;
          }
          .map-container,
          .contact-form {
            width: 100%;
            margin: 0 0 20px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
