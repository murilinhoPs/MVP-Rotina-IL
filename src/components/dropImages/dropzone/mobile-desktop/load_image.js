import React, { useContext, useEffect, useState } from "react";

import { itemContext } from "../../../todoComponent/index";
import "../styles.css";

const LoadImage = ({ imageList, item, onImageRemoveAll }) => {
  const { setUpdate } = useContext(itemContext);

  const [reload, setReload] = useState();

  const localList = localStorage.getItem(`@nome-do-app/imageList_${item.key}`);

  const remove = imageList[0].onRemove;

  useEffect(() => {
    const verifyLocalList = () => {
      localStorage.setItem(`@nome-do-app/imageList_${item.key}`, imageList[0]);

      // localStorage.removeItem(
      //   `@nome-do-app/imageList_${item.key}`
      // );

      if (item.img === "")
        setUpdate(item.text, item.key, imageList[0].dataURL, item.avatar);

      setReload(true);
    };

    if (imageList.length !== 0 || localList !== null) {
      verifyLocalList();
      // imageList.push(localList);
      // console.log(imageList[0].dataURL);
    }
  }, localList);

  function clique() {
    localStorage.removeItem(`@nome-do-app/imageList_${item.key}`);

    console.log("sd");

    

    remove();
  };

  return (
    <>
      {localList !== null ? (
        <div className="DropzoneImageContainer" key={item.key}>
          <img height="100%" width="100%" src={item.img} />
          <button
            onClick={clique}
            onTouchStart={imageList[0].onRemove}
          >
            Remover imagem
          </button>
        </div>
      ) : (
        <t>Carregando...</t>
      )}
    </>
  );
};

export default LoadImage;
