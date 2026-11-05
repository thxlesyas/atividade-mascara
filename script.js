function mascaraCEP() {
    var cep = document.getElementById("cep").value;
    
    if (cep.length == 5) {
        document.getElementById("cep").value = cep + "-";
    }
}

function mascaraCPF(){
    var cpf = document.getElementById("cpf").value;

    if(cpf.length == 3){
        document.getElementById("cpf").value = cpf + ".";
    }
    else if(cpf.length == 2){
        document.getElementById("cpf").value = cpf + "-";
    }
}

function mascaraTelefone() {
    var telefone = document.getElementById("telefone").value;

    if (telefone.length == 3) {
        document.getElementById("telefone").value = telefone + " (";
    }
    else if (telefone.length == 7) {
        document.getElementById("telefone").value = telefone + ") ";
    }
    else if (telefone.length == 14) {
        document.getElementById("telefone").value = telefone + "-";
    }
}

function mascaraCNPJ() {
    var cnpj = document.getElementById("cnpj").value;

    if (cnpj.length == 2) {
        document.getElementById("cnpj").value = cnpj + ".";
    }
    else if (cnpj.length == 6) {
        document.getElementById("cnpj").value = cnpj + ".";
    }
    else if (cnpj.length == 10) {
        document.getElementById("cnpj").value = cnpj + "/";
    }
    else if (cnpj.length == 15) {
        document.getElementById("cnpj").value = cnpj + "-";
    }
}


// pra ver tudo oque foi escrito
function enviar(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var cep = document.getElementById("cep").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var cnpj = document.getElementById("cnpj").value;

    console.log("Nome: " + nome);
    console.log("Endereço: " + endereco);
    console.log("CEP: " + cep);
    console.log("CPF: " + cpf);
    console.log("Telefone: " + telefone);
    console.log("CNPJ: " + cnpj);

    alert("Formulário enviado");
}