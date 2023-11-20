import React, {useState, useEffect} from 'react'
import './pagination.css'

const Pagination = () => {
  const [result, setResult] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const [len, setLen ] = useState(0)
  const apiCall = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await (res.json())
    if(json.length> 0){
      setLen(json.length)
    // console.log('json', json)
    setResult(json)
    }
    
  }

// aisi api dundo jisme limit set kar sakte hai abhi 200 title ek 
// sath aa gaya hai ui par yeh perforance issue kare ga hum limit 
// se har par click par data mangwaye ge 

  useEffect(()=>{
    apiCall()
  },[])

  const handlePageChange = (clicked) => {
    if(pageNo > 0 && pageNo < 11 ){
    setPageNo(clicked)
      }
      // setPageNo(pageNo)

  }


  return (
    <div style={{margin:'150px'}}>
      
          <ul>

          {result.length >0 && result.slice(pageNo * 10 -10, pageNo *10).map((item)=>{
          // {result.length >0 && result.map((item)=>{
            return(
              <li key={item.id}>{item.id}</li>
            )
          })}
          </ul>
          {/* <div> */}
          <div className='page'>
            <span className={pageNo > 1 ? '' : 'page__disabled'} 
            onClick={() => handlePageChange(pageNo - 1)}
            >Previous</span>
            {[...Array(len/20)].map((_,i) => {
              return(
                <span key={i} 
                className={pageNo == i+1 ? 'page__selected' : ''}
                onClick={() => handlePageChange(i+1)}
                >{i+1}</span>
              )})}
              <span className={pageNo < 10 ? '' : 'page__disabled'}
              onClick={() => handlePageChange(pageNo + 1)}
              >Next</span>
          {/* </div> */}
          </div>
        
      
     
     
     
    </div>
  )
}

export default Pagination;

// const Pagination = () => {
//   const [productData, setProductData] = useState([])
//   const [page, setPage] = useState(1)
//   const [totalPages, setTotalPages] =  useState(0)
  

//   const fetchProduct =  async() => {
//     // const res = await fetch('https://dummyjson.com/products?limit=100')
//     const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10 -10}`)
//     const json = await res.json()
//     if(json && json.products){
//       setProductData(json.products)
//       setTotalPages(json.total/10)

//     }
//     console.log('json', json)
//   }

//   const selectedPageHandler = (selectedPage) => {
//     if(selectedPage >= 1 &&
//       // selectedPage <= productData.length/10 &&
//       selectedPage <= totalPages &&
//       selectedPage !== page)
//     setPage(selectedPage)
    
//   }

//   useEffect(()=>{
//     fetchProduct()
//   // },[])
//   },[page])

//   return (
//     <div>
//       <div className='products'>
// {/* {productData.length > 0 && productData.slice( page *10-10,page * 10).map((item)=>{ */}
// {productData.length > 0 && productData.map((item)=>{
//       return (
//         <div key={item.id} className='products__single'>
//          <img src={item.thumbnail} alt={item.title} />
//          <br/>
//         <span >{item.title}{item.id}</span>
//         </div>
       
//       )
//     })}
   
//     </div> 

//     {productData.length > 0 && (
//     <div className='products__pagination'>
//   <span
//   onClick={() => selectedPageHandler(page-1)}
//   className={page > 1 ? '' : 'pagination__disabled'}
//   >Previous</span>
//   {/* {[...Array(productData.length / 10 )].map((_,i)=>{ */}
//   {[...Array(totalPages)].map((_,i)=>{
//     return (
//       <span
//       key={i}
//       className={page == i+1 ?  'pagination__selected' : '' }
//        onClick={() => selectedPageHandler(i+1)}>{i+1}</span>
//     )
//   })}
//   {/* <span className={page < productData.length/10 ? '' : 'pagination__disabled' } */}
//   <span className={page < totalPages? '' : 'pagination__disabled' }
//   onClick={() => selectedPageHandler(page+1)}>Next</span>
  
//  </div>
//   )
// }
 
//     </div>
   
//   )
// }

// export default Pagination