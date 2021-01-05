import React, {useState} from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

export const ThemeContext = React.createContext()

function LearnUseContext() {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>ToggleTheme</button>
            <FunctionContextComponent/>
            <ClassContextComponent/>
            </ThemeContext.Provider>
        </div>
    )
}

export default LearnUseContext
