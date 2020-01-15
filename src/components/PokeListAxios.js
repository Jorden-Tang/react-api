import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PokeListAxios = props =>{
    const [resData, setResData] = useState(null)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response =>{setResData(response.data.results)})}, []);
    
    console.log(resData)
    return(
        <div>
            <ul>
                {resData.map((item)=>
                <li>{item.name}</li>
                )}
            </ul>
        </div>
    )
}
export default PokeListAxios