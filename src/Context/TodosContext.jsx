/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
export const TodosContext = createContext("");

export function TodosProvider({ children }) {
  const initialTodos = localStorage.getItem("To-Dos")
    ? JSON.parse(localStorage.getItem("To-Dos"))
    : [];
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [toggleModal, setToggleModal] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    localStorage.setItem("To-Dos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodo = () => {
    switch (filterBy) {
      case "DONE": {
        return todos.filter((todo) => todo.isDone);
      }
      case "TODO": {
        return todos.filter((todo) => !todo.isDone);
      }
      default: {
        return todos;
      }
    }
  };

  return (
    <>
      <main>
        <TodosContext.Provider
          value={{
            todos,
            dispatch,
            toggleModal,
            setToggleModal,
            filterBy,
            setFilterBy,
            filteredTodo,
          }}
        >
          {children}
        </TodosContext.Provider>
      </main>
    </>
  );
}

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "TODO_IS_DONE": {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    }
    case "DELETE_TODO": {
      if (confirm("Are you sure you want to delete the to-do")) {
        return todos.filter((todo) => todo.id !== action.id);
      } else {
        return todos;
      }
    }
    case "ADD_TODO": {
      const exists = todos.some((todo) => todo.title === action.payload.title);
      if (exists) {
        alert("To-do already exists!");
        return todos;
      } else {
        return [...todos, action.payload];
      }
    }
  }
};

export const useTodos = () => {
  return useContext(TodosContext);
};
