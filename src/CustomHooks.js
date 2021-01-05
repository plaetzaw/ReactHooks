import React from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'



//When creating a custom hook, start the hook name with useX, this allows React to do internal error checking for you
function CustomHooks() {
    const [name, setName] = useLocalStorage("name", "")
    useUpdateLogger(name)
    return (
       <input
       type="text"
       value={name}
       onChange={e => setName(e.target.value)}
       />
    )
}

export default CustomHooks
