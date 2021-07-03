import React from 'react';
import './form-input.styles.scss';

const FormInput =({handleChange, label, ...otherprops}) => {
    return (<div className="group">
        {
            label ?
            (<label className={`${otherprops.value.length ? "shrink":""} form-input-label`}>{label}</label>)
            :null
        }
        <input className="form-input" onChange={handleChange} {...otherprops}/>
    </div>)
}

export default FormInput;