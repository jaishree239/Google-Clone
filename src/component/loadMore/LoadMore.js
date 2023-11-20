import React, {useState, useEffect} from 'react'

const LoadMore = () => {
  const [todo, setTodo] = useState([])
  const [visible, setVisible] = useState(3)

  const apiCall = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json();
    // console.log('json', json)
    setTodo(json)
  }

  const handleLoadMore = () => {
    setVisible(preState => preState+3);
  }

  useEffect(()=> {
    apiCall()
  },[])

  return (
    <div style={{margin:'100px'}}>
      {todo.length > 0 && todo.slice(0,visible).map((item)=>{
        return (
          <div key={item.id} style={{marginBottom: '20px', 
          border: '1px solid gray',
          padding: '20px'}}>

            <div >{item.id}</div>
            <div >{item.title}</div>
          </div>
        )
      })}
      <button onClick={handleLoadMore}>Load More</button>
        </div>
  )
}

export default LoadMore