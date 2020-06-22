import React, { useState, createContext } from "react";
import "./styles.css";
import ListItems from "../todoList";
import shortid from "shortid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export const itemContext = createContext();

const TodoComponent = ({ id }) => {
  const [items, setItems] = useState([]);

  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
    img: "",
    avatar: "",
  });

  let itemsArray = localStorage.getItem(`@nome-do-app/itemsArray_${id}`);

  function handleInput(inputEvent) {
    setCurrentItem({
      text: inputEvent.target.value,
      key: shortid.generate() + currentItem.text,
      img: "",
      avatar: "",
    });
  }

  function addItem(inputEvent) {
    inputEvent.preventDefault();

    const newItem = currentItem;

    if (newItem.text !== "") {
      const newItems = [...items, newItem];

      localStorage.setItem(
        `@nome-do-app/itemsArray_${id}`,
        JSON.stringify(newItems)
      );
      setItems(newItems);

      setCurrentItem({
        text: "",
        key: "",
        img: "",
        avatar: "",
      });
    }
  }

  function deleteItem(key) {
    const filteredItems = items.filter((item) => item.key !== key);

    localStorage.setItem(
      `@nome-do-app/itemsArray_${id}`,
      JSON.stringify(filteredItems)
    );

    localStorage.removeItem(`@nome-do-app/imageList_${key}`);

    setItems(filteredItems);
  }

  function setUpdate(text, key, img, avatar) {
    const updatedItems = JSON.parse(itemsArray);

    updatedItems.map((item) => {
      if (item.key === key) {
        item.text = text;
        item.img = img;
        item.avatar = avatar;

        setItems(updatedItems);

        localStorage.setItem(
          `@nome-do-app/itemsArray_${id}`,
          JSON.stringify(updatedItems)
        );
      }
    });
  }

  return (
    <itemContext.Provider value={{ setUpdate, itemsArray }}>
      <div className="TodoContainer">
        <header>
          <form id="to-do-form" onSubmit={addItem}>
            <input
              type="text"
              placeholder="Tarefa"
              value={currentItem.text}
              onChange={handleInput}
            />
            <button type="submit">+</button>
          </form>
        </header>

        <ListItems
          items={itemsArray !== null ? JSON.parse(itemsArray) : items}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
        />
      </div>
    </itemContext.Provider>
  );
};

export default TodoComponent;
