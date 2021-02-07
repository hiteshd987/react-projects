import React, { useState } from 'react';
// import Home from './Home';
import CursorPosition from './CursorPosition';

const Conditional = () => {
    
    const [toggle,setToggle] = useState(false);

    return (
        <>
            {toggle ? <CursorPosition /> : null}
            <button onClick={() => setToggle(!toggle)}>Click</button>
            {/* {toggle && <CursorPosition />} */}
            
        </>

    )
}

export default Conditional