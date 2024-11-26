import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext.jsx";
import Todo from "../Todo/Todo.jsx";

function TodosList() {
  const state = useContext(TodosContext);

  return (
    <>
      <div className="todos">
        {state.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
