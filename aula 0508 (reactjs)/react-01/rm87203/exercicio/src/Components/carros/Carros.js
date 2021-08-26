import React from 'react'
import carros from '../img/carros.jpg'

export default function Carros(props){
    return(
        <>
            <img src={carros} alt="Aventador"></img>
            <ul>
                <li>{props.carros[0]}</li>
                <li>{props.carros[1]}</li>
                <li>{props.carros[2]}</li>
                <li>{props.carros[3]}</li>
            </ul>
        </>
    )
}