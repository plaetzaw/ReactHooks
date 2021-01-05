import React, {useState}from 'react'


//When creating a custom hook, start the hook name with useX, this allows React to do internal error checking for you
function CustomHooks() {
    const [name, setName] = useState("")
    return (
       <input
       type="text"
       value={name}
       onChange={e => setName(e.target.value)}
       />
    )
}

export default CustomHooks
