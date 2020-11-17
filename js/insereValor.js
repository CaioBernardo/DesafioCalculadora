//Coloca simbolos no input da calculadora
var simbiloMais = '+';
var simboloMenos = '-';
var simbiloVezes = '×';
var simboloDividido = '÷';
var simboloParentesesDireito = '(';
var simboloParentesesEsquerda = ')';
var simboloPonto = '.';

//Calculadora
var primeiraNumero = 0;
var segundoNumero = 0;
var calculoFeito = '';
var resultado;


//Botão Mais '+'
BtMais.addEventListener('click', function (event) {

    //Verifica para realizar um conta por vez.
    if(calculoFeito == 'Menos' || calculoFeito == 'Vezes' ||  calculoFeito == 'Divi'){

        alert("Só é permitido um calculo por vez");

    }else{

        //Atribui para realizar a conta
        calculoFeito = 'Mais';

        //Colocar o valor digitado
        document.getElementById("displayA").value += simbiloMais;

        //Atriu os valores as variavés
        primeiraNumero = segundoNumero;
        segundoNumero = 0;

    }

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Menos '-'
BtMenos.addEventListener('click', function (event) {
    
    //Verifica para realizar um conta por vez.
    if(calculoFeito == 'Mais' || calculoFeito == 'Vezes' ||  calculoFeito == 'Divi'){

        alert("Só é permitido um calculo por vez");

    }else{

        //Atribui para realizar a conta
        calculoFeito = 'Menos';

        //Colocar o valor digitado
        document.getElementById("displayA").value += simboloMenos;

        //Atriu os valores as variavés
        primeiraNumero = segundoNumero;
        segundoNumero = 0;

    }

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Vezes '*'
BtVezes.addEventListener('click', function (event) {

    //Verifica para realizar um conta por vez.
    if(calculoFeito == 'Mais' || calculoFeito == 'Menos' ||  calculoFeito == 'Divi'){

        alert("Só é permitido um calculo por vez");

    }else{

        //Atribui para realizar a conta
        calculoFeito = 'Vezes';

        //Colocar o valor digitado
        document.getElementById("displayA").value += simbiloVezes;

        //Atriu os valores as variavés
        primeiraNumero = segundoNumero;
        segundoNumero = 0;

    }

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Divide '÷'
BtDivide.addEventListener('click', function (event) {

    //Verifica para realizar um conta por vez.
    if(calculoFeito == 'Mais' || calculoFeito == 'Menos' ||  calculoFeito == 'Vezes'){

        alert("Só é permitido um calculo por vez");

    }else{

        //Atribui para realizar a conta
        calculoFeito = 'Divi';

        //Colocar o valor digitado
        document.getElementById("displayA").value += simboloDividido;

        //Atriu os valores as variavés
        primeiraNumero = segundoNumero;

    }

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Sete '7'
BtSete.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '7' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 7;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Oito '8'
BtOito.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '8' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 8;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Nove '9'
BtNove.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '9' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 9;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Parenteces Direita '('
BtParentesesDireita.addEventListener('click', function (event) {

    alert("Está função ainda não foi implementada!");

    // //Colocar o valor digitado
    // document.getElementById("displayA").value += simboloParentesesDireito;

    // //Previne o comportamento padrão do formulario 
    // event.preventDefault();

});

//Botão Quatro '4'
BtQuatro.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '4' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 4;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Cinco '5'
BtCinco.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '5' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 5;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Seis '6'
BtSeis.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '6' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 6;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Parenteces Esquerda ')'
BtParentesesEsquerda.addEventListener('click', function (event) {

    alert("Está função ainda não foi implementada!");

    // //Colocar o valor digitado
    // document.getElementById("displayA").value += simboloParentesesEsquerda;

    // //Previne o comportamento padrão do formulario 
    // event.preventDefault();

});

//Botão Um '1'
BtUm.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '1' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 1;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Dois '2'
BtDois.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '2' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 2;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Três '3'
BtTres.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '3' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 3;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Limpar Tela
BtLimpa.addEventListener('click', function (event) {

    //Captura o formulario completo 
    var formulario = document.getElementById("idForm");

    //Limpando o formulario
    formulario.reset();

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

    //Limpa variaveis
    primeiraNumero = 0;
    segundoNumero = 0;

});

//Botão Zero '0'
BtZero.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '0' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += 0;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

//Botão Ponto '.'
BtPonto.addEventListener('click', function (event) {

    //Atribui valor 
    segundoNumero += '.' 

    //Colocar o valor digitado
    document.getElementById("displayA").value += simboloPonto;

    //Previne o comportamento padrão do formulario 
    event.preventDefault();

});

BtCalcular.addEventListener('click', function (event) {

    switch (calculoFeito) {

        case 'Mais':
            
            //Zera Calculos Feitos
            calculoFeito = '';

            //Realiza a conta
            resultado = parseInt(primeiraNumero) + parseInt(segundoNumero);

            //Limpa o input e colocar o resultado
            //Captura o formulario completo 
            var formulario = document.getElementById("idForm");

            //Limpando o formulario
            formulario.reset();

            //Previne o comportamento padrão do formulario 
            event.preventDefault();

            //Colocar o valor resultado
            document.getElementById("displayA").value += resultado;
            
            break;

        case 'Menos':

            //Zera Calculos Feitos
            calculoFeito = '';  
            
            //Realiza a conta
            resultado = parseInt(primeiraNumero) - parseInt(segundoNumero);

            //Limpa o input e colocar o resultado
            //Captura o formulario completo 
            var formulario = document.getElementById("idForm");

            //Limpando o formulario
            formulario.reset();

            //Previne o comportamento padrão do formulario 
            event.preventDefault();

            //Colocar o valor resultado
            document.getElementById("displayA").value += resultado;
    
            break;

        case 'Vezes':

            //Zera Calculos Feitos
            calculoFeito = '';  

            //Realiza a conta
            resultado = parseInt(primeiraNumero) * parseInt(segundoNumero);

            //Limpa o input e colocar o resultado
            //Captura o formulario completo 
            var formulario = document.getElementById("idForm");

            //Limpando o formulario
            formulario.reset();

            //Previne o comportamento padrão do formulario 
            event.preventDefault();

            //Colocar o valor resultado
            document.getElementById("displayA").value += resultado;
        
            break;
                
        case "Divi":

            //Zera Calculos Feitos
            calculoFeito = '';  

            //Realiza a conta
            resultado = parseInt(primeiraNumero) / parseInt(segundoNumero);

            //Limpa o input e colocar o resultado
            //Captura o formulario completo 
            var formulario = document.getElementById("idForm");

            //Limpando o formulario
            formulario.reset();

            //Previne o comportamento padrão do formulario 
            event.preventDefault();

            //Colocar o valor resultado
            document.getElementById("displayA").value += resultado;
            
            break;   

        default:

            alert("Não é possível realizar mais de uma conta.");

            break;
        }

});

