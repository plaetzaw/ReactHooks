import {useState, useEffect} from 'react'

function getSavedValue(key, initialvalue){
const saveValue = JSON.parse(localStorage.getItem(key))
if (saveValue) return saveValue

if (initialvalue instanceof Function) return initialvalue()

return initialvalue
}

export default function useLocalStorage(key, initialvalue){
const [value, setValue] = useState(() => {
    return getSavedValue(key, initialvalue)
})

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
}, [key, value])

return [value, setValue]
}