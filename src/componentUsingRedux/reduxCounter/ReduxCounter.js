import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Increment, Decrement, Reset} from '../../redux/actions/counterActions'

const ReduxCounter = () => {
  const counterState = useSelector(state => state.counterReduer)
  const dispatch = useDispatch()
  // console.log('counterState', counterState)
  return (
    <div style={{margin:'150px'}}>
      <div>Counter Value: {counterState}</div>
      <button onClick={()=> dispatch(Increment())}>Increment</button>
      <button onClick={()=> dispatch(Decrement())}
      disabled ={counterState ==0} >Decrement</button>
      <button onClick={()=> dispatch(Reset())}
      disabled ={counterState ==0}>Reset</button>
      
      </div>
  )
}

export default ReduxCounter


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Increment, Decrement, Reset } from '../../redux/actions/counterActions'
// // Add dependency redux and react redux
// // react redux Official React bindings for Redux.
// // R2CODE you tube channel

// const ReduxCounter = () => {
//   const counterState = useSelector(state => state.counterReducer)
//   const dispatch = useDispatch();
//   // console.log('counterState', counterState)
//   return (
//     <div
//     style={{margin:'150px'}}>
        
//         <div style={{marginBottom:'25px'}}>Counter : {counterState}</div>
//         <button onClick={() => dispatch(Increment())}>Increment</button>
//         <button onClick={() => dispatch(Decrement())}>Decrement</button>
//         <button onClick={() => dispatch(Reset())}>Reset</button>
//          </div>
//   )
// }

// export default ReduxCounter