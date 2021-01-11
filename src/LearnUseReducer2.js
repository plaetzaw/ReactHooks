import React, {useState, useReducer} from 'react'
import Todo from './todo'

//Just how I learned to do an actionTypes file using Redux
export const ACTIONS = {
   ADD_TODO: "add-todo",
   TOGGLE_TODO: "toggle-todo",
   DELETE_TODO: "delete-todo",
   EDIT_TODO: "edit-todo",
   INCREASE: "increase",
}


export default function LearnUseReducer(){
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("")

    //Similar to Reducers in Redux
function reducer(todos, action){
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO: 
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTIONS.EDIT_TODO:
            return todos
        default:
            return todos
    }
}


function newTodo(name){
    return { id: Math.random(), name: name, complete: false}
}



function handleSubmit(e){
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName("")
}




console.log(todos)



    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </form>
        <br/>
        <h2>Current Todos</h2>
        {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
        </>
    )
}