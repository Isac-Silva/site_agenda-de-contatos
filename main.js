const form = document.getElementById('form-contato');
const nome = [];
const numeroTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
    atualizaSomaContato();
})

function adicionaContato() {
    const inputNome = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-contato')

    if (nome.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido!`);
    } else {
        nome.push(inputNome.value);
        numeroTelefone.push(parseInt(inputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';    
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaSomaContato() {
    document.getElementById('soma-total-contatos').innerHTML = nome.length;
}


