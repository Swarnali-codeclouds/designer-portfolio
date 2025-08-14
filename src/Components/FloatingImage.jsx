import React from "react";
import "./FloatingImage.css";
import floatingImage from './images/shape-left.png'
export default function FloatingImage() {
  return (
    <img 
      src={floatingImage} 
      alt="Person" 
      className="floating-image" 
    />
  );
}