import React from 'react'
import './Save.css'

export default ({handleClick, curVal, newVal, field }) => {
    
    return (
            <button onClick={() => handleClick([...curVal, newVal])}>Save {field}</button>
    )
}
