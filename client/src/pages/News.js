import React from "react";
import Layout from "./../components/Layout/Layout";
import Bosch from "../assests/bosch-cert.jpeg";
import landt from "../assests/l&t-cert.jpeg";
import fincert from "../assests/finolex-cert.jpeg"
import "../assests/styles/News.css";

const News = () => {
  return (
    <Layout>
      <div className="news-container">
        <h2 className="news-title">Authorized Brands Certificates</h2>
        <div className="images-container">
          <div className="image-card">
            <img src={Bosch} alt="Image 1" className="news-image" />
            <p className="image-description">Description for Image 1</p>
          </div>
          <div className="image-card">
            <img src={landt} alt="Image 2" className="news-image" />
            <p className="image-description">Description for Image 2</p>
          </div>
          <div className="image-card">
            <img src={fincert} alt="Image 1" className="news-image" />
            <p className="image-description">Description for Image 1</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
