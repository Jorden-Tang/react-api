import React, {useState, useEffect} from 'react'
const StyleWordPage = (props) =>{
    return(
    <h1 style = {{color: props.color1, backgroundColor: props.color2}}>The word is: {props.word}</h1>
    )
}

export default StyleWordPage