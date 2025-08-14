import React from "react";
import Superheading from "./SuperHeading";
import SectionHeading from "./SectionHeading";
import './Experience.css';
import SectionPadding from "../SectionPadding";
import ExperienceList from "../ExperienceList";
import CounterSection from "./Counter";

export default function Experience() {
  return (
    <div className="experience-section">
    <div className="container">
        <div className="experience-heading text-center mb-5">
            <SectionPadding />
      <Superheading title= 'My Experience' isDarkBackground={true}/>
      <SectionHeading heading='My work' spanText='Experience' />
      <ExperienceList />
       <SectionPadding />
      <CounterSection />
      <SectionPadding />
      </div>
    </div>
    </div>
    
  );
}