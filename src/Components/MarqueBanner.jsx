import React from "react";
import "./MarqueBanner.css";

export default function MarqueeBanner({ items }) {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
