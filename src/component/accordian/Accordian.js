import React, { useState } from 'react'
import './accordian.css'
const data = [
    {
        question: 'Question 1',
        answer: 'Amitabh Bachchan (pronounced [əmɪˈt̪ɑːbʱ ˈbətːʃən]; born as Amitabh Srivastava;[1] 11 October 1942[9]) is an Indian actor, film producer, television host, occasional playback singer and former politician, who works in Hindi cinema. In a film career spanning over five decades, he has starred in more than 200 films. Bachchan is widely regarded as one of the most successful and influential actors in the history of Indian cinema.[10] He is referred to as the Shahenshah of Bollywood, Sadi Ke Mahanayak (Hindi for, "Greatest actor of the century"), Star of the Millennium, or Big B.[11] His dominance in the Indian movie scenario during the 1970s–80s made the French director François Truffaut call it a "one-man industry".[12][relevant? – discuss]'
        
    },
    {
        question: 'Question 2',
        answer: 'Srivastava;[1] 11 October 1942[9]) is an Indian actor, film producer, television host, occasional playback singer and former politician, who works in Hindi cinema. In a film career spanning over five decades, he has starred in more than 200 films. Bachchan is widely regarded as one of the most successful and influential actors in the history of Indian cinema.[10] He is referred to as the Shahenshah of Bollywood, Sadi Ke Mahanayak (Hindi for, "Greatest actor of the century"), Star of the Millennium, or Big B.[11] His dominance in the Indian movie scenario during the 1970s–80s made the French director François Truffaut call it a "one-man industry".[12][relevant? – discuss]'

    },
    {
        question: 'Question 3',
        answer: 'Truffaut call it a "one-man industry".[12][relevant? – discuss]'

    },
    {
        question: 'Question 4',
        answer: ' ˈ 11 October 1942[9]) is an Indian actor, film producer, television host, occasional playback singer and former politician, who works in Hindi cinema. In a film career spanning over five decades, he has starred in more than 200 films. Bachchan is widely regarded as one of the most successful and influential actors in the history of Indian cinema.[10] He is referred to as the Shahenshah of Bollywood, Sadi Ke Mahanayak (Hindi for, "Greatest actor of the century"), Star of the Millennium, or Big B.[11] His dominance in the Indian movie scenario during the 1970s–80s made the French director François Truffaut call it a "one-man industry".[12][relevant? – discuss]'

    },
    {
        question: 'Question 5',
        answer: 'film producer, television host, occasional playback singer and former politician, who works in Hindi cinema. In a film career spanning over five decades, he has starred in more than 200 films. Bachchan is widely regarded as one of the most successful and influential actors in the history of Indian cinema.[10] He is referred to as the Shahenshah of Bollywood, Sadi Ke Mahanayak (Hindi for, "Greatest actor of the century"), Star of the Millennium, or Big B.[11] His dominance in the Indian movie scenario during the 1970s–80s made the French director François Truffaut call it a "one-man industry".[12][relevant? – discuss]'

    }
]

// data ko dusre file se import karna sikho

const Accordian = () => {
    // const [show, setShow] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggle = (index) => {
      const selectedIndex = activeIndex == index ? null : index
      setActiveIndex(selectedIndex)
    }

  return (
    <div style={{margin: '150px'}} className='accordian'>
        
        {data.map((item, i)=>{
            return (
                <div key={i}>
                    <div className='accordian__question'
                    onClick ={() => handleToggle(i)}
                    >
                        <h2>{item.question}</h2>
                        <span >{activeIndex == i ? '-' : '+'}</span>
                        
                    </div>
                   
                    <p className='accordian__ans'>{activeIndex == i && item.answer}</p>
                </div>
                
            )
        })}

    </div>
  )
}

export default Accordian