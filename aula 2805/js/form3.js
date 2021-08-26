var nome = [];
var senha = [];
var i = 0 - 1

//RECUPERANDO O BOTAO DO FORM.
const botaoSubmit = document.getElementById('btnEnviar');
botaoSubmit.addEventListener('click',function(){
    
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    
    i = i + 1;
    nome[i] = userName;
    senha[i] = userPass;
    console.log(nome)
    console.log(senha)

});








//VALIDANDO OS CAMPOS
function validaCamposForm(){
    return false;
}



// ENGESSADO
