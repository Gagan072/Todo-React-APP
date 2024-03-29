import { useContext } from "react";
import { TodoStoreItems } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems   } = useContext(TodoStoreItems);

  return (
    <div className={css.ItemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
