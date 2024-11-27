/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { todosReducer } from "./TodosReducer";
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
