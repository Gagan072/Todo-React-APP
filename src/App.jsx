import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
// import { useReducer } from "react";
import TodoStoreProvider from "./store/todo-items-store";

// const todoItemsReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         name: action.payload.itemName,
//         dueDate: action.payload.itemDueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name != action.payload.itemName
//     );
//   }
//   return newTodoItems;
// };

function App() {
  // const InitialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "4/10/2024",
  //   },
  // ];

  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // //const [todoItems, setTodoItems] = useState([
  // // { name: "Finish Gagan", dueDate: "11/03/2023" },
  // //]);
  // const handleAddItem = (itemName, itemDueDate) => {
  //   // console.log(`item name:${itemName} Date:${itemDueDate}`);

  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate,
  //     },
  //   };
  //   dispatchTodoItems(newItemAction);
  //   // const newTodoItems = [
  //   //   ...todoItems,
  //   //   {
  //   //     name: itemName,
  //   //     dueDate: itemDueDate,
  //   //   },
  //   // ];

  //   // setTodoItems(newTodoItems);
  // };

  // const handleDeleteItem = (todoItemName) => {
  //   const deleteItem = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName: todoItemName,
  //     },
  //   };
  //   dispatchTodoItems(deleteItem);

  //   // console.log(`${todoItemName}`);
  // };

  return (
    <TodoStoreProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoStoreProvider>
  );
}

export default App;
