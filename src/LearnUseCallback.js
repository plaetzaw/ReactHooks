import React, {useState, useCallback} from 'react'
import List from './List'

function LearnUseCallback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)


    //useMemo vs useCallback
    //useMemo takes a function and returns the return value of the function
    //useCallback take a fucntion and returns the entire function
    //often used with referential equality
    
    const getItems = useCallback((incrementor) => {
        return [number, (number + 1 * incrementor), (number + 4 * incrementor)]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }
    return (
        <div style={theme}>
            <input
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default LearnUseCallback
