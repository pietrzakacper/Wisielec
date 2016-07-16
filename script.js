var secretWord = "Gdzie kucharek sześć tam nie ma co jeść";
secretWord = secretWord.toUpperCase();

var hiddenSecretWord = "";

var lifes = 9;

for (var i = 0, max = secretWord.length; i < max; ++i) {
    if (secretWord[i] === " ") hiddenSecretWord += " ";
    else hiddenSecretWord += "-";
}

hiddenSecretWord = secretWord;

function displaySecretWord() {
    $("#word-to-guess").html(hiddenSecretWord);
}

function startGame() {
    var alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż".toUpperCase();
    var content = '';
    for (var i = 0; i < 6; ++i) {
        content += '<div class="row">\n';
        for (var j = 0; j < 6; ++j) {
            if ((i * 6 + j) == 35) break;
            content += '<div class="col-sm-4 col-xs-4 col-md-2 button-container"><div class="btn-info letter circled">' + alphabet[(i * 6 + j)] + '</div></div>';
        }
        content += '\n</div>';
    }

    $("#alphabet").html(content);
}


function handleLetterClick(letter, obj) {
    obj.removeClass("btn-info letter");
    obj.addClass("disabled cursor-normal");
    obj.attr("onclick", ';');
    var isCorrect = false;
    for (var i = 0, max = secretWord.length; i < max; ++i) {
        if (secretWord[i] == letter) {
            hiddenSecretWord = hiddenSecretWord.substr(0, i) + secretWord[i] + hiddenSecretWord.substr(i + 1);
            isCorrect = true;
        }
    }
    if (isCorrect) obj.addClass("btn-success");
    else {
        obj.addClass("btn-danger");
        lifes--;
        $("#hangman-picture").attr("src", 'img/s' + (9 - lifes) + '.png');
        $("#hangman-picture").attr("alt", 'wisielec w stanie ' + (9 - lifes) + 'na 9');
    }

    displaySecretWord();
}

function checkGameEnd() {
    var isEnd = false;

    if (secretWord === hiddenSecretWord) {
        $("#end-game-msg").html('<strong>Brawo! Odgadłeś hasło!</strong>');
        $("#end-game-msg").addClass("end-message alert alert-success text-center");
        isEnd = true;
    } else if (lifes == 0) {
        $("#end-game-msg").html('<strong>Przegrałeś!</strong> Prawidłowe hasło: "' + secretWord + '"');
        $("#end-game-msg").addClass("end-message alert alert-danger text-center");
        isEnd = true;
    }
    if (isEnd) {
        $("#alphabet").html('');
        $("#alphabet").removeClass("interface-background");
        $("#img-container").removeClass("col-md-6");
        $("#img-container").addClass("col-md-12");
        $("#img-container").parent().addClass("center-block");
        $("#play-again").html('<strong>Jeszcze raz? - KLIKNIJ MNIE!</strong>');
        $("#play-again").addClass("end-message alert alert-warning btn-warning text-center");
        $("#play-again").css("cursor", "pointer");
        $("#play-again").attr("onclick", "location.reload()");
        $("#end-game-msg").css("border-radius", "0px");
        $("#play-again").css("border-radius", "0px");
    }
}
$(document).ready(function() {
    startGame();
    displaySecretWord();
    $(".btn-info").click(function() {
        if (!$(this).hasClass('disabled')) {
            handleLetterClick($(this).html(), $(this));
            checkGameEnd();
        }
    });
});
