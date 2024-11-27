/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
export const TodosContext = createContext("");

const initialTodos = [
  {
    id: 0,
    title: "Do Groceries",
    description: "Buy apples, rice, juice and toilet paper.",
    isDone: false,
  },
  {
    id: 1,
    title: "Study React",
    description: "Understand context & reducers.",
    isDone: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn state management with Redux",
    isDone: false,
  },
];

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <main>
        <TodosContext.Provider
          value={{ todos, dispatch, toggleModal, setToggleModal }}
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
      }
      break;
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
