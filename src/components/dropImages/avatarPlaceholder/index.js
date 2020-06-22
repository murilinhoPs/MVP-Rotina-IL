import React, { useState, useEffect } from "react";
import AvatarContent from "./mobile";

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
      <AvatarContent iconSize={iconSize} />
    </>
  );
};

export default Dropzone;
