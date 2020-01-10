import React from 'react'
import './Save.css'

export default ({handleClick, curVal, newVal, field }) => {

    return (
            <button className="saveBtn" onClick={() => handleClick([...curVal, newVal])}>Save {field}</button>
    )
}

