import React, {useState, useEffect} from 'react'

const InfiniteScroll = () => {
    // repeat data jo ho raha hai usko fix karo

  const [todo, setTodo] = useState([])
  const [pageNo, setPageNo] = useState(1)
  console.log('pageNo', pageNo)

  const apiCall = async()=>{
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9&_page=1')
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${pageNo}`)
    const json = await res.json();
    // console.log('json', json)
    // setTodo(json )
    setTodo((prevData) => [ ...prevData, ...json ])
  }

  const handleInfiniteScroll = () => {
    
    // console.log('window.innerHeight', window.innerHeight)
    // console.log('document.documentElement.scrollTop', document.documentElement.scrollTop)
    // console.log('document.documentElement.scrollHeight', document.documentElement.scrollHeight)
    if(window.innerHeight + document.documentElement.scrollTop  >= document.documentElement.scrollHeight){
        setPageNo((prevState) => prevState + 1)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleInfiniteScroll)
    return () => window.removeEventListener('scroll', handleInfiniteScroll)
  },[])

  useEffect(()=> {
      apiCall()
      console.log('todo', todo)
  },[pageNo])

  return (
    <div style={{margin:'150px'}}>
        InfiniteScroll
        {todo.length > 0 && todo.map((item, i)=>{
            return (
                <div key={item.id} style={{marginBottom: '20px', 
                // <div key={i} style={{marginBottom: '20px', 
                border: '1px solid gray',
                padding: '20px'}}>
                    <span>{item.id}</span>
                    <div>{item.title}</div>
                </div>
            )
        })}
        </div>
  )
}

export default InfiniteScroll