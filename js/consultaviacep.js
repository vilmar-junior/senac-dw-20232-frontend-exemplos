/////////   Versão 1: chamadas direto em Javascript /////////
//URL de teste: https://viacep.com.br/ws/88495000/json/
//Referência:https://viacep.com.br/modulos_e_pacotes/
// //1- instanciar o prompt
// let prompt = require('prompt-sync')();

// //2- solicitar um CEP para o usuário no terminal
// let cepInformado = prompt('Informe o CEP:');

// //3- Chamar a função de consulta de cep
// buscarCEP(cepInformado);

// //Função assíncrona (não sabemos quando retorna)
// async function buscarCEP(cep){
//     //Parâmetros opcionais para a requisição
//     let options = {
//         method: "GET",
//         headers: {"Content-type": "application/json"}
//     };
//     //Esta variável é uma Promise (um objeto que será preenchido quando a requisição HTTP retornar)
//     //Atenção com as aspas, para passar o parâmetro CEP devemos usar o ACENTO GRAVE
//     const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options);

//     //Retorno da Promise
//     const json = await promiseConsultaCEP.json();
// }
///////////////////////////////////////////////////////////////

/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"
async function buscarCEP(){
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)

    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);

    //Retorno da Promise
    const json = await promiseConsultaCEP.json();
}
///////////////////////////////////////////////////////////////
