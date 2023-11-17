import React from 'react';
import './App.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Course Library */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Course Library</h3>
              <ul>
                <li>Premium Courses</li>
                <li>Free Library</li>
                <li>Offers</li>
              </ul>
            </div>
          </div>

          {/* ZEN CLASS Live Classes */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>ZEN CLASS Live Classes</h3>
              <ul>
                <li>Full Stack Development</li>
                <li>IIT-M Advanced Programming & Data Science Program</li>
                <li>Automation & Testing Program</li>
              </ul>
            </div>
          </div>

          {/* Practise */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Practise</h3>
              <ul>
                <li>Codekata</li>
                <li>Webkata</li>
                <li>IDE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Resources */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li>Rewards</li>
                <li>Refer a Friend</li>
                <li>Blogs</li>
                <li>Forum Support</li>
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Products</h3>
              <ul>
                <li>HackerKid</li>
                <li>GUVI for Corporates</li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>Refund Policy</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
