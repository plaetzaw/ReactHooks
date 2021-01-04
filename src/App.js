import './App.css';
import { useState } from 'react'
// function firstCount(){
//   console.log("I run once")
//   return 4
// }

function App() {

  // const [count, setCount] = useState(4)
  // const [count, setCount] = useState(firstCount())
  // const [count, setCount] = useState({ count: 4, theme: "green"})

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState("blue")


  function downCount() {
    setCount(prevCount => prevCount - 1)
    setTheme("orange")
  }

    // setState(prevCount => {
      //setState will COMPLETELY override your previous state, so if you're using an object, all of the values will be overriden
      //by spreading the state, you can determine what properites you want to update!
      // return { ...prevCount, count: prevCount.count - 1}
    // })
  

  function upCount() {
    setCount(prevCount => prevCount + 1)
    setTheme("black")
  }

  return (
    <div className="App">
      <button onClick={downCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={upCount}>+</button>
    </div>
  );
}

export default App;
