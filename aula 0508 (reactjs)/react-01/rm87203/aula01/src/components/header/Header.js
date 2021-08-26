import React from 'react'
import Dados from '../dados/Dados'
import Imagem from '../imagem/Imagem'
import Ligacao from '../ligacao/Ligacao'


export default function Header(){
    return(
        <header className="App-header">
            <Imagem/>
            <Ligacao/>
            <Dados/>
        </header>
    )
}