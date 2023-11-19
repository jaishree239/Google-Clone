import React, {useState} from 'react'
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
]

const DropDown = () => {
    const [clicked, setClicked] = useState('')
    const handleDropDownChange = (e) => {
        // console.log('clicked', clicked)
        // console.log('e.target', e.target.value)
        const gettingEntireObject = data?.find((x) => x.id == e.target.value)
        console.log('gettingEntireObject', gettingEntireObject)
        setClicked(e.target.value)
    }
  return (
    <>
 <div style={{margin: '150px'}}>
        
        {/* <select value={clicked} onChange={handleDropDownChange}> */}
        <select value={clicked} onChange={(e) => handleDropDownChange(e)}>
            <option value=''>Select...</option>
            {data.length> 0 && data.map((item, i)=> {
                return (
                    <option key ={item.id} value={item.id}>{item.first_name}</option>
                )
            })} 
        </select>

    </div>
    <div>{clicked}</div>
    {/* <div>hoiiii</div> */}
    </>
   
  )
}

export default DropDown