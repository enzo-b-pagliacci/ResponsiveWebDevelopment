import React from 'react'

export default function Adicao(props) {

   return(
      <div>
          <p>O resultado da operação é: {props.resultado}</p>
          <button onClick={()=> props.operacao()}> aumentar do filho</button>

      </div>
      
)}