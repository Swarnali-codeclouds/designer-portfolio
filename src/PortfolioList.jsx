import React from "react";
import img1 from "./Components/images/Portfolio1.jpg";
import img2 from "./Components/images/Portfolio2.jpg";
import img3 from "./Components/images/Portfolio3.jpg";  
import img4 from "./Components/images/Portfolio4.jpg";
import './PortfolioList.css';

const images = [
    {
        src: img1,
        name: "Mobile App for Task Management",
        description: "A mobile application designed to help users manage their tasks efficiently."
    },
    {
        src: img2,
        name: "E-commerce Website Design",
        description: "A modern e-commerce website with a focus on user experience and conversion."
    },
    {
        src: img3,
        name: "Branding for Tech Startup",
        description: "Complete branding solution for a tech startup, including logo and visual identity."
    },
    {
        src: img4,
        name: "Interactive Prototyping",
        description: "An interactive prototype showcasing the user journey and interface design."
    }
];

const PortfolioList = () => {
  return (
    <>
      {images.map((image, index) => (
        <div className="col-lg-6" key={index}>
          <div className="portfolio-item">
            <img src={image.src} alt={`Portfolio ${index + 1}`} className="img-fluid rounded mb-4 image" />
            <div className="portfolio-overlay p-3">
              <h3 className="project-heading">{image.name}</h3>
              <p className="project-description">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default PortfolioList;