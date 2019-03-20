import React from 'react'

const Counter = (props) => (
    <React.Fragment>
        <button onClick={props.decrement}>-</button>
        <span>{props.state}</span>
        <button onClick={props.increment}>+</button>
        <div>
            <button onClick={props.reset}>Reset</button>
        </div>
    </React.Fragment>
)

export default Counter