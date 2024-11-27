import { useState } from "react";
import { useTodos } from "../../Context/TodosContext";

function AddTodoModal() {
  const state = useTodos();
  const [title, setTitle] = useState(null);

  const [description, setDescription] = useState(null);

  const addTaskHandler = () => {
    if (!title || !description) {
      alert("Both informations are required");
    } else {
      state.dispatch({
        type: "ADD_TODO",
        payload: {
          title,
          description,
          isDone: false,
          id: Date.now(),
        },
      });
      state.setToggleModal(false);
    }
  };

  return (
    <>
      <div className="form">
        <h3>Add a new task</h3>
        <label htmlFor="title">Title *</label>
        <input
          autoFocus
          required
          type="text"
          name="title"
          placeholder="Enter a title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description *</label>
        <textarea
          required
          name="description"
          rows="4"
          placeholder="Enter a description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className="btn gray" onClick={addTaskHandler}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodoModal;
