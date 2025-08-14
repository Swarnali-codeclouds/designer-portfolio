import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import app1 from "./images/figma.svg";
import app2 from "./images/ps.svg"
import app3 from "./images/ai.svg"
import app4 from "./images/xd.svg"
import app5 from "./images/diamond.svg"
import './Counter.css';

const counters = [
    {
        number:98,
        label: "Figma",
        src: app1,
        alt: "Figma"

    },
    {
        number: 95,
        label: "Photoshop",
        src: app2,
        alt: "Photoshop"
    },
    {
        number: 90,
        label: "Illustrator",
        src: app3,
        alt: "Illustrator"
    },
    {
        number: 85,
        label: "Adobe XD",
        src: app4,
        alt: "Adobe XD"
    },
    {
        number: 98,
        label: "Branding",
        src: app5,
        alt: "Branding"
    }
]

const CounterSection = () => {
    const { ref, inView } = useInView({
    triggerOnce: true, // runs only once
    threshold: 0.5,    // start animation when 20% visible
  });
    return (
        <div className="counter-section">
            <div className="container counter-container">
                <div className="counter-grid" ref={ref}>
                    {counters.map((counter, index) =>
                    <div className="counter-item" key={index}>
                        <img src={counter.src} alt={counter.alt} />
                       <h2 className="counter-number mt-2">
              {inView ? (
                <CountUp start={0} end={counter.number} duration={2.5} />
              ) : (
                0
              )}
              %
            </h2>
            <p className="counter-label text-light">{counter.label}</p>
                    </div>                   
                    )}
                </div>
            </div>
        </div>
    )
}

export default CounterSection;