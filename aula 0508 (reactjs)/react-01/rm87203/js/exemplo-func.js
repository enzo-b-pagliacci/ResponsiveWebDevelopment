// //Função padrão
// function soma(a,b){
//     return a + b
// }

// const subtracao = (c,d) =>c-d

// //Chamando a função no console  (padrão)
// console.log(soma(20,30));
// //Chamando a arrow-function 
// console.log(subtracao(30,20));

const soma = (a,b) =>{
    console.log(a+b);
    return a+b
}

//botao que foi declarado no html
//utilizando querySelector
//const botao = document.querySelector('#meuBotao')
//utilizando o getElementById
const botao = document.getElementById('meuBotao')

//Atrelando um elemento ao estilo css
botao.style.backgroundColor = "#fff"

//atrelando um evento ao elemento selecionado
botao.addEventListener('click', ()=>{
    soma(10,10);
})