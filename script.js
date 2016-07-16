var secretWord = "Gdzie kucharek sześć tam nie ma co jeść";
secretWord = secretWord.toUpperCase();

var hiddenSecretWord = "";

var lifes = 9;

for (var i = 0, max = secretWord.length; i < max; ++i) {
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
            if ((i * 6 + j) == 35) break;
            content += '<div class="col-sm-4 col-xs-4 col-md-2 button-container"><div class="btn-info letter circled">' + alphabet[(i * 6 + j)] + '</div></div>';
        }
        content += '\n</div>';
    }

    $("#alphabet").html(content);
}



// Niestety muszę cię zasmucić, ale powracą twoje ukochane '$' (przynajmniej tak było jak uczyłe się PHPa, ponieważ już w sumie taką tradycją jest tworzenie zmiennych dotyczących objektów jQuery poprzez zaczynanie ich nazw dolarem
function handleLetterClick(letter, $obj) {
    $obj.removeClass("btn-info letter");
    $obj.addClass("disabled cursor-normal");
    $obj.off("click");
    // dlaczego tak dowiesz się później (w linijce 94.)
    var isCorrect = false;
    for (var i = 0, max = secretWord.length; i < max; ++i) {
        if (secretWord[i] == letter) {
            hiddenSecretWord = hiddenSecretWord.substr(0, i) + secretWord[i] + hiddenSecretWord.substr(i + 1);
            isCorrect = true;
        }
    }
    if (isCorrect) $obj.addClass("btn-success");
    else {
        $obj.addClass("btn-danger");
        lifes--;
        // Możemy to skrócić do takiej formy poprzez podanie do attr objektu. Zauważ, że teraz zamiast ',' pomiędzy nazwą atrybutu, a jego wartością jest ':', a atrybuty oddziela ','.
        $("#hangman-picture").attr({"src": 'img/s' + (9 - lifes) + '.png', "alt": 'wisielec w stanie ' + (9 - lifes) + 'na 9'});
    }

    displaySecretWord();
}

function checkGameEnd() {
    var isEnd = false;
    // Dobrą praktyką jest podpisywanie obiektów do zmiennych gdy wywołujemy je więcej niż 1 raz (taka kwestia optymalizacji).
    $endGameMsg = $("#end-game-msg");
    $alphabet = $("#alphabet");
    $imgContainer = $("#img-container");
    $playAgain = $("#play-again");
  
  
    if (secretWord === hiddenSecretWord) {
        $endGameMsg.html('<strong>Brawo! Odgadłeś hasło!</strong>');
        $endGameMsg.addClass("end-message alert alert-success text-center");
        isEnd = true;
    } else if (lifes === 0) {
    // Gdy porównujesz z '0' to używamy '==='
        $endGameMsg.html('<strong>Przegrałeś!</strong> Prawidłowe hasło: "' + secretWord + '"');
        $endGameMsg.addClass("end-message alert alert-danger text-center");
        isEnd = true;
    }
    if (isEnd) {
        $alphabet.html('');
        $alphabet.removeClass("interface-background");
      
        $imgContainer.removeClass("col-md-6");
        $imgContainer.addClass("col-md-12");
        $imgContainer.parent().addClass("center-block");
      
        $playAgain.html('<strong>Jeszcze raz? - KLIKNIJ MNIE!</strong>');
        $playAgain.addClass("end-message alert alert-warning btn-warning text-center");
        $playAgain.css({"cursor": "pointer", "border-radius": "0px"});
      
        $playAgain.on( "click", function(){
          location.reload();
        });
      
        // I teraz to co mnie najbardzie zabolało.
        // Nie ma sensu przypisywać do tego attrybutu HTML jak możesz przypisać eventa bezporednio do tego elemetu w JS.
      
        $endGameMsg.css("border-radius", "0px");
        // Tutaj tak jak wcześniej skracamy to tylko do jednego odwołania.
    }
}

$(document).ready(function() {
    startGame();
    displaySecretWord();
    $(".btn-info").on("click", function() {
        if (!$(this).hasClass('disabled')) {
            handleLetterClick($(this).html(), $(this));
            checkGameEnd();
        }
    });
    // http://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click
});

// Generalnie to do JSa chyba tyle.
