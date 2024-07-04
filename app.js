let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
      asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);  
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
        asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    
    if(listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortaron todos los numeros');
        refrescarPagina();
    }else{
        if (listaNumerosSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego () {
    //1. limpiar caja
    limpiarCampo();

    //2. poner mensaje de inicio
    //3. cambiar el numero
    //4. reiniciar los intentos
    condicionesInciales();
    
    //5. dasbilitar el boton de reincion
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesInciales() { 
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Escriba un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesInciales();