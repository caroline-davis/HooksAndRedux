import React from 'react';
import './Input.css';

export default ({ placeholder, value, onChange }) => {
    return (
        <input type= "text"
               placeholder= {placeholder}
               value={value}
               onChange={(e) => onChange(e.target.value)} >
        </input>
    )
}