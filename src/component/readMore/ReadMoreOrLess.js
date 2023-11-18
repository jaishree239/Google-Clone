import React, {useState} from 'react'
import './readmoreorless.css'

// const ReadMoreOrLess = ({children}) => {
const ReadMoreOrLess = ({children, limit}) => {
    const [show, setShow] = useState(false)
    const handleToggle = () => {
        setShow( prevState => !prevState) 
    }
  return (
    <div className='readmore'>
        {/* {show ? children : children.substring(0, 100)} */}
        {show ? children : children.substring(0, limit)}
        <br/>
        <button onClick ={handleToggle}>
            {show ?   'Read Less' : 'Read More' } 
            </button>
        </div>
  )
}

export default ReadMoreOrLess