var vetorAlunos = []

function gravar(){
    const botao = document.querySelector('#btnEnviar');
    botao.addEventListener('click', function(){
        const listaDeInputs = document.querySelectorAll('input');
        const aluno = new Aluno();
        
        for (elemento of listaDeInputs) {
            if(elemento.value != ''){
                vetorAlunos = elemento.value;
            }
        }
        
    });
}

function validaCamposForm(){
    //ARRAY DE ELEMENTOS
    const listaDeInputs = document.querySelectorAll('input');

    //CRIANDO VARIÁVEL DE CONTROLE
    let controle = true;

    //ITERAR A LISTA DE INPUTS
    for (elemento of listaDeInputs) {
        if(elemento.value == '' ){
            elemento.style.border = '2px solid #ff0000';
            controle = false;   
        }else{
            elemento.style.border = '1px solid #000000';
        }
    }
    return controle;
}


//objetos
//construtores

function Carro(){
    this.modelo = 'Fusca',
    this.ano = '1969',
    this.tipo = 'Sedã'
}

//Instanciar objeto
const carro = new Carro()
console.log('Modelo do veículo: ' + carro.modelo);
carro.modelo = "Maverick";
console.log('Modelo do veículo: ' + carro.modelo);

//Passando parametros
function Pessoa(nome,profissao,cpf){
    this.nome = nome;
    this.profissao = profissao,
    this.cpf = cpf
}

const pessoa = new Pessoa('Rufino', 'Caminhoneiro', 1234567890);
const pessoa1 = new Pessoa('Leandrinho', 'Barmen', 15678906454);
const pessoa2 = new Pessoa('Josilene', 'Florista', 45678903441);
const pessoa3 = new Pessoa('Davy Jones', 'Pirata', 89034417534);

//ARRAYS DE OBJETOS
const pessoas = [pessoa, pessoa1, pessoa2, pessoa3];
//ACESSANDO O VETOR DE OBJETOS
for (p  in pessoas) {
    console.log("OBJETO " + p + ' - Nome: ' + pessoas[p].nome);
}

//rotação de banner 
function bannerAnimado1(){
    const elementoImg = document.getElementById('titImg')
    elementoImg.src = './img/banner-1.png'; 
    elementoImg.alt = 'Girassol brilhante';
    setTimeout('bannerAnimado2()', 1000);
}

function bannerAnimado2(){
    const elementoImg = document.getElementById('titImg')
    elementoImg.src = './img/banner-2.png'; 
    elementoImg.alt = 'Girassol desbotado';
    setTimeout('bannerAnimado3()', 1000);
}

function bannerAnimado3(){
    const elementoImg = document.getElementById('titImg')
    elementoImg.src = './img/banner-3.png'; 
    elementoImg.alt = 'Girassol despixelizado';
    setTimeout('bannerAnimado1()', 1000);
}

bannerAnimado1();
