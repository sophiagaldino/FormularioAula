function validarNome(nome){
    let regex = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)*$/;
    return regex.test(nome)
}
function validarCpf(cpf) {
    if (cpf.length > 11) {
        return false;
    }
    return true;
 
}

function validarDataDeNascimnto(dataDeNascimento) {
    let regex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/;
    return regex.test(dataDeNascimento)
    
} 
function validarTelefone(telefone) {
    return true;
    // let regex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;
    // return regex.test(telefone)
}


function validarEmail(email){
   let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
   return regex.test(email)
}


function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let dataDeNascimento = document.getElementById('dataDeNascimento').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;


    if(!validarNome(nome)){
        alert("Nome inválido")
        return
    }

    if (!validarCpf(cpf)) {
        alert("Cpf inválido")
        return
    }

    if (!validarDataDeNascimnto(dataDeNascimento)) {
        alert("Data de nascimento inválida")
        return
    }

    
    if (!validarTelefone(telefone)){
        alert("Telefone inválido")
        return
    }
    
    if (!validarEmail(email)) {
        alert("Email inválido")
        return
    }

    alert(' salvo com sucesso!')
    document.getElementById('formularioPaciente').reset();
    return

}  


    document.getElementById('formularioPaciente').addEventListener('submit', validarFormulario);
    
//document.getElementById só existe um ex:cpf
