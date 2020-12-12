
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nozyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let argComputerMove = getMoveName(randomNumber);


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
let argPlayerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

console.log('moves:', argComputerMove, argPlayerMove);

 function displayResult(argComputerMove,argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage ('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
        printMessage ('Ty wygrywasz!');
    }
    else if(argComputerMove =='nozyce' && argPlayerMove == 'kamien'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage ('Remis!');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage ('Remis!');
    }
    else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage ('Remis!');
    }
    else if(playerInput > 3 ){
        printMessage ('nieznany ruch')
    }
    else {
        printMessage ('Przegrywasz')
    }
    
}

displayResult(argComputerMove,argPlayerMove)

 
    /* if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage ('Ty wygrywasz!');
    }
    else if(computerMove == 'papier' && playerMove == 'nozyce'){
        printMessage ('Ty wygrywasz!');
    }
    else if(computerMove =='nozyce' && playerMove == 'kamien'){
        printMessage ('Ty wygrywasz!');
    }
    else if(computerMove == 'papier' && playerMove == 'papier'){
        printMessage ('Remis!');
    }
    else if(computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage ('Remis!');
    }
    else if(computerMove == 'nozyce' && playerMove == 'nozyce'){
        printMessage ('Remis!');
    }
    else if(playerInput > 3 ){
        printMessage ('nieznany ruch')
    }
    else {
        printMessage ('Przegrywasz')
    }
    */


