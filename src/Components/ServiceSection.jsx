import React from "react";
import Superheading from "./SuperHeading";
import SectionPadding from "../SectionPadding";
import SectionHeading from "./SectionHeading";
import './ServiceSection.css';
import ServiceList from "./ServiceList";

export default function ServiceSection() {

return(
    <div className="service-section">
        <div class="text-center mb-5">
            <SectionPadding />
         <Superheading title="About Us" isDarkBackground={true} />
         <SectionHeading  heading='The Ease-' spanText='Service Process' className='service-heading'/>
        </div>        
         <ServiceList />
         <SectionPadding />
    </div>
)

}