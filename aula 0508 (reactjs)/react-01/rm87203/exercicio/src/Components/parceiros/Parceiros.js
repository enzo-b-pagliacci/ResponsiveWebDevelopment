import React from 'react'

export default function Parceiros(props){
    return(
        <>
            <h2>Parceiros</h2>
            <p>Multiplicação: {props.conta(2,4)}</p>
            <a href="#">link1</a>
            <a href="#">link2</a>
            <a href="#">link3</a>
            <a href="#">link4</a>
            
        </>
    )
}