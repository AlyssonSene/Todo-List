/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext";
import "./Todo.scss";

function Todo({ todo }) {
  const state = useContext(TodosContext);

  const toggleIsDoneHandler = (id) => {
    state.dispatch({
      type: "TODO_IS_DONE",
      id: id,
    });
  };

  const deleteHandler = (id) => {
    state.dispatch({
      type: "DELETE_TODO",
      id: id,
    });
  };
  return (
    <>
      <div className={`todo ${todo.isDone ? "done" : ""}`}>
        <button className="erase" onClick={() => deleteHandler(todo.id)}>
          x erase
        </button>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <div className="task-check">
          <input
            type="checkbox"
            defaultChecked={todo.isDone}
            onClick={() => toggleIsDoneHandler(todo.id)}
          />
          <label>{!todo.isDone ? "To-Do" : "Done"}</label>
        </div>
      </div>
    </>
  );
}

export default Todo;
