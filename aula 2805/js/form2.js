
function Pessoa(nome,senha){
    this.nome = nome,
    this.senha = senha
}



//RECUPERANDO O BOTAO DO FORM.
const botaoSubmit = document.getElementById('btnEnviar');
botaoSubmit.addEventListener('click',function(){
    
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    const pessoa = new Pessoa(userName,userPass);
    console.log('Nome  : ' + pessoa.nome);
    console.log('Senha : ' + pessoa.senha);
});








//VALIDANDO OS CAMPOS
function validaCamposForm(){
    return false;
}



// ENGESSADO
