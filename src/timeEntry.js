import React, { useState } from 'react'
import ACTIONS from './timesDispatches'

const TimeEntry = ({ times, remove, edit }) => {
  const [toggle, setToggle] = useState("list");
  const [text, setText] = useState(times.text);
  return (
    <>
      
    </>
  )
}

export default TimeEntry
