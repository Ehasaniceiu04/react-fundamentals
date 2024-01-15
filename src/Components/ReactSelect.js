import React,{useState} from 'react'

function ReactSelect() {
    const [country,setCountry]=useState(0);
    const countries=[{id:1,name:'Bangladesh'},{id:2,name:"India"},{id:3,name:"Nepal"},{id:4,name:"Pakistan"}];
    const countryOption=countries.map(x=><option value={x.id}>{x.name}</option>)
  return (
    <div className='mt-5'>
        <select className='form-select' value={country} onChange={(event)=>setCountry(event.target.value)}>
            <option>Select Country</option>
            {countryOption}
        </select>
        {country}
    </div>
    
  )
}

export default ReactSelect
