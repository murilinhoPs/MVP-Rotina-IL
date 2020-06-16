import React from "react";
import './styles.css';
import { FaFileImage, FaRegFileImage, FaFileUpload, FaUserCircle } from 'react-icons/fa'

const AvatarPlaceholder = ({ iconSize}) => {
  return (
    <div className="DropContainer2" >
      <FaUserCircle className="Icon2" size={iconSize}/>
      <text>+</text>
    </div>
  );
};

export default AvatarPlaceholder;
