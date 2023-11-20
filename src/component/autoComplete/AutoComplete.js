import React, {useState, useEffect} from 'react'

const data = [
    {"id":6,"first_name":"Lila","last_name":"Klimaszewski","email":"lklimaszewski5@diigo.com","gender":"Female","city":"Iracemápolis"},
    {"id":7,"first_name":"Beale","last_name":"Dearden","email":"bdearden6@t.co","gender":"Male","city":"Senador Canedo"},
    {"id":8,"first_name":"Annice","last_name":"Venes","email":"avenes7@noaa.gov","gender":"Female","city":"Lianghu"},
    {"id":9,"first_name":"Judy","last_name":"Tarbett","email":"jtarbett8@weather.com","gender":"Female","city":"Banqiao"},
    {"id":10,"first_name":"Linn","last_name":"Goadbie","email":"lgoadbie9@fc2.com","gender":"Female","city":"Józefosław"},
    {"id":11,"first_name":"Miles","last_name":"Dumbell","email":"mdumbella@tmall.com","gender":"Male","city":"Lajaluhur"},
    {"id":12,"first_name":"Wallis","last_name":"Alexsandrowicz","email":"walexsandrowiczb@taobao.com","gender":"Male","city":"Jiaomingsi"},
    {"id":13,"first_name":"Betti","last_name":"McGrae","email":"bmcgraec@gnu.org","gender":"Female","city":"Krajan Tambakrejo"},
    {"id":14,"first_name":"Elly","last_name":"Gaveltone","email":"egaveltoned@omniture.com","gender":"Female","city":"Kamalasai"},
    {"id":15,"first_name":"Jeffrey","last_name":"Maddams","email":"jmaddamse@cdbaby.com","gender":"Male","city":"Jandaia do Sul"},
    {"id":16,"first_name":"hiiiiiiiii","last_name":"Maddams","email":"jmaddamse@cdbaby.com","gender":"Male","city":"Jandaia do Sul"},
    {"id":17,"first_name":"Hiiiggggg","last_name":"Maddams","email":"jmaddamse@cdbaby.com","gender":"Male","city":"Jandaia do Sul"},
    ]

const AutoComplete = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (e)=>{
        
        setSearchTerm(e.target.value)
    }
    const handleSearch = (query) => {
        setSearchTerm(query)     
    }

  return (
    <div style={{margin:'150px'}}>
        <input 
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleInputChange}
        />
            <button onClick= {()=> handleSearch(searchTerm)}>Search</button>
       
        {
         data.filter((option)=>{
    const seaching = searchTerm.toLowerCase();
    const fullName = option.first_name.toLowerCase();
    // startsWith ki jagah includes test karo
    return seaching && fullName.startsWith(seaching) &&  fullName!==  seaching    
    
        }).map((item)=>{
            return(
                <div key={item.id}
                onClick = { ()=> handleSearch(item.first_name.toLowerCase( ))}>{item.first_name}
                </div>
               
            )
        })}
      
        </div>
  )
}

export default AutoComplete