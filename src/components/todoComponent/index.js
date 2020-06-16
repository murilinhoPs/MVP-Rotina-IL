import React, { useState } from "react";
import "./styles.css";
import ListItems from "../todoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const TodoComponent = () => {
  const [items, setItems] = useState([]);

  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });

  function addItem(inputEvent) {
    inputEvent.preventDefault();

    const newItem = currentItem;

    if (newItem.text !== "") {
      const newItems = [...items, newItem];

      setItems(newItems);

      setCurrentItem({
        text: "",
        key: "",
      });
    }
  }

  function handleInput(inputEvent) {
    setCurrentItem({
      text: inputEvent.target.value,
      key: Date.now(),
    });
  }

  function deleteItem(key) {
    const filteredItems = items.filter((item) => item.key !== key);

    setItems(filteredItems);
  }

  function setUpdate(text, key) {
    console.log("items:" + items);

    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);

        item.text = text;
      }
    });
    setItems(items);
  }

  return (
    <div className="TodoContainer">
      {items.length !== 0 ? (
        <ListItems
          items={items}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
        />
      ) : (
        <header>
          <form id="to-do-form" onSubmit={addItem}>
            <input
              type="text"
              placeholder="Coloque a Tarefa"
              value={currentItem.text}
              onChange={handleInput}
            ></input>
            <button type="submit">+</button>
          </form>
        </header>
      )}
    </div>
  );
};

export default TodoComponent;
