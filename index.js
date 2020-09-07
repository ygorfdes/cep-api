const cep = document.querySelector('#cep');

//'ARROW FUNCTION' QUE EXIBE OS DADOS DIGITADOS PELO USUÁRIO
const exibirDados = (resultado) => {
    //PARA OS CAMPOS DO USUÁRIO QUE ESTARÃO NO RESULTADO...
    for(const campo in resultado) {
        //SE O CAMPO EXISTIR NA PAǴINA HTML...
        if(document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = resultado[campo];
        }
    }
}

//QUANDO OCORRER O EVENTO 'BLUR', A 'ARROW FUNCTION' SERÁ EXECUTADA
cep.addEventListener('blur', () => {
    const opcoes = {
        metodo: 'GET',
        modo: 'CORS',
        cache: 'default'
    }
    
    //O 'FETCH' FAZ UMA REQUISIÇÃO À API
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, opcoes)
    .then((resposta) => {
        resposta.json()
        .then((dados) => {
            exibirDados(dados)
        });
    });
});