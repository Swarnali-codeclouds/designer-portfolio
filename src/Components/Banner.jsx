import React from "react";
import BannerText from "./BannerText";
import './Banner.css';
import bannerBg from './images/bg-1.jpg';
import BannerImage from "./BannerImage";

export default function Banner() {
    return(
        <div className="hero-banner d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="container">
           <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-12 order-lg-0 order-1">
                <BannerImage />
            </div>
            <div className="col-lg-6 col-12 order-lg-1 order-0">
                  <BannerText></BannerText>
            </div>
           </div>
            </div>
        </div>
    )

}
