//Função para preveni o evento submit do formulário
window.onsubmit = function(event) {
    event.preventDefault();
    console.log("Evento submit acionado!");

    validar();
};

//Função para limpar os campos dos formulário
const limparCampos = () => {
    campoN1[0].value = '';
    campoN2[0].value = '';
    campoN3[0].value = '';
    divResult.classList.add('oculta');
};

//Função para criar tag HTML
const criarTag = function(tag) {
    const elemento = window.document.createElement(tag);
    return elemento;
};


//Mostrar o resultado 
const resultadoCalc = (operadorM, n1, n2, result) => {
    divResult.classList.remove('oculta');
    divResult.innerHTML = `<p>A ${operadorM} entre ${n1} e ${n2} é: ${result}</p>`;
}; 

/* ------------------ Funções para calcular as 4 operações matemática ------------------ */
const soma = function() { //Função para soma
    console.info('Operador de soma');

    //Criando variáveis para armazenar os valores
    const n1 = Number(campoN1[0].value);
    const n2 = Number(campoN2[0].value);
    const operador = 'soma';

    //Somando 
    const calculo = n1 + n2;

    //Resultado
    resultadoCalc(operador, n1, n2, calculo);
};

const subtracao = function() { //Função para subtração
    console.info('Operador de subtração');

    //Criando variáveis para armazenar valores
    const n1 = Number(campoN1[0].value);
    const n2 = Number(campoN2[0].value);
    const operador = 'subtração';

    //Realizando o cálculo de subtração
    const calculo = n1 - n2; 

    //Chamando a função para mostrar o resultado
    resultadoCalc(operador, n1, n2, calculo);
}

const multiplicacao = function() { //Função para multiplicação
    console.info('Operador de multiplicação');

    //Criando as variáveis
    const n1 = Number(campoN1[0].value);
    const n2 = Number(campoN2[0].value);
    const operador = 'multiplicação';
    
    //Realizando o cálculo da multiplicação
    const calculo = n1 * n2;

    //Chamando a função para mostrar o resultado
    resultadoCalc(operador, n1, n2, calculo);
}

const divisao = function() { //Função para divisão
    console.info('Operador de divisão');

    //Criando as variáveis
    const n1 = Number(campoN1[0].value);
    const n2 = Number(campoN2[0].value);
    const operador = 'divisão';
    
    //Realizando o cálculo da multiplicação
    const calculo = n1 / n2;

    //Chamando a função para mostrar o resultado
    resultadoCalc(operador, n1, n2, calculo.toFixed(2));
}
/* -------------------------------------------------------------------------------------- */

//Função para verificar o operador
const verificandoOperador = function(operadorMatematico) {
    const operate = operadorMatematico;

    if(operate === 'soma') {
        soma();
    } else if(operate === 'subtracao') {
        subtracao();
    } else if(operate === 'multi') {
        multiplicacao();
    } else if(operate === 'divisao') {
        divisao();
    }
};

//Função para validar o campo 
const validar = () => {
    const operador = campoN3[0].value;
    const erro = 'Campo inválido';

    /*
        const paragrafo = criarTag('p');
        paragrafo.textContent = '';
        paragrafo.textContent = 'Olá, mundo!';
        divResult.appendChild(paragrafo);
    */

    if(campoN1[0].value === '') {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else if(campoN2[0].value === '') {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else if(campoN3[0].value === '') {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else if(campoN1[0].value === '' && campoN2[0].value === '' && campoN3[0].value === '') {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    }
    
    if(isNaN(campoN1[0].value)) {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else if(isNaN(campoN2[0].value)) {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else if(isNaN(campoN1[0].value) && isNaN(campoN2[0].value) && isNaN(campoN3[0].value)) {
        divResult.classList.remove('oculta');
        divResult.innerHTML = tagP.textContent = erro;
    } else {
        verificandoOperador(operador);
    } 

};

//Variáveis constante para armazenar os elementos HTML do formulário
const btnLimpar = window.document.getElementById('btnLimpar');
const campoN1 = window.document.getElementsByName('campoN1');
const campoN2 = window.document.getElementsByName('campoN2');
const campoN3 = window.document.getElementsByName('operador');
const divResult = window.document.querySelector('div#resultado');

//Escuntando um evento
btnLimpar.addEventListener('click',limparCampos);