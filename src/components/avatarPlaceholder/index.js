import React from "react";
import './styles.css';
import { FaFileImage, FaRegFileImage, FaFileUpload } from 'react-icons/fa'

const AvatarPlaceholder = ({ iconSize}) => {
  return (
    <div className="DropContainer" >
      <FaFileImage className="Icon" size={iconSize}/>
      <text>+</text>
    </div>
  );
};

export default AvatarPlaceholder;
