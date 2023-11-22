import React from 'react'
import './formInput.css'

const FormInput = (props) => {
    // console.log('props', props)
    const {label, handleChange,...inputProps} = props;
    // console.log('label', props[0].label)
  return (
    <div>

<div className='form__input'>
      <label>{label}</label>
      <input 
        {...inputProps}
        onChange={handleChange}
      />
      </div>
    </div>

  )
}

export default FormInput