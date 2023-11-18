import React from 'react'
import ReadMoreOrLess from './ReadMoreOrLess';

const ReadMore = () => {
  return (
    <div>
       {/* <ReadMoreOrLess> */}
       <ReadMoreOrLess limit = '100' >
       The substring() method of String values returns the 
       part of this string from the start index up to and 
       excluding the end index, or to the end of the string 
       if no end index is supplied.
       substring(indexStart) 
       substring(indexStart, indexEnd)
    </ReadMoreOrLess>
       <ReadMoreOrLess limit = '100' >
       The substring() method of String values returns the 
       part of this string from the start index up to and 
       excluding the end index, or to the end of the string 
       if no end index is supplied.
       substring(indexStart) 
       substring(indexStart, indexEnd)
    </ReadMoreOrLess>
       <ReadMoreOrLess limit = '100' >
       The substring() method of String values returns the 
       part of this string from the start index up to and 
       excluding the end index, or to the end of the string 
       if no end index is supplied.
       substring(indexStart) 
       substring(indexStart, indexEnd)
    </ReadMoreOrLess>
    </div>
  )
}

export default ReadMore