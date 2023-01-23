let player = '';
let machine = '';
let points = 0

const scoreboard = document.querySelector('.container-title-scoreboard');
scoreboard.innerHTML += `${points}`;

const btnJogar = document.querySelector('.btnJogar');
btnJogar.addEventListener('click', (e) =>{
    e.preventDefault();
    addPlayer()
    machineGenerator()
    verifyWinner();
    console.log(player);
    /* console.log(machine); */
})

function addPlayer(){
    let radSwitch = document.getElementsByName('escolha')
    if(radSwitch[0].checked){player = 'pedra';} 
    else if (radSwitch[1].checked){player = 'papel';}
    else if (radSwitch[2].checked){player = 'tesoura';}
}

function machineGenerator(){
    let number = Math.floor(Math.random()*(4-1)+1)
    switch(number){
        case 1:
            machine = 'pedra';
            break;
        case 2:
            machine = 'papel';
            break;
        case 3:
            machine = 'tesoura';
            break;
    }
}

function verifyWinner(){
    let panel = document.querySelector('.result')
    panel.innerHTML = '';
    panel.innerHTML += `<p>Voce jogou ${player}</p>`;
    panel.innerHTML += `<p>O robo jogou ${machine}</p>`;
    possibility1 = player=='pedra' && machine=='tesoura';
    possibility2 = player=='papel' && machine=='pedra';
    possibility3 = player=='tesoura' && machine=='papel';
    if(player===machine){
        panel.innerHTML += `<p class='result-round'>A partida empatou</p>`;
    } else if(possibility1||possibility2||possibility3){
        panel.innerHTML += `<p class='result-round'>Voce venceu e ganho 3 pontos</p>`;
        points += 3;
        scoreboard.innerHTML = `Placar: <mark>${points}</mark>`;
    } else {
        panel.innerHTML += `<p class='result-round'>Voce perdeu e perdeu 1 ponto</p>`;
        points -= 1;
        scoreboard.innerHTML = `Placar: <mark>${points}</mark>`;
    }

    
}