import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import AvatarPlaceholder from '../avatarPlaceholder/index';
import Dropzone from '../dropzone/index';
import { FaFileImage, FaRegFileImage, FaFileUpload } from 'react-icons/fa'


function ListItems(props) {
  const items = props.items;

  const [value, setValue] = useState("");
  
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <div className="MyDisplay">

          <AvatarPlaceholder iconSize="30px" />

            <input
              type="text"
              id={item.key}
              value={item.text}
              multiple={true}
              onChange={(inputEvent) => {
                props.setUpdate(inputEvent.target.value, item.key);
                setValue(inputEvent.target.value);
                console.log(inputEvent.target.value);
              }}
            />
            <span>
              <FontAwesomeIcon
                className="faicons"
                onClick={() => {
                  props.deleteItem(item.key);
                }}
                icon="trash"
              />
            </span>
          </div>
          <Dropzone iconSize="35px"/>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
