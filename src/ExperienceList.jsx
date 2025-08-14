import React from "react";
import './ExperienceList.css';

const experiences = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "June 2020 - Present",
        description: "Developing scalable web applications using React and Node.js."
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Creative Agency",
        duration: "January 2019 - May 2020",
        description: "Designed and implemented user interfaces for various client projects."
    },
    {
        id: 3,
        title: "Intern Software Developer",
        company: "Startup Hub",
        duration: "June 2018 - December 2018",
        description: "Assisted in the development of mobile applications and backend services."
    },
    {
        id: 4,
        title: "Web Development Intern",
        company: "Web Innovators",
        duration: "January 2018 - May 2018",
        description: "Contributed to the development of responsive websites and web applications."
    }
]

const ExperienceList = () => {
    return(
        <ul className="list-group mt-5 ">
            {experiences.map((experience, index ) => (
                <li key={experience.id} className="d-flex justify-content-center align-items-center item list-group-item bg-transparent text-white mb-4 roundered-3 p-4 flex-column flex-md-row">
                     <p className="duration m-0">{experience.duration}</p>   
                    <h5>{experience.title}</h5>             
                    <p className="company">{experience.company}</p>
                    <p className="description">{experience.description}</p>                                   
                </li>
            ))}
        </ul>
    )
}
export default ExperienceList;