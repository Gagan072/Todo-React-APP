import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoStoreItems } from "../store/todo-items-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { handleAddItem } = useContext(TodoStoreItems);

  // const handleNameChange = (event) => { //using usestate event method
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleButtonClicked = (event) => {
    event.preventDefault();
    const TodoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleAddItem(TodoName, dueDate);
  };

  return (
    <div className="container text-center ">
      <div className="row g-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Todo here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            //  value={dueDate}
            ref={dueDateElement}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success g-btn"
            onClick={handleButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
