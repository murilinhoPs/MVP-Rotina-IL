import React from "react";
import ImageUploading from "react-images-uploading";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import "./styles.css";

const maxFiles = 1;
const maxMbFileSize = 5 * 1024 * 1024;

const AvatarContent = ({ iconSize }) => {
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
              className="DropContainerAvatar"
              onClick={onImageUpload}
              onTouchStart={onImageUpload}
            >
              <FaUserCircle className="IconAvatar" size={iconSize} />
              <text>+</text>
            </div>
          ) : (
            imageList.map((image) => (
              <div className="AvatarImageContainer" key={image.key}>
                <img src={image.dataURL} />
                <div>
                  <AiFillCloseCircle
                    className="AvatarRemoveIcon"
                    onClick={image.onRemove}
                    onTouchStart={image.onRemove}
                    size="26px"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default AvatarContent;
