import React from "react";
import { FaFileImage } from "react-icons/fa";
import ImageUploading from "react-images-uploading";

import "../styles.css";

const maxFiles = 1;
const maxMbFileSize = 5 * 1024 * 1024;

const DropzoneMobile = ({ iconSize }) => {
  return (
    <ImageUploading
      maxNumber={maxFiles}
      multiple={false}
      maxFileSize={maxMbFileSize}
      acceptType={["jpg", "gif", "png"]}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <div style={{ alignSelf: "center" }}>
          {imageList.length == 0 ? (
            <div
              className="DropContainer"
              onClick={onImageUpload}
              onTouchStart={onImageUpload}
            >
              <FaFileImage className="Icon" size={iconSize} />
              <text>+</text>
            </div>
          ) : (
            imageList.map((image) => (
              <div className="DropzoneImageContainer" key={image.key}>
                <img height="100%" width="100%" src={image.dataURL} />
                <button onClick={image.onRemove} onTouchStart={image.onRemove}>
                  Remover imagem
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default DropzoneMobile;
