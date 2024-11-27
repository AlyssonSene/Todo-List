import { useTodos } from "../../Context/TodosContext.jsx";
import Todo from "../Todo/Todo.jsx";

function TodosList() {
  const state = useTodos();

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
