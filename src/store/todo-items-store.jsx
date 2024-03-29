import { createContext, useReducer } from "react";

export const TodoStoreItems = createContext({
  todoItems: [],
  handleAddItem: () => {},
  handleDeleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoStoreProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  //const [todoItems, setTodoItems] = useState([
  // { name: "Finish Gagan", dueDate: "11/03/2023" },
  //]);
  const handleAddItem = (itemName, itemDueDate) => {
    // console.log(`item name:${itemName} Date:${itemDueDate}`);

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // const newTodoItems = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,
    //   },
    // ];

    // setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItem);

    // console.log(`${todoItemName}`);
  };

  return (
    <TodoStoreItems.Provider
      value={{
        todoItems,
        handleAddItem,
        handleDeleteItem,
      }}
    >
      {children}
    </TodoStoreItems.Provider>
  );
};
export default TodoStoreProvider;
