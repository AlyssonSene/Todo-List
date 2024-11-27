import { useTodos } from "../../Context/TodosContext.jsx";
import Todo from "../Todo/Todo.jsx";

function TodosList() {
  const state = useTodos();

  return (
    <>
      <div className="todos">
        {state.filteredTodo().length ? (
          state.filteredTodo().map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <span>
            No tasks to be shown. Try clearing the filter or adding a new task
          </span>
        )}
      </div>
    </>
  );
}

export default TodosList;
