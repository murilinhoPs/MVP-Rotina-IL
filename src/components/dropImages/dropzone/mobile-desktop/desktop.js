import React from "react";
import "../styles.css";
import { FaFileImage } from "react-icons/fa";

const DropzoneDesktop = ({ iconSize }) => {
  return (
    <div className="DropContainer">
      <FaFileImage className="Icon" size={iconSize} />
      <text>+</text>
    </div>
  );
};

export default DropzoneDesktop;