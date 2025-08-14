import React from "react";
import manImage from './images/man.png'
import './AboutSecImg.css'; // Assuming you have a CSS file for styling
import hangingImage from './images/shape-left.png'; // Assuming you have a hanging image
import FloatingImage from "./FloatingImage";

export default function AboutSecImg(){
    return (
        <div className="about-sec-img position-relative">
            <img src={manImage} alt="About Section" className="img-fluid"/>   
            <div className="img-overlay position-absolute start-0">
               <FloatingImage />
            </div>
        </div>
    );
}