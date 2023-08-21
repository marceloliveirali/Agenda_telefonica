const form = window.document.getElementById('form-atvidade');
const cadastrosNomes = [];
const cadastroPhones = [];
const imgTicado = `<img src="./imagens/vector61-193-01-removebg-preview.png" alt="Símbolo de confirmação" />`;

let lines = '';

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    addline();
    atualizandoTabela();
    window.document.getElementById('total-number').innerHTML = totalCadastros();
});

function addline() {
    const inputName = window.document.getElementById('person-name');
    const inputPhone = window.document.getElementById('person-phone');

    if (cadastrosNomes.includes(inputName.value)) {
        alert(`O cadastro do contato de ${inputName.value} já foi feita`);
    } else {
        cadastrosNomes.push(inputName.value);
        cadastroPhones.push(inputPhone.value);

        let line = `<tr>`;
        line += `<td>${inputName.value}</td>`;
        line +=`<td>${inputPhone.value}</td>`;
        line += `<td>${imgTicado}</td>`;
        line += `</tr>`;

        lines += line;

        inputName.value = '';
        inputPhone.value = '';
    }
}

function atualizandoTabela() {
    const corpoTabela = window.document.querySelector('tbody');
    corpoTabela.innerHTML = lines;
}

function totalCadastros() {
    let numeroCadastro = cadastrosNomes.length;
    
    return numeroCadastro;
    
}