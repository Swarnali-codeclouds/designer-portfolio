import React from "react";
import './SectionHeading.css'; // Assuming you have a CSS file for section heading styles

export default function SectionHeading({heading, spanText}) {

    return(
        <div className="section-heading">
            <h2>{heading} <span className="changeColor">{spanText}</span> </h2>
        </div>
    )
}
