import React, { useContext } from 'react'
import { FirstName, LastName } from './ContextProvider'

function DemouseContext() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            Name: {fname}  {lname}
        </>
    )
}

export default DemouseContext
