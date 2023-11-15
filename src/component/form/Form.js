import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
    {/* <div>Form hiii</div> */}
    {/* <div>Form hiii</div> */}
    <div className='form__header'>
      <h1>Login</h1>
    </div>
    <div className='form__inputs'>
      <div className='form__input'>
      <label>User Name</label>
      <input type='text'/>
      </div>
      <div className='form__input'>
      <label>Email</label>
    <input type='email'/>
      </div>
      <div className='form__input'>
      <label>Date Of Birth</label>
    <input type='date'/>
      </div>
      <div className='form__input'>
      <label>Password</label>
    <input type='password'/>
      </div>
      <div className='form__input'>
      <label>Confirm Password</label>
    <input type='password'/>
      </div>
    </div>
    
    {/* <label>Name</label>
    <input/>
    <label>Name</label>
    <input/> */}
    </div>
    
  )
}

export default Form