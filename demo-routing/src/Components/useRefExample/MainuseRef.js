import React, { useRef, useState, useEffect } from 'react'

function Main() {
    const [name, setName] = useState();
    const renderCount = useRef();

    useEffect(() => {
        // renderCount.current = renderCount.current + 1;
        renderCount.current = name;
    }, [name])

    // function focus () {
    //     renderCount.current.focus()
    // }

    return (
        <div>
            <input ref={renderCount} value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Current name: {name}</p>
            <p>Prev name: {renderCount.current}</p>
            {/* <button onClick={focus}>Focus</button> */}
        </div>
    )
}

export default Main
