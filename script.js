var secretWord = "Gdzie kucharek sześć tam nie ma co jeść";
secretWord = secretWord.toUpperCase();

var hiddenSecretWord = "";

var lifes = 9;

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
        content += '<div class="row">\n';
        for (var j = 0; j < 6; ++j) {
          if((i * 6 + j) ==35)break;
            content += '<div class="col-sm-4 col-xs-4 col-md-2 button-container"><div class="btn-info letter circled">' + alphabet[(i * 6 + j)] + '</div></div>';
        }
        content += '\n</div>';
    }

    $("#alphabet").html(content);
}


function handleLetterClick(letter, obj) {
  obj.removeClass("btn-info letter");
  obj.addClass("disabled cursor-normal");
  obj.attr("onclick",';');
    var isCorrect = false;
    for (var i = 0; i < secretWord.length; ++i) {
        if (secretWord[i] == letter) {
            hiddenSecretWord = hiddenSecretWord.substr(0,i)+secretWord[i]+ hiddenSecretWord.substr(i+1);
            isCorrect = true;
        }
    }
    if (isCorrect) obj.addClass("btn-success");
    else{
       obj.addClass("btn-danger");
       lifes--;
       $("#hangman-picture").attr("src",'img/s'+(9-lifes)+'.png');
       $("#hangman-picture").attr("alt",'wisielec w stanie '+(9-lifes)+'na 9');
    }

    displaySecretWord();
}

$(document).ready(function() {
    startGame();
    displaySecretWord();
    $(".btn-info").click(function() {
        if(!$(this).hasClass('disabled'))
        handleLetterClick($(this).html(), $(this));
    });
});
