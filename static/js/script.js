// function for the game
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomNumToInt());
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// function to choose random numbbers between 0 and 3
function randomNumToInt(){
    return Math.floor(Math.random()*3);
}

// this function converts number to choice
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'] [number];
}

// function to decide the Winner
function decideWinner(yourChoice, computerChoice){
    var rpsData = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    var yourScore = rpsData[yourChoice][computerChoice];
    var computerScore = rpsData[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore == 0){
        return {'message': 'You Lost', 'color': 'black'}
    }else if (yourScore === 0.5){
        return {'message': 'You Tied', 'color': 'ash'};
    } else {
        return {'message': 'You Won', 'color': 'white'};
    }
}

// 
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // this removes all images when you click on one
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanImageChoice] + "' height= 150 width=150;'>"
    messageDiv.innerHTML = "<h2 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src='" + imageData[botImageChoice] + "' height= 150 width=150;'>"

    document.getElementById('rps').appendChild(humanDiv);
    document.getElementById('rps').appendChild(messageDiv);
    document.getElementById('rps').appendChild(botDiv);


}