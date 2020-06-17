import React, { useState, useEffect } from "react";
import "./styles.css";
import DropzoneDesktop from "./mobile-desktop/desktop";
import DropzoneMobile from "./mobile-desktop/mobile";

const Dropzone = ({ iconSize }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const verifyWidth = () => {
      setIsMobile(window.outerWidth <= 768);

      console.log(isMobile);
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
