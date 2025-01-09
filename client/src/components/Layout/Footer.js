import React from "react";
import { NavLink } from "react-router-dom";
import "../../assests/styles/Footer.css";

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <footer className="custom-footer">
        <div className="column">
          <h6>COMPANY</h6>
          <p className="para">
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </p>
          <p className="para">
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </p>
          <p className="para">
            <NavLink to="/news" className="nav-link">
              Certificates
            </NavLink>
          </p>
        </div>
        <div className="column">
          <h6>HELP </h6>
          <p className="para">
            <NavLink to="/termOfService" className="nav-link">
              Terms & Conditions
            </NavLink>
          </p>
          <p className="para">
            <NavLink to="/privacyPolicy" className="nav-link">
              Privacy Policy
            </NavLink>
          </p>

          <p className="para">
            <NavLink to="/customerSupport" className="nav-link">
              Customer Support
            </NavLink>
          </p>
        </div>
        <div className="column">
          <h6 className="address">REGISTERED OFFICE </h6>
          <p className="address-i">
            #6-948 Shree Renuka Engineering,<br></br> Humnabad Base,<br></br>{" "}
            Nehrugunj Gulbarga, Gulbarga - 585104 (Near Gunj Road)
          </p>
        </div>

        <div className="column">
          <h6 className="address">BUSINESS ENQUIRY </h6>
          <p className="address-i">
            For enquiries contact: <br></br> Email: shreerenuka.glb@gmail.com <br></br>{" "}
            Phone No. +91 73539 18133
          </p>
        </div>

        <div className="column">
          <h6 className="social">LETS CONNECT </h6>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <span className="icon-gap"></span>{" "}
            {/* Add a span element with a class for the gap */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <span className="icon-gap"></span>{" "}
            {/* Add a span element with a class for the gap */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <span className="icon-gap"></span>{" "}
            {/* Add a span element with a class for the gap */}
            <a
              href="https://www.instagram.com/renuka_engineering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <span className="icon-gap"></span>{" "}
            {/* Add a span element with a class for the gap */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="clear"></div>
        <div className="bottom-text">
          <p>
            <NavLink to="/termOfService" className="nav-link">
              Terms of Service
            </NavLink>
          </p>
          <p>Copyright © 2023 Shree Renuka</p>
          <p>GST NO : 29AF0PD1054L1Z9</p>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;
