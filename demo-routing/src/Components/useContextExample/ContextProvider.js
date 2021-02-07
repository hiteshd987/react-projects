import React, { createContext } from 'react'
import Binding from '../Binding';

{/* Creating context for passing some data direct to any specific component without prop drilling */}
function ContextProvider() {
   
 const FirstName = createContext();
 const LastName = createContext();

    return (
        <>
             <FirstName.Provider value={"Hitesh"} >
             <LastName.Provider value={"Derkar"} >
                <Binding />
             </LastName.Provider>
             </FirstName.Provider>
        </>
    )
}

export default ContextProvider;
// export { FirstName, LastName };