import React, {useState} from 'react'
import Lambo from '../img/carros.jpg'
import Operacoes from '../operacoes/Operacoes'
import CompTeste from '../teste(state)/CompTeste.js'
import CaixaTeste from '../caixateste/CaixaTeste'


export default function Corpo() {

   const [ex2, setValor] = useState('Enzo')

    const nome = ()=>{
        setValor('Breno')
    }

   return(
      <>
      <h2 className="corpo">subtitulo</h2>
      <img src={Lambo} alt="Lamborghinni" />
      <CompTeste/>
      <Operacoes/>
      <p className="corpo">paragrafo 1</p>
      <p className="corpo">paragrafo 2</p>
      <p className="corpo">paragrafo 3</p>
      <p className="corpo">paragrafo 4</p>
      <hr/>
      <button onClick={()=> nome()}>Apelido do Ale</button>
      <p>{ex2} do pai</p>
      <CaixaTeste nomeMudado={ex2} />
      </>
)}