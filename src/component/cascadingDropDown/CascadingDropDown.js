import React, {useState, useEffect} from 'react'

const CascadingDropDown = () => {
    const [country, setCountry] = useState([])

    const apiCall = async ()=> {
        const res = await fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
        const json = await res.json()
        console.log('json', json)
    }

    useEffect(()=>{
        apiCall().catch(err =>{
            console.log('err', err)
        })
    },[])


  return (
    <div style={{margin:'150px'}}>
        CascadingDropDown
        <div style={{margin:'20px 0', }}>
            <select>
                <option>Select Country</option>
                <option>Country</option>
            </select>
        </div>
        <div style={{marginBottom:'20px'}}>
            <select>
                <option>Select State</option>
                <option>State</option>
            </select>
        </div>
        <div>
            <select>
                <option>Select City</option>
                <option>City</option>
            </select>
        </div>
        
        </div>
  )
}

export default CascadingDropDown