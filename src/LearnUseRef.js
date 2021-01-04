import React, {useState, useEffect, useRef} from 'react'

//useRef is most commonly used to reference items within your HTML
//HTML items ALL have a "ref" property

//useRef is really good for accessing DOM elements as well as persisting values without causing a re-render

function LearnUseRef() {
    const [name, setName] = useState("")
    const nameChange = useRef(0)
    const prevName = useRef()
    //useRef does NOT cause your component to re-render, it is completely seperate from the component rendering cycle
    //Ref is very similar to state, you can store a previous value in it, and it will persist between renders

    useEffect(() => {
        prevName.current = name
        nameChange.current = nameChange.current + 1

    }, [name])

    // function focus() {
    //     inputRef.current.focus()
    //     console.log("focusing")
    // }

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <span>Hello, my name is {name} and it used to be {prevName.current}</span>
            <br/>
            <span>My name has been changed {nameChange.current} times</span>
            <br/>
            {/* <button onClick={focus}>Focus</button> */}
            
        </div>
    )
}

export default LearnUseRef
