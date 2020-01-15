import React, {useState, useEffect} from 'react'
import {Router, navigate} from '@reach/router';
const WordPage = (props) =>{
    return(
    (isNaN(props.word)) ? <h1>The word is : {props.word}</h1> : <h1>The number is : {props.word}</h1>
    )
}
export default WordPage