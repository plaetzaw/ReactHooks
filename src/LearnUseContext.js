import React from 'react'
// import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import {ThemeProvider} from './ThemeContext'


function LearnUseContext() {
    return (
            <ThemeProvider>
            <FunctionContextComponent/>
            {/* <ClassContextComponent/> */}
            </ThemeProvider>
    )
}

export default LearnUseContext
