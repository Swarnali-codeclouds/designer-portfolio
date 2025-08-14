import React from "react";
import SuperHeading from "./SuperHeading";
import SectionHeading from "./SectionHeading";
import RatingCard from "./RatingCard";
import TestimonialSlider from "./TestimonialSlider";
import './Testimonial.css';

export default function Testimonial() {
    return(
        <div className="container testimonial">
            <div className="row">
            <div className="col-lg-6 col-12 text-center text-lg-start">
               <SuperHeading title='Testimonial' />
                <SectionHeading heading='Our clients awesome -' spanText='Testimonials'/>
                <div className="mt-4">
                <RatingCard />
                </div>
            </div>     
            <div className="col-lg-6 col-12 testimonial-slider">
                <TestimonialSlider />
            </div>   
        </div>
      </div>
    )
}