import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function Todolist({ todos, setTodos }) {
  const len = todos.length;
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  if (len > 0) {
    return (
      <div className={styles.list}>
        {sortedTodos.map((item) => (
          <TodoItem
            todos={todos}
            key={item.name}
            item={item}
            setTodos={setTodos}
          />
        ))}
      </div>
    );
  }
}
