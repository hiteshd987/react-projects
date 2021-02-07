import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action){
    switch (action.type){
        case ACTIONS.INCREMENT :
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT :
            return { count: state.count - 1 } 
        default :
            return state       
    }
}

function MainuseReducer() {

    const [state, dispatch] = useReducer(reducer,{ count: 0 })
    
    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT})
    }

    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT})
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <p>{state.count}</p>
            <button onClick={decrement}>-</button>            
        </div>
    )
}

export default MainuseReducer
