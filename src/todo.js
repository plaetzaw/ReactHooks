import React from 'react'
import { ACTIONS } from './LearnUseReducer2'

function Todo({todo, dispatch}) {
  return (
    <>
      <span style={{ color: todo.complete ? "#AAA" : "#000"}}>{todo.name}</span>
      <br/>
      <p>{todo.id}</p>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>

      <br/>
    </>
  )
}

export default Todo
