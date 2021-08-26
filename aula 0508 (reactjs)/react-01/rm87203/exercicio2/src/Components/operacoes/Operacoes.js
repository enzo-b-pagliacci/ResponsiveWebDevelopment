import React, {useState} from 'react'
import Adicao from '../adicao/Adicao'

export default function Operacoes() {

    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = ()=>{
        setValorState(valorState + 5)
        valorVariavel+=5
    }

   return(
      <>
      <p>valorState: {valorState}</p>
      <p>valorVariavel: {valorVariavel}</p>
      {console.log("Valor da variavel: " + valorVariavel)}
      <button onClick={()=> aumentar()}>aumentar</button>
      
      <Adicao resultado={valorState}/>

      </>
)}