import React, {useState, useEffect} from 'react'

const ApiCall = () => {
    const[todo,setTodo] = useState([])

//     const fetchApi = ()=>{
//         try {
//             fetch('https://jsonplaceholder.typicode.com/todos')
//             .then((res)=>
//              res.json())
//             .then((data)=> {
//           setTodo(data)
//         //   console.log('data', data)
//             }
          
//             )
//         } catch (error) {
// console.error('error in data fetching', error)
//         }
      
//     }
    const fetchApi = async ()=>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json =  await res.json()
            
          setTodo(json)
        //   console.log('json', json)
            
          
            
        } catch (error) {
console.error('error in data fetching', error)
        }
      
    }
    useEffect(()=>{
        fetchApi()
    },[])
    
  return (
    <>
    <div style={{margin: '100px'}}>
        Api Call
        {/* {todo.title} */}
<ul>{todo.map((item,index)=>{
    return (
        <li key={item.id}>{item.title}</li>
    )
})}</ul>

    </div>
    
    </>
    
  )
}

export default ApiCall