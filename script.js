var secretWord = ["Gdzie kucharek sześć tam nie ma co jeść", "Apetyt rośnie w miarę jedzenia", "Bez pracy nie ma kołaczy", "Biednemu zawsze wiatr w oczy", "Być kulą u nogi", " Być pracowitym jak pszczoła", "Cel uświęca środki", "Cisza jak makiem zasiał", "Co cię nie zabije, to cię wzmocni", "Co dwie głowy, to nie jedna", "Co kraj, to obyczaj", "Co ma wisieć, nie utonie", "Co ma piernik do wiatraka", "Co się odwlecze to nie uciecze", "Co z oczu, to z serc", "Co za dużo to niezdrow", "Czego Jaś się nie nauczy, tego Jan nie będzie umiał", "Czuć się jak ryba w wodzie", "Czym chata bogata tym gościom rada", "Darowanemu koniowi w zęby się nie zagląda", "Dla chcącego nic trudnego", "Do wesela się zagoi", "Drzeć z kimś koty", "Dzieci i ryby głosu nie mają", "Gdy kota nie ma, myszy harcują", "Gdy się człowiek spieszy, to się diabeł cieszy", "Gdzie kucharek sześć, tam nie ma co jeść", "Głupi ma zawsze szczęście", "Gość w dom – Bóg w dom", "Grosz do grosza, a będzie kokosza", "Hulaj dusza, piekła nie ma", "Idzie luty podkuj buty", "Jajko mądrzejsze od kury", "Jaka praca, taka płaca", "Jak cię widzą, tak cię piszą", "Jak kamień w wodę", "Jak Kuba Bogu, tak Bóg Kubie", "Jak pies je, to nie szczeka bo mu miska ucieka", "Jak się nie ma co się lubi, to się lubi co się ma", "Jak sobie pościelesz, tak się wyśpisz", "Jak trwoga, to do Boga", "Jedna jaskółka wiosny nie czyni", "Każdy jest kowalem swego losu", "Kląć jak szewc", "Kłamstwo ma krótkie nogi", "Kogut myślał o niedzieli, a w sobotę łeb ucięli", "Komu w drogę, temu czas", "Kto pierwszy ten lepszy", "Kto pod kim dołki kopie, ten sam w nie wpada", "Kto pyta, nie błądzi", "Kto rano wstaje, temu Pan Bóg daje", "Kto się czubi, ten się lubi", "Kuj żelazo póki gorące", "Kwiecień – plecień, co przeplata, trochę zimy, trochę lata", "Leje jak z cebra", "Lepiej nosić,jak się prosić", "Lepsza byle jaka prawda, niż dobre kłamstwo", "Lepszy rydz niż nic", "Licho nie śpi", "Lepszy wróbel w garści niż gołąb na dachu", "Ładnemu we wszystkim ładnie", "Łatwo przyszło – łatwo poszło", "Małe dzieci – mały kłopot, duże dzieci – duży kłopot", "Masz babo placek", "Miłego złe początki", "Mądry Polak po szkodzie", "Mowa jest srebrem, a milczenie złotem", "Mówił dziad do obrazu, a ten do niego ani razu", "Nadzieja – matką głupic", "Ni prośbą, ni groźbą", "Ni z gruszki, ni z pietruszki", "Nie bądź w gorącej wodzie kąpany", "Nie chce góra przyjść do Mahometa, musi Mahomet przyjść do góry", "Nie chwal dnia przed zachodem słońca", "Nie czas żałować róż, gdy płoną lasy", "Nie dziel skóry na niedźwiedziu", "Nie dolewaj oliwy do ognia", "Nie kupuj kota w worku", "Nie ma dymu bez ognia", "Nie ma to, jak we własnym domu", "Nie ma tego złego, co by na dobre nie wyszło", "Nie mów hop, póki nie przeskoczysz", "Nie mów drugiemu, co tobie nie miłe", "Nieszczęścia chodzą parami", "Nie płacz nad rozlanym mlekiem", "Nie wchodzi się dwa razy do tej samej rzeki", "Nie wszystko złoto, co się świeci", "Nie wywołuj wilka z lasu", "Nudy na pudy", "Od przybytku głowa nie boli", "Paluszek i główka to szkolna wymówka", "Pasuje jak wół do karety", "Pieniądze szczęścia nie dają", "Pierwsze koty za płoty", "Pod latarnią najciemniej", "Prawda w oczy kole", "Przyszła koza do woza", "Przyszła kryska na Matyska", "Raz na wozie, raz pod wozem", "Stara miłość nie rdzewieje", "Starość nie radość, młodość nie wieczność", "Stary, ale jar", "Strach ma wielkie oczy", "Strzeżonego Pan Bóg strzeże", "Szewc bez butów chodzi", "Szukajcie, a znajdziecie", "Szukać igły w stogu siana", "Ten się śmieje, kto się śmieje ostatni", "Trafiła kosa na kamień", "Trafić z deszczu pod rynnę", "W marcu jak w garncu", "Wszystko, co dobre, szybko się kończy", "Wybiera się, jak sójka za morze", "Wystroił się jak stróż w Boże ciało", "Wyśpisz się po śmierci", "Wyszło szydło z worka", "W zdrowym ciele zdrowy duch", "Zapomniał wół, jak cielęciem był", "Zgoda buduje, niezgoda rujnuj", "Złego diabli nie biorą", "Z pustego i Salomon nie naleje", "Żeby kózka nie skakała, to by nóżki nie złamała"];
secretWord = secretWord[Math.floor(Math.random()*secretWord.length)].toUpperCase();

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
      
        $playAgain.html('<strong>Jeszcze raz? - KLIKNIJ TUTAJ!</strong>');
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
