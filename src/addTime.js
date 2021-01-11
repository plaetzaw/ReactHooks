import React, {useState} from 'react'
import ACTIONS from './timesDispatches'

const AddTime = () => {
    const [text, addText] = useState("")
  return (
    <>
      <div>
          <input value={text} onChange={e => addText(e.target.value)}/>
          <button onClick={()=> {ACTIONS.ADD(text); addText("")}}>Add</button>
      </div>
    </>
  )
}

export default AddTime
