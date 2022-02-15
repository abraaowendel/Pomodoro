
// AQUI O USUARIO IRÁ DEFINIR O TEMPO/ PAUSA E QUANTIDADE DE SESSÕES



let tempoTrabalho = 25;
let tempoPausa = 5;
let tempoSessoes = 3;
let ligadoDesligado = true;

function aumentarPause() {
    let quantempo = document.getElementById('number-pause')
    tempoPausa++
    quantempo.innerHTML = tempoPausa;
}

function diminuirPause() {
    let quantempo = document.getElementById('number-pause')
    tempoPausa > 1? tempoPausa-- : alert('Invalido')
    quantempo.innerHTML = tempoPausa;
}

function aumentarSession() {
    let quantempo = document.getElementById('number-session')
    tempoSessoes++
    quantempo.innerHTML =  tempoSessoes;
}

function diminuirSession() {
    let quantempo = document.getElementById('number-session')
    tempoSessoes > 1 ? tempoSessoes-- : alert('Inválido')
    quantempo.innerHTML = tempoSessoes;
}

// PARTE DO TRABALHO

function telaInicialPomodoro(){
    const minutos = document.getElementById('minutes-pomodoro').innerHTML = `${tempoTrabalho}`;
    const segundos = document.getElementById('seconds-pomodoro').innerHTML = ':00';
    ligadoDesligado = true;
}
// 

function comecarPomodoro(){
    let segundosTotais = tempoTrabalho * 60;
    
    if(ligadoDesligado == true){
        ligadoDesligado = false;    
        const intervalo = setInterval(function(){
            if(segundosTotais >= 0){
                const minutos = document.getElementById('minutes-pomodoro')
                const segundos = document.getElementById('seconds-pomodoro')
    
                const quantMinutos = Math.floor(segundosTotais / 60) % 60;
                const quantSegundos = Math.floor(segundosTotais % 60);
    
                segundosTotais--
            
                minutos.innerHTML = formatarTempo(quantMinutos)
                segundos.innerHTML = `:${formatarTempo(quantSegundos)}`
            }
            else{
                clearInterval(intervalo)
                trocarTela(2)
            }
        },1000)
    }
}
    

// PAUSA


function pausaPomodoro(quantSessoes){
    const minutos = document.getElementById('minutes-pause-pomodoro').innerHTML = formatarTempo(tempoPausa);
    const segundos = document.getElementById('seconds-pause-pomodoro').innerHTML = ':00';
    let segundosTotais = tempoPausa * 60;

    if(quantSessoes > 1){
        const pausa = setInterval(function(){
            if(segundosTotais >= 0){
                const minutos = document.getElementById('minutes-pause-pomodoro')
                const segundos = document.getElementById('seconds-pause-pomodoro')

                const quantMinutos = Math.floor(segundosTotais / 60) % 60;
                const quantSegundos = Math.floor(segundosTotais % 60);

                segundosTotais--

                minutos.innerHTML = formatarTempo(quantMinutos);
                segundos.innerHTML = `:${formatarTempo(quantSegundos)}`;
            }
            else{
                clearInterval(pausa)
                trocarTela(1)
            }
        }, 1000)}
    else{
        trocarTela(3)
    }
}


function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}`:tempo
}

// BOTAO QUE DISPARA A CONTAGEM //
document.getElementById('start-work').addEventListener('click', comecarPomodoro)
                               //
// TROCAS DE TELA //
document.querySelector('#start').addEventListener('click', () => trocarTela(1))

function trocarTela(n){
    const primeiraTela = document.querySelector('#timer')
    const segundaTela = document.querySelector('#work')
    const terceiraTela = document.querySelector('#pause')
    const quartaTela = document.querySelector('#end')

    switch (n) {
        case 1:
            primeiraTela.style.display = 'none';
            segundaTela.style.display = 'flex';
            terceiraTela.style.display = 'none';
            quartaTela.style.display = 'none';
            telaInicialPomodoro();
            break;
        case 2:
            primeiraTela.style.display = 'none';
            segundaTela.style.display = 'none';
            terceiraTela.style.display = 'flex';
            pausaPomodoro(tempoSessoes--)
            break
        case 3:
            primeiraTela.style.display = 'none';
            segundaTela.style.display = 'none';
            terceiraTela.style.display = 'none';
            quartaTela.style.display = 'flex';
            break        
    }  
}

//                //
const aumentarPausa = document.querySelector('#up-pause')
.addEventListener('click', aumentarPause)

const diminuirPausa = document.querySelector('#low-pause')
.addEventListener('click', diminuirPause)

const aumentarSessao = document.querySelector('#up-session')
.addEventListener('click', aumentarSession)

const diminuirSessao = document.querySelector('#low-session')
.addEventListener('click', diminuirSession)










