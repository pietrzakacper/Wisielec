var secretWord = "Gdzie kucharek sześć tam nie ma co jeść";
secretWord = secretWord.toUpperCase();

var hiddenSecretWord = "";

for (var i = 0; i < secretWord.length; ++i) {
    if (secretWord[i] === " ") hiddenSecretWord += " ";
    else hiddenSecretWord += "-";
}

function displaySecretWord() {
    $("#word-to-guess").html(hiddenSecretWord);
}

function startGame() {
    var alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż".toUpperCase();
    var content = '';
    for (var i = 0; i < 6; ++i) {
        content += '<div class="row letters-row" ">\n';
        for (var j = 0; j < 6; ++j) {
            if (i == 5 && j == 5) break;
            content += '<div class="col-xs-2">\n<div row><div class="col-sm-2 col-xs-1"></div><div class="col-sm-8 col-xs-10 letter btn btn-info center-block" id="letter' + (i * 6 + j) + '">' + alphabet[i * 6 + j] + '</div><div class="col-sm-2 col-xs-1"></div></div></div>';
        }
        content += '\n</div>';
    }

    $("#alphabet").html(content);
}


function handleLetterClick(letter, obj) {
    var isCorrect = false;
    for (var i = 0; i < secretWord.length; ++i) {
        if (secretWord[i] == letter) {
            hiddenSecretWord = hiddenSecretWord.substr(0,i)+secretWord[i]+ hiddenSecretWord.substr(i+1);
            isCorrect = true;
        }
    }
    if (isCorrect) obj.addClass("btn-success");
    else obj.addClass("btn-danger");
    displaySecretWord();
}

$(document).ready(function() {
    startGame();
    displaySecretWord();
    $(".letter").click(function() {
        $(this).removeClass("btn-info letter");
        $(this).addClass("disabled cursor-normal");
        handleLetterClick($(this).html(), $(this));
        //TODO MANAGE GAME LOGIC
    });
});
