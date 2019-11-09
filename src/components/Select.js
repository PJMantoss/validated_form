import React from 'react'

export default function Select() {
    return (
        <div className="form-group">
            <label for={props.name}>{props.title}</label>
            <select 
                className="form-control" 
                id={props.name} 
                name={props.name} 
                value={props.value} 
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                
                {props.options.map(option => {
                    return(
                        <option 
                            key={option} 
                            value={option} 
                            label={option}
                        >
                            {option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
