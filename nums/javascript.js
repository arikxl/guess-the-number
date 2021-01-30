'use strict'

var game = {
    'min': 1,
    'max': 10
};
console.log('game:', game)

game.output = document.querySelector(".output");
game.message = document.querySelector(".message");
game.guessInput = document.querySelector("input");
game.btn = document.querySelector("button");
game.btn.addEventListener('click', guessValue);

init()

function guessValue() {
    if (game.btn.classList.contains('replay')) {
        init();
        game.btn.innerHTML = 'ניחוש';
        game.guessInput.style.display = 'block';
        game.guessInput.innerHTML = '';
        game.btn.classList.remove('replay');
    } else {
        game.gusses++;
        var tempGuess = game.guessInput.value;
        game.guessInput.value = '';
        tempGuess = parseInt(tempGuess);
        if (isNaN(tempGuess)) {
            message('בבקשה תנסו רק מספרים', 'red');
        } else if (tempGuess === game.num) {
            message('נכון! ניחשת שהמספר זה ' + game.num + ' ב ' + game.gusses + ' ניחושים ', 'green');;
            gameOver();
        } else {
            var holder = tempGuess > game.num ? {
                'msg': 'גבוה מדי',
                'clr': 'orange'
            } : {
                'msg': 'נמוך מדי',
                'clr': 'purple'
            };
            message(holder.msg, holder.clr);
        }
    }
}

function gameOver() {
    game.btn.innerHTML = 'משחק חדש';
    game.guessInput.style.display = 'none';
    game.btn.classList.add ('replay');
    game.max +=5;
}

function init() {
    game.gusses = 0;
    game.num = rndmNumber(game.min, game.max);
    var startMsg = 'נחשו מספר בין ' + game.min + ' ל ' + game.max;
    message(startMsg, 'blue');
    console.log(game.num);
}

function message(msg, color) {
    game.message.innerHTML = msg;
    game.message.style.color = color || 'black';
    game.guessInput.style.borderColor = color || 'black';
    game.btn.style.backgroundColor = color || 'black';
    game.btn.style.color = 'white';
}

rndmNumber(1, 100)

function rndmNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}