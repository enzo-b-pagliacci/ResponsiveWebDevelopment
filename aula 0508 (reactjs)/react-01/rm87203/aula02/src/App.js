import React from 'react'
import './App.css'
import CompTeste1 from './compTeste1'


export default function App(){
    
    let paragraph={
        textAlign:'Justify',
        color:'#00ff00',
        textIndent:'50px',
        fontSize:'2em'
    }
    
    return(
        <>
            <h1>Css externo</h1>
            <p style={{fontSize: '3em', color:'#ff000'}}>css inline no javascript</p>
            <p style={paragraph}>css inline com componente</p>       
            <p className="exemplo1">Puxando a classe</p> 
            <CompTeste1></CompTeste1>      
        </>
    )
}