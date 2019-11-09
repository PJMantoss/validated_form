import React from 'react'

export default function Input(props) {
    return (
        <div className="" >
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input 
                className="form-control" 
                id={props.name} 
                name={props.name} 
                type={props.inputType} 
                value={props.value} 
                onChange={props.handleChange} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}
