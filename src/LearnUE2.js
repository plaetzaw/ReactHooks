import React, {useState, useEffect} from 'react'

function LearnUE2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = ()  => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        //Your return statement will be ran first, so it serves as a cleanup code for whatever else is in your UE code
        return () => {
            window.removeEventListener('resize', handleResize
            )
        }
    }, [])
    
  return (
    <div>
        {windowWidth}
      
    </div>
  )
}

export default LearnUE2
