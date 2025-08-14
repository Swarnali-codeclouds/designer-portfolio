import React from "react";
import './ServiceList.css';

const services =[
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "We’re a team of strategic working globally with largest brands, progress only you to play things safe.",
        
    },
    {
        id: 2,
        title: "API Development",
        description: "Designing and developing APIs for seamless integration.",
        
    },
    {
        id: 3,
        title: "Moblie App Design",
        description: "Designing and developing APIs for seamless integration."
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Creating user-friendly interfaces and experiences."
    }

]

const ServiceList =() => {
    return (
        <div className="container mt-4">
            <div className="row d-flex flex-column justify-content-center text-light">
                {services.map(service => (
                    <div key={service.id} className="col-12 p-4 service-item mb-4 rounded-3 ">
                        <div className="service-card d-flex justify-content-between align-items-center p-3 flex-column flex-md-row">
                            <div className="d-flex justify-content-start align-items-baseline service-header mb-3 mb-lg-0">
                            <span className="service-no me-4">0{service.id}</span>
                            <h5 className="service-title">{service.title}</h5>
                            </div>                            
                            <p className="service-description text-left">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ServiceList;