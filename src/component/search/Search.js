import React,{useState, useEffect} from 'react'

const Search = () => {
    const [query, setQuery] = useState('')
    const [titleData, setTitleData] = useState([])


    const handleInputChange = (e) => {
        // console.log('query', e.target.value)
        setQuery(e.target.value)
    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=> res.json())
        .then((jsonData)=> {
            // console.log('jsonData', jsonData)
            setTitleData(jsonData)
        })
    },[])

    // console.log(titleData.filter((item) => item.title.includes('porro')))


    return (
        <>
        <div style={{margin: '150px'}}>
            <input 
            type ='text'
            placeholder='Search...'
            value={query}
            onChange={handleInputChange}
            />
            <ul>
                {titleData.filter((option)=> option.title.includes(query)).map((item)=>{
                    return (
                        <li key={item.title}>{item.title}</li>
                    )
                })}
            </ul>
            </div>
            </>
    )

}

export default Search

// const Search = () => {
//     const [query, setQuery] = useState('')
//     const [title, setTitle] = useState([])

//     const handleInputChange = (e) => {
//         setQuery(e.target.value)
//     }
//     // console.log('query', query)

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((res)=> res.json())
//         .then((json)=> {
//             // console.log('json', json)
//             setTitle(json)
//         }
//         )
//     },[])
//     // console.log(title.filter(item => item.title.includes('tempora') ))

//   return (
//     <>

//     <div style={{margin: '150px'}}>
//         <input
//         type='text'
//         placeholder='Search...'
//         value={query}
//         onChange={handleInputChange}
//        />
//        <ul>

//     {title.filter((opt)=>opt.title.includes(query)).map((item)=>{
//         return (
//             <li key={item.id}>{item.title}</li>
//         )
//     })}
//        </ul>
    
//     </div>
//     </>
//   )
// }

// export default Search