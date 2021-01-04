import React, {useState, useMemo, useEffect} from 'react'

//Caching a value so you don't have to re-compute it every single time

//That said, if you do it too much throughout your application, it can bloat the memory useage and cause performance issues
//You should only useMemo where you need to, definitely NOT everywhere! Use it where the function that is being called is very slow!

//Referential equality

function LearnUseMemo(){
 const [number, setNumber] = useState(0)
 const [dark, setDark] = useState(false)
 const doubleNumber = useMemo(() => {
     return slowFunction(number)
    }, [number])
 const themeStyles = useMemo(()=>{ 
     return {
        backgroundColor: dark ? 'black' : 'white', 
        color: dark ? 'white' : 'black'
     }
 }, [dark])
 useEffect(()=>{
    console.log("theme changed")
 }, [])


  return (
    <>
     <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
     <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme?</button>
     <div style={themeStyles}>{doubleNumber}</div> 
    </>
  )
}

function slowFunction(num){
    console.log('calling slowass function')
    //Emulating a really slow, complicated function
    for (let i = 0; i < 1000000000; i++){}
    return num * 2
}

export default LearnUseMemo
