import React, {useState, useEffect} from 'react'
import './form.css';
import FormInput from './FormInput';

const Form = () => {
const [valuesForm, setValuesForm] = useState({
  username: '',
  email: '',
  birthday: '',
  password: '',
  confirmPassword: '',
})

const inputsMapping = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    label: 'Username'
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    label: 'Email'
  },
  {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday'
  },
  {
    id: 4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password'
  },
  {
    id: 5,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'ConfirmPassword',
    label: 'ConfirmPassword'
  },
]
console.log('valuesForm', valuesForm)

const handleChange = (e) => {
  setValuesForm({...valuesForm, 
    [e.target.name]: e.target.value})
}

  return (
    <div className='form'>
    {/* <div className='form__header'> */}
      <h1>Register</h1>
    {/* </div> */}
    <div className='form__inputs'>
      {inputsMapping.map((item)=> {
        return (
          <FormInput key={item.id} {...item} handleChange={handleChange} value={valuesForm[item.name]}/>
        )
      })}
      </div>
      <button>Submit</button>
      </div>
    
  )
}

export default Form