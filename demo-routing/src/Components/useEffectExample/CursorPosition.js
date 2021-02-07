import React, { useEffect, useState } from 'react'

function CursorPosition() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleClick = (e) => {
        setX(e.clientX)
        setY(e.clientY)
        console.log("Inside handleClick");
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleClick)

        return () => {
            console.log("Unmount Cursor Position")
            window.removeEventListener('mousemove',handleClick)
        }
    }, [])

    return (
        <>   
            Hooks X - {x} Y - {y}
            <h1>{new Date().toLocaleTimeString()}</h1> 
        </>
    )
}

export default CursorPosition
