async function buscarCep(){
    let cepInformado = document.getElementById('txtCep').value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => { 
        document.getElementById('txtCidade').value = json.localidade;
        document.getElementById('txtUf').value = json.uf;
    });
}

async function salvar(){
    let json = {
        nome: txtNome.value,
        cnpj: txtCnpj.value, 
        cep: txtCep.value, 
        cidade: txtCidade.value, 
        uf: txtUf.value 
    };
    
    fetch('http://localhost:8080/api/fabricantes', {
        method: "POST",
        body: JSON.stringify(json),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => {
        if(response.status == 500){
            alert('Preencha todos os campos');
        }
        response.json();
    } ) 
    .then(json => {
        alert("Fabricante salvo com sucesso");
        limparFormulario();
    });
}

function limparFormulario(){
    txtNome.value = '';
    txtCnpj.value = '';
    txtCep.value = '';
    txtCidade.value = '';
    txtUf.value = ''; 
}

async function pesquisar(){
    fetch('http://localhost:8080/api/fabricantes')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
}

function limparTabela(){
    document.getElementById("corpoTabela").innerHTML = "";
}

function preencherTabela(jsonFabricantes){
    this.limparTabela();
    // <TH>#</TH>
    //                     <TH>NOME</TH>
    //                     <TH>CNPJ</TH>
    //                     <TH>ENDEREÇO</TH>
    var corpoTabela = document.getElementById('corpoTabela');

    for(let i = 0; i < jsonFabricantes.length; i++){
        let novaLinha = corpoTabela.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonFabricantes[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonFabricantes[i].nome;

        let celulaCnpj = novaLinha.insertCell();
        celulaCnpj.innerText = jsonFabricantes[i].cnpj;

        let celulaEndereco = novaLinha.insertCell();
        celulaEndereco.innerText = jsonFabricantes[i].cidade 
                                + ' - ' + jsonFabricantes[i].uf 
                                + ' (' + jsonFabricantes[i].cep + ')';
    }
}

buscarTodosProdutos();