import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoStoreItems } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { handleDeleteItem } = useContext(TodoStoreItems);
  return (
    <div className="container">
      <div className="row g-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger g-btn"
            onClick={() => handleDeleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
TodoItem.propTypes = {
  todoDate: PropTypes.string.isRequired,
  todoName: PropTypes.string.isRequired,
};

export default TodoItem;
