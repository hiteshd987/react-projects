import React, { useEffect, useState } from 'react';

function Home () {

    const [time, setTime] = useState(new Date());
    
    useEffect(() =>{
        // console.log("Inside useEffect");
        const myinterval = setInterval(() => {
            setTime(new Date())
            console.log("Inside setInterval")
        },1000)

        return () => {
            clearInterval(myinterval);
            console.log("unmounting");
        }
    },[]); 

    return (
        <>
            <h1>{time.toLocaleTimeString()}</h1> 
        </>
    )
}

export default Home