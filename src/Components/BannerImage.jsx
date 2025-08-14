import React from "react";
import personImage from './images/person.png';
import './BannerImage.css';

export default function BannerImage() {
    return (
        <div className="banner-image">
            <img src={personImage} alt="Person" className="img-fluid" />
        </div>     
    )
}