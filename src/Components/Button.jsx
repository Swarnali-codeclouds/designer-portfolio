import React from "react";
import './Button.css'; // Assuming you have a CSS file for button styles


export default function Button({
    text,
    onClick,
    className = "",
    size = "md",
    variant = "primary"
}) {
    return (
        <button
            className={`custom-btn custom-btn-${variant} custom-btn-${size} ${className}`}
            onClick={onClick}
        >
            <span>{text}</span><i className="fas fa-arrow-right"></i>
        </button>
    );
}