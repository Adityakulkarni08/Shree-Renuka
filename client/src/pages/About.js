import React from "react";
import Layout from "./../components/Layout/Layout";
import Abb from "../assests/abb-logo.png";
import AboutUs from "../assests/about-us-model.jpg";
import "../assests/styles/About.css";

const About = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <div className="banner">
          <img src={AboutUs} alt="Banner" className="banner-image" />
        </div>
        <div className="about-us-content">
          <h2 className="about">ABOUT US</h2>
          <h3>
            Shree Renuka Engineering Company in Nehrugunj Gulbarga, Gulbarga
          </h3>
          <p>
            Shree Renuka Engineering Company in Gulbarga is one of the leading
            businesses in the Lighting Dealers. Also known for Electric Shops,
            AC Dealers, Pipe Dealers, Electrical Goods Dealers, Lighting
            Dealers, Wire Dealers, Fan Dealers, Pump Dealers and much more. Find
            Address, Contact number, reviews & Ratings, Photos, Maps of Shree
            Renuka Engineering Company, Gulbarga.
          </p>
          <h3>Location and Overview:</h3>
          <p>
            Established in the year 2015, Shree Renuka Engineering Company in
            Nehrugunj Gulbarga, Gulbarga is a top in the category Lighting
            Dealers in the Gulbarga. THis well-known establishment acts as a
            one-stop destination servicing customers both local and from other
            parts of Gulbarga. Over the Course of its journey, this business has
            established a firm foothold in its industry. The belief that
            customer satisfaction is as important as their products and
            services, have helped this establishment garner a vast base of
            customers, which continues to grow day by day. This business employs
            individuals that are dedicated towards their respective roles and
            put in a lot of effort to achieve the common vision and larger goals
            of the company. In the near future, this business aims to expand its
            line of products and services and cater to a larger client base. In
            Gulbarga, this establishment occupies a prominent location in
            Nehrugunj Gulbarga. It is an effortless task in commuting to this
            establishment as there are various modes of transport readily
            available. It is at Humnabad Base, Near Gunj Road, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Electrical Shops, AC Dealers, Pipe Dealers, Electrical Goods Dealers, Lighting Dealers, Wire Dealers, Fan Dealers, Pump Dealers. 
          </p>
          <h3>
            Products and Services offered:
          </h3>
          <p>
            Shree Renuka Engineering Company in Nehrugunj Gulbarga has a wide range of products and / or services to cater to the varies requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. Pay for the product or service with ease by using any of the available modes of payment, such as Cash, UPI, Diners Club Card, G Pay, PhonePe, NEFT, IMPS, COD. This establishment is functional from 09:30 -20:00. <br></br> Please scroll to the top for the address and contact details of Shree Renuka Engineering Company at Nehrugunj Gulbarga, Gulbarga.
          </p>
          {/* Rest of the content */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
