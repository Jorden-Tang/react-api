import React, {useEffect, useState} from 'react'
import {nagivate, router} from '@reach/router'
import axios from 'axios'

const SearchForm = (props) =>{
    const [state, setState] = useState({
        name: "",
        category: "",
        id: -1,
    })

    const getData = (event) =>{
        event.preventDefault();
        console.log(state.category)
        axios.get('https://swapi.co/api/'+ state.category+"/"+ state.id + "/")
            .then(response =>{
                console.log(response)
                setState({name: response.data.name})
            })
    }
    const handleFormChange = (event) =>{
        // console.log(event.target.value)
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    return(

        <>
        <form onSubmit = {getData} onChange = {handleFormChange}>
            <select name  = "category" value = {state.category}>
                <option value = "films">films</option>
                <option value = "starships">starships</option>
                <option value = "vehicles">vehicles</option>
                <option value = "species">species</option>
                <option value = "people">people</option>
            </select>
            <label>Id: </label>
            <input type = "Text" name = "id"/>
            <input type = "Submit" value = "Search"/>
        </form>
        <h1>{state['name']}</h1>
        </>
    );
}
export default SearchForm
