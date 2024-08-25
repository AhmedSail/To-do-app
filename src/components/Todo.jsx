import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const TodoTotal = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist setTodos={setTodos} todos={todos} />
      <Footer completedTodos={completedTodos} TodoTotal={TodoTotal}/>
    </div>
  );
}
