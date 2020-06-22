import React, { useState, useEffect } from "react";
import "./styles.css";
import DropzoneMobile from "./mobile-desktop/mobile";

const Dropzone = ({ iconSize }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const verifyWidth = () => {
      setIsMobile(window.outerWidth <= 768);
    };

    window.addEventListener("resize", verifyWidth);

    verifyWidth();
  });

  return (
    <>
      {/* {isMobile ? (
        <DropzoneMobile iconSize={iconSize} />
      ) : (
        <DropzoneDesktop iconSize={iconSize} />
      )} */}
      <DropzoneMobile iconSize={iconSize} />
    </>
  );
};

export default Dropzone;
