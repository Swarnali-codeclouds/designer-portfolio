import React from "react";
import Superheading from "./Components/SuperHeading";
import SectionHeading from "./Components/SectionHeading";
import PortfolioList from "./PortfolioList";

export default function Portfolio(){
    return (
        <div className="container portfolio">
            <Superheading title={'Project'}/>
            <SectionHeading heading='My Featured' spanText='Protfoilo'/>
        <div className="row mt-5">
            <PortfolioList />
        </div>
        </div>
    );
}