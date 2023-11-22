import React, {useState, useEffect} from 'react'

const ReactCounter = () => {
    const [state, setState] = useState(0)
    
  return (
    <div style={{margin:'150px'}}>
    {/* <div > */}
        {/* ReactCounter */}
        Counter : {state}<br/>
        <button 
        onClick={()=>setState(state +1)}>Increment
        </button>

        <button 
        onClick={()=>setState(state -1)}
        // disabled ={state <= 0}>Decrement
        disabled ={state == 0}>Decrement
        </button>

        <button 
        onClick={()=>setState(0)}
        disabled ={state == 0}>Reset 
        </button>
        </div>
  )
}

export default ReactCounter