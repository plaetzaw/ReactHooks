export const initialState = {
    counter: 2,
    todos: [{
      id: 1,
      text: "50 Free",
      time: 21.05,
    }, {
      id: 2,
      text: "50 Fly",
      time: 22.89,

    }],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        {
          const newCounter = state.counter + 1;
          const newTodo = {
            id: newCounter,
            text: action.text,
            time: action.time
          };
          return {
            counter: newCounter,
            todos: [...state.todos, newTodo],
          };
        }
      case "edit":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todo = Object.assign({}, state.todos[idx]);
          todo.text = action.text;
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1, todo);
          return {
            counter: state.counter,
            todos: todos,
          };
        }
      case "remove":
        {
          const updateCounter = state.counter - 1
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1);
          return {
            counter: updateCounter,
            todos: todos,
          };
        }
      default:
        return state;
    }
  };