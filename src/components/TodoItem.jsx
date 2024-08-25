import { useState } from "react";
import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button click item", item.name);
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleClick(name) {
    // Toggle the `done` property of the item when clicked
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    const preCompleted = todos.filter((todo) => !todo.done);
    const afterCompleted = todos.filter((todo) => todo.done);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.flex}>
        <div className={styles.itemName}>
          <span className={className} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
        </div>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.btn}>
            X
          </button>
        </span>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
