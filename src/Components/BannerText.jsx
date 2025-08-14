import React, { useState , useEffect } from "react";
import Button from "./Button";
import './BannerText.css'; // Assuming you have a CSS file for banner text styles
import Superheading from "./SuperHeading";

export default function BannerText(){
    const titles = ["UI/UX Designer", "Web Designer"];  
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0); // current title index
    const [subIndex, setSubIndex] = useState(0); // current letter index
    const [deleting, setDeleting] = useState(false); // typing or deleting
    const [blink, setBlink] = useState(true); // blinking cursor

    useEffect(() => {
    const typingSpeed = deleting ? 50 : 120;
    const pauseTime = 1000; // pause before deleting

    if (subIndex === titles[index].length + 1 && !deleting) {
      // pause before deleting
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      // move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);


    return(
        <div className="banner-text text-lg-left text-center">
            <Superheading
            title = 'Hello There!'/>
            <h1 className="banner-heading text-left">I'm Rachel-<br></br><span className="animated-title"> {`${titles[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
            </h1>
            <p>We're a team of strategic working globally with largest brands, We believe that progress only you to play things safe.</p>
            <Button text="Get In Touch" variant="primary" size="md" onClick={() => alert("Contact clicked")} />    
        </div>
    )
}