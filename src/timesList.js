import React, {useReducer} from 'react'
import { ACTIONS, initialState, reducer} from './timesDispatches'
import AddTime from './addTime'
import TimeEntry from './timeEntry'

const TimesApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <AddTime
    add ={text => dispatch({type: ACTIONS.ADD, text: text})}
    />
    {state.times.map(t => (
        <TimeEntry
        key={t.id}
        time={t}
        remove={() => dispatch({type: ACTIONS.DELETE, ID: t.id})}
        edit={text => dispatch({type: ACTIONS.EDIT, ID: t.id, text: text})}
        />
    ))}
    </>
  )
}

export default TimesApp
