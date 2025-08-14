import React from "react";
import AboutSecText from "./AboutSecText";
import AboutSecImg from "./AboutSecImg";
import Button from "./Button";
import './AboutSec.css'; 
import CallIcon from "./CallIcon";

export default function AboutSec() {
    return (
        <section className="about-sec">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-12">
                        <AboutSecText />
                        <div className="container counter p-0">
                            <div className="row jjustify-content-between align-items-center">
                                <div className="col-md-6 text-center text-md-start">
                                   <div class="experience-counter d-flex justify-content-center justify-content-md-start justify-content-lg-start align-items-center">
                                    <h2>10+</h2>
                                    <p>Years experience...</p>
                                </div>
                                </div>
                                <div className="col-md-6 text-center text-md-start">
                                   <div class="experience-counter d-flex justify-content-center justify-content-md-start align-items-center">
                                    <h2>10+</h2>
                                    <p>Clients Worldwide...</p>
                                </div>
                                </div>
                        </div>
                        </div>
                        <div class="d-flex justify-content-center justify-content-lg-start align-items-center mt-4 flex-column flex-sm-row">
                            <Button text="About us" variant="primary" size="md" onClick={() => alert("Contact clicked")} />
                            <span className="mx-4 d-flex"> 
                            <>
                            <CallIcon />
                            <span className="Phonenumber mt-2 mt-sm-0">
                                <h6>Phone</h6>
                                <a href="tel:+8801234567890" className="text-decoration-none text-dark">+880 123 456 7890</a>
                            </span>
                            </>                          

                            </span>     
                        </div>
                       </div>
                    <div className="col-lg-6 col-12">
                        <AboutSecImg />
                    </div>
                </div>
            </div>
        </section>
    );
}


