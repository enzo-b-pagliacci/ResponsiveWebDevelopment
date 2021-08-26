import React, {useState} from 'react'

export default function Header() {
   let paragraph={
      backgroundColor: "yellow"
   }

   const [estilo, setEstilo] = useState(paragraph)

   const alteraCor = ()=>{
      paragraph={
         backgroundColor: "red",
         color: "yellow"
      }
      setEstilo(paragraph)
   }

   return(
      <>
      <h1 className="header" style={estilo}>Titulo</h1>
      <p className="header" >paragrafo</p>
      <button onClick={()=> {alteraCor()}}>vermelho</button>
      </>
)}