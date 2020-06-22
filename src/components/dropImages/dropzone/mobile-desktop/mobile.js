import React, { useContext, useEffect, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import ImageUploading from "react-images-uploading";

import { itemContext } from "../../../todoComponent/index";
import "../styles.css";
import LoadImage from "./load_image";

const maxFiles = 1;
const maxMbFileSize = 5 * 1024 * 1024;

const DropzoneMobile = ({ iconSize }) => {
  const { itemsArray } = useContext(itemContext);

  return (
    <ImageUploading
      maxNumber={maxFiles}
      multiple={false}
      maxFileSize={maxMbFileSize}
      acceptType={["jpg", "gif", "png"]}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => {
        // const teste = localStorage.getItem(`@nome-do-app/itemsArray_${id}`);

        return (
          <div style={{ alignSelf: "center" }}>
            {JSON.parse(itemsArray).map((item) => {
              const localList = localStorage.getItem(
                `@nome-do-app/imageList_${item.key}`
              );
                console.log("loo")

              // if (localList !== null){
              //   imageList.push(localList);
              //   console.log(item.img );
              //   // imageList[0].onRemove.caller()
              // }

              console.log(imageList)

              return imageList.length == 0 ? (
                <div
                  className="DropContainer"
                  onClick={onImageUpload}
                  onTouchStart={onImageUpload}
                >
                  <FaFileImage className="Icon" size={iconSize} />
                  <text>+</text>
                </div>
              ) : (
                <LoadImage item={item} imageList={imageList} />
              );
            })}
          </div>
        );
      }}
    </ImageUploading>
  );
};

export default DropzoneMobile;
