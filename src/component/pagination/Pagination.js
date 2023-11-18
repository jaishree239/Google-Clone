import React, {useState, useEffect} from 'react'
import './pagination.css'

const Pagination = () => {
  const [productData, setProductData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] =  useState(0)
  // const [productData, setProductData] = useState([])

  const fetchProduct =  async() => {
    // const res = await fetch('https://dummyjson.com/products?limit=100')
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10 -10}`)
    const json = await res.json()
    if(json && json.products){
      setProductData(json.products)
      setTotalPages(json.total/10)

    }
    console.log('json', json)
  }

  const selectedPageHandler = (selectedPage) => {
    if(selectedPage >= 1 &&
      // selectedPage <= productData.length/10 &&
      selectedPage <= totalPages &&
      selectedPage !== page)
    setPage(selectedPage)
    
  }

  useEffect(()=>{
    fetchProduct()
  // },[])
  },[page])

  // thumbnail
  return (
    <div>
      <div className='products'>
{/* <ul> */}
{/* {productData.length > 0 && productData.slice( page *10-10,page * 10).map((item)=>{ */}
{productData.length > 0 && productData.map((item)=>{
      return (
        // <li>{item.title}</li>
        <div key={item.id} className='products__single'>
         <img src={item.thumbnail} alt={item.title} />
         <br/>
        <span >{item.title}{item.id}</span>
        </div>
       
      )
    })}
{/* </ul> */}
  
   
    </div> 

    {productData.length > 0 && (
    <div className='products__pagination'>
  <span
  onClick={() => selectedPageHandler(page-1)}
  className={page > 1 ? '' : 'pagination__disabled'}
  >Previous</span>
  {/* {[...Array(productData.length / 10 )].map((_,i)=>{ */}
  {[...Array(totalPages)].map((_,i)=>{
    return (
      <span
      key={i}
      className={page == i+1 ?  'pagination__selected' : '' }
       onClick={() => selectedPageHandler(i+1)}>{i+1}</span>
    )
  })}
  {/* <span className={page < productData.length/10 ? '' : 'pagination__disabled' } */}
  <span className={page < totalPages? '' : 'pagination__disabled' }
  onClick={() => selectedPageHandler(page+1)}>Next</span>
  
  {/* } */}
  
 </div>
  )
}
 
    </div>
   
  )
}

export default Pagination