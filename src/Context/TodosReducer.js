export const todosReducer = (todos, action) => {
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
    }
  }
};
