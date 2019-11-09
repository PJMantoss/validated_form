import React from 'react'

export default function TextField() {
    return (
        <div className="form-group">
            <label></label>
            <textarea 
                className="form-control" 
                name={props.name} 
                rows={props.rows} 
                cols={props.cols} 
                value={props.value} 
                onChange={props.handleChange} 
                placeholder={props.handleChange} 
            />
        </div>
    )
}
