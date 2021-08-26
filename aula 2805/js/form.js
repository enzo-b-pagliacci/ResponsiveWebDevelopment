
function Pessoa(nome,senha){
    this.nome = nome,
    this.senha = senha
}

//array de dados
var dados = ['', ''];




//recuperando o botao do form
const botaoSubmit = document.getElementById('btnEnviar');

botaoSubmit.addEventListener('click', function(){
    //criando um vetor de elementos(inputs)
    const listaInputs = document.querySelectorAll('input');

    //Iterar a lista de inputs
    for (i  in listaInputs) {
        if ((listaInputs[i].value != '') && (listaInputs[i].type != 'checkbox') && (listaInputs[i].type != undefined)) {
            dados[i] = listaInputs[i].value;
        }
    }

    const pessoa = new Pessoa(dados[0], dados[1]);
    console.log('Nome: ' + pessoa.nome)
    console.log('Senha: ' + pessoa.senha)
  


});


//Validando campos
function validaCamposForm(){
    return false;
}



//DINAMICO


