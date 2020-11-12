let numeroAleatorio = Math.floor((Math.random() * 100) + 1);
const botao = document.querySelector('#btnEnviar');
const input = document.querySelector('#entradaUsuario');
const ultimoresultado = document.querySelector('.ultimoResultado');
const palpites = document.querySelector('.palpites');
const tentativas = document.querySelector('h1 span');
let botaoreinicio;
const divForm = document.querySelector('#divForm');
const baixoOuAlto = document.querySelector('.baixoOuAlto');

limparInput();


//alert(numeroAleatorio);

botao.addEventListener('click', conferirPalpites);

let contagemPalpites = 1;

function conferirPalpites(){
  ultimoresultado.textContent = '';
  baixoOuAlto.textContent = '';

  const valor = Number(input.value);

  if(valor < 1 || valor > 100){
    ultimoresultado.textContent = "Valor inválido! Digite um número entre 1 e 100.";
    limparInput();
  } else if(valor === numeroAleatorio){
    ultimoresultado.textContent = "Parabéns! Você acertou!";
    ultimoresultado.style.backgroundColor = 'green';
    ultimoresultado.style.color = 'white';
    fimDoJogo();  
  } else if(contagemPalpites < 10) {
    ultimoresultado.textContent = 'Errado!';
    ultimoresultado.style.color = 'red';
    
    if(valor < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
   }else {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
    palpites.textContent += ` ${valor}, `;
    contagemPalpites++;
    tentativas.textContent = 11 - contagemPalpites;
    
    limparInput();
  }else {
      ultimoresultado.textContent = 'FIM DO JOGO!';
      ultimoresultado.style.color = 'red';
      fimDoJogo();
    }
  }  

function limparInput(){
   input.value = '';
   input.focus();
}

function fimDoJogo(){
  input.disabled = true;
  botao.disabled = true;

botaoreinicio = document.createElement('button');
botaoreinicio.textContent = 'Iniciar novo jogo';
divForm.appendChild(botaoreinicio);

botaoreinicio.addEventListener('click', reiniciar);
}

function reiniciar(){

  input.disabled = false;
  botao.disabled = false;

divForm.removeChild(botaoreinicio);

ultimoresultado.textContent = '';
ultimoresultado.style.backgroundColor = 'white';
ultimoresultado.style.color = 'black';
baixoOuAlto.textContent = '';
tentativas.textContent = 10;
palpites.textContent = 'Palpites anteriores: ';

contagemPalpites = 1;
numeroAleatorio = Math.floor((Math.random() * 100) + 1);


  limparInput();
}