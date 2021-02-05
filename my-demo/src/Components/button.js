import React from 'react'

function Button(props) {
    return (
        <div>
            <input type="button" value={props.label}
                onClick = {props.handleClick}
            />
        </div>
    )
}

export default Button


