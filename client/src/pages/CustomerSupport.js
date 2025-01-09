import React from "react";
import Layout from "../components/Layout/Layout";
import "../assests/styles/CustomerSupport.css";

const CustomerSupport = () => {
  return (
    <Layout>
      <div>
        <h1 className="customer-support">CUSTOMER SUPPORT</h1>
        <div className="contact-details">
          <h2 className="contact-heading">Address:</h2>
          <p className="contact-info">
            #6-948 Shree Renuka Engineering, Humnabad Base, Nehrugunj Gulbarga,
            Gulbarga - 585104 (Near Gunj Road)
          </p>

          <h2 className="contact-heading">Email:</h2>
          <p className="contact-info">sachindivatagi6@gmail.com</p>
          <p className="contact-info">shreerenuka.glb@gmail.com</p>

          <h2 className="contact-heading">Phone No:</h2>
          <p className="contact-info">+91 97418 29433</p>

          <hr className="contact-line" />

          <h2 className="contact-heading">GST Number:</h2>
          <p className="contact-info">29AFOPD1054L1Z9</p>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerSupport;
