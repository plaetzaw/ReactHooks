import React, {useState, useEffect} from 'react'

function LearnUE() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

useEffect (() => {
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
    }, [resourceType])
    //The second value of the useEffect hook is an array, whenever the values of that array are updated, the component will re-render
    //So if you pass in an empty array, it will ONLY render on the inital mount

    return (
        <div>
           <button onClick={() => setResourceType('posts')}>Posts</button>
           <button onClick={() => setResourceType('users')}>Users</button>
           <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}

export default LearnUE
