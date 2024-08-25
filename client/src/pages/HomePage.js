import React from "react";
import Layout from "./../components/Layout/Layout";
import ImageSlider from "./ImageSlider";
import abb from "../assests/abb-logo.png";
import reliance from "../assests/relianceltd-logo.png";
import bajaj from "../assests/bajaj-logo.png";
import siemens from "../assests/Siemens-logo.png";
import almonard from "../assests/almonard-logo.png";
import bonfiglioli from "../assests/bonfiglioli-logo.png";
import boschslide from "../assests/bosch-slider.jpg";
import bosch from "../assests/bosch-logo.png";
import crompton from "../assests/crompton-logo.png";
import finolex from "../assests/finolex-logo.png";
import flotec from "../assests/flotec-logo.png";
import landt from "../assests/l&t-logo.png";
import legrand from "../assests/legrand-logo.png";
import polycab from "../assests/polycab-logo.png";
import siemensauth from "../assests/Siemens-Authorised.jpg";
import abbswitch from "../assests/abb-switchgear.png";
import polycabwires from "../assests/polycab-wires-cables.jpg";
import bonfimotors from "../assests/Bonfig-motors.png";
import siemenslvswitch from "../assests/siemens-lvswitch.jpg";
import cablescat from "../assests/cablescat.png";
import switchgearmodel from "../assests/switchgear-model.png";
import motormodel from "../assests/motor-model.jpeg";
import gearboxmodel from "../assests/gearbox-model.png";
import ultratech from "../assests/ultratech-cement-logo.png";
import chettinad from "../assests/chettinad-logo.png";
import pnc from "../assests/PNC-INFRATECH.jpg";
import reli from "../assests/reliance-logo.jpg";
import fans from "../assests/fan-model.png";
import powertool from "../assests/power-tool.png";
import pumpsets from "../assests/pumpset-model.png";
import switches from "../assests/switch-model.png";
import lugs from "../assests/lugs-model.png";
import landtslide from "../assests/l&t-sliders.jpg";
import finolexslide from "../assests/finolex-slider.jpg";
import boschslider from "../assests/bosch-slider.jpg";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const slides = [
    {
      url: landtslide,
      title: "second image",
    },
    {
      url: finolexslide,
      title: "third image",
    },
    {
      url: polycabwires,
      title: "fourth image",
    },
    {
      url: boschslider,
      title: "fifth image",
    },
  ];

  const categoryItems = [
    {
      id: 1,
      title: "wires and cables",
      image: cablescat,
      slug: "wires-and-cables",
    },
    {
      id: 2,
      title: "switchgears",
      image: switchgearmodel,
      slug: "switchgears",
    },
    { id: 3, title: "motors", image: motormodel, slug: "motors" },
    { id: 4, title: "gearbox", image: gearboxmodel, slug: "gearbox" },
    { id: 5, title: "fans", image: fans, slug: "fans" },
    { id: 6, title: "powertools", image: powertool, slug: "power-tools" },
    { id: 7, title: "pumpsets", image: pumpsets, slug: "pumpsets" },
    {
      id: 8,
      title: "switches",
      image: switches,
      slug: "switches-and-accessories",
    },
    { id: 9, title: "lugs", image: lugs, slug: "lugs" },
  ];

  const items = [
    { id: 1, title: "", image: abb },
    { id: 3, title: "", image: legrand },
    { id: 4, title: "", image: bonfiglioli },
    { id: 5, title: "", image: finolex },
    { id: 6, title: "", image: polycab },
    { id: 7, title: "", image: landt },
    { id: 8, title: "", image: crompton },
    { id: 9, title: "", image: bajaj },
  ];

  const categoryGridItems = categoryItems.map((item) => (
    <Link
      to={`/category/${item.slug}`}
      key={item.id}
      className="category-grid-item"
      style={{ textDecoration: "none" }}
    >
      <img src={item.image} alt={item.title} className="category-image" />
      <div className="category-title">{item.title}</div>
    </Link>
  ));

  const gridItems = items.map((item) => (
    <div key={item.id} className="grid-authorized-item">
      <img src={item.image} alt={item.title} />
      <div className="title">{item.title}</div>
    </div>
  ));

  const containerStyles = {
    width: "1280px",
    height: "250px",
    margin: "0 auto",
  };

  const happyCustomersGrid = (
    <div className="happy-customers-grid">
      <div className="happy-customer-box">
        <img src={pnc} alt="Logo 1" className="customer-logo" />
        <div className="customer-description">
          <p className="customer-testimonial">
            PNC Infratech, the epitome of excellence in infrastructure, brings
            you a wide range of construction solutions. From high-quality roads
            to state-of-the-art bridges, PNC Infratech ensures durable and
            sustainable infrastructure for a better tomorrow.
          </p>
        </div>
      </div>
      <div className="happy-customer-box">
        <img src={reli} alt="Logo 2" className="customer-logo" />
        <div className="customer-description">
          <p className="customer-testimonial">
            "We are proud to have Reliance as a satisfied customer, relying on
            our exceptional service to meet their electrical needs with utmost
            satisfaction."
          </p>
        </div>
      </div>
      <div className="happy-customer-box">
        <img src={ultratech} alt="Logo 3" className="customer-logo" />
        <div className="customer-description">
          <p className="customer-testimonial">
            Experience the excellence of Ultratech Cement, trusted by
            professionals and homeowners alike for high-quality results.
          </p>
        </div>
      </div>
      <div className="happy-customer-box">
        <img src={chettinad} alt="Logo 4" className="customer-logo" />
        <div className="customer-description">
          <p className="customer-testimonial">
            Experience the reliability and superior quality of Chettinad Cement,
            a preferred choice of professionals and homeowners for exceptional
            construction outcomes.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div style={{ height: "2em" }}></div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div style={{ marginTop: "4em" }}>
        <h2 className="categories-heading">CATEGORIES TO SHOP</h2>
      </div>
      <div style={{ marginTop: "3em" }} className="category-grid-container">
        {categoryGridItems}
      </div>
      <div style={{ marginTop: "4em", textAlign: "left" }}>
        <div style={{ display: "inline-block" }}>
          <h2 className="categories-heading">AUTHORIZED BRANDS</h2>
        </div>
      </div>
      <div style={{ marginTop: "3em" }} className="grid-container">
        {gridItems}
      </div>
      <div style={{ marginTop: "4em" }}>
        <h2 className="categories-heading">OUR HAPPY CUSTOMERS</h2>
      </div>
      {happyCustomersGrid}
      <div style={{ height: "2em" }}></div>
    </Layout>
  );
};

export default HomePage;
