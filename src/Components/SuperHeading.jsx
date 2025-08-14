import React from "react";
import PropTypes from "prop-types";
import "./SuperHeading.css";

const Superheading = ({ 
  title, 
  isDarkBackground = false, 
  className = "",
}) => {
  return (
    <div 
      className={`super-heading ${
        isDarkBackground ? "super-heading-dark" : "super-heading-light"
      } ${className}`}
    >
      <h6>{title}</h6>
    </div>
  );
};

// Prop type validation
Superheading.propTypes = {
  title: PropTypes.string.isRequired,
  isDarkBackground: PropTypes.bool,
  className: PropTypes.string,
};

export default Superheading;
