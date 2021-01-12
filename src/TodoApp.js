import React, { useReducer } from "react";
import { initialState, reducer } from "./TodoReducer";
import Todo from "./TodoItem.js";
import AddTodo from "./AddTodo.js";
import "./TodoStyles.css"

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
  <h1>There are currently {state.counter} items</h1>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
  </>);
}
export default TodoApp;