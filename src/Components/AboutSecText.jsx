import React from "react";
import Superheading from "./SuperHeading";
import SectionHeading from "./SectionHeading";
import './AboutSecText.css';

export default function AboutSecText() {
    return (
        <div className="about-sec-text">
            <Superheading  
            title= 'About Us'/>
           <SectionHeading 
           heading='Solving Problems With' spanText='Intuitive Design' />
           <p>In today is competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.</p>
        </div>
    );
}