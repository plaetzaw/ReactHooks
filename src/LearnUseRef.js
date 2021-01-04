import React, {useState, useEffect, useRef} from 'react'

//useRef is most commonly used to reference items within your HTML
//HTML items ALL have a "ref" property

function LearnUseRef() {
    const [name, setName] = useState("")
    const renderCount = useRef(1)
    const inputRef = useRef()
    //useRef does NOT cause your component to re-render, it is completely seperate from the component rendering cycle
    //Ref is very similar to state, you can store a previous value in it, and it will persist between renders

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <span>Hello, my name is {name}</span>
            <br/>
            <span>I rendered {renderCount.current} times</span>
            
        </div>
    )
}

export default LearnUseRef
