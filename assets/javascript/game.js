$(document).ready(function () {
    var listOfWords = ["knife", "pan", "bread", "trash", "garlic", "stock"];
    var chosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];
    var failureCounter = 0;
    var correctCounter = chosenWord.length;
    var chosenLetterArray = [];
    var nextGame;
    var totalLosses = 0;
    var totalWin = 0;
    function clearSpan(){
        chosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];
        failureCounter = 0;
        correctCounter = chosenWord.length;
        chosenLetterArray = [];
        nextGame = false;
        $("#fillIn").empty();
        $("#missedLetters").empty();
        $("#gallowImage").attr("src", "assets/images/hang0.gif");
        for (var i = 0; i < chosenWord.length; i++) {
            var idNumber = "blank"+i;
            var blankSpan = $("<span />").attr("id", idNumber).html("_ ");
            $("#fillIn").append(blankSpan);
        }
    }
    clearSpan();
    $(document).keyup(function (event) {
        console.log(failureCounter+"hello");
        var saver = event.key;
        var selectedLetter = chosenWord.search(saver);  
        if(chosenLetterArray.indexOf(saver) === -1){
            chosenLetterArray.push(saver);
            if(failureCounter < 4){
                $("#letterChosen").text(event.key);
                if(selectedLetter === -1){
                    $("#indianaReference").text("You chose.....poorly");
                    failureCounter++;
                    var imgSrc="assets/images/hang"+failureCounter+".gif"
                    $("#gallowImage").attr("src", imgSrc);
                    $("#missedLetters").append(event.key+" ");
                }else {
                    correctCounter--;
                    var spanSelector = "#blank"+selectedLetter;
                    $(spanSelector).text(saver + " ");
                    $("#indianaReference").text("You've chosen....wisely");
                    setTimeout(function(){
                        if(correctCounter === 0){
                            alert("You Win!");
                            totalWin++;
                            $("#totalWins").text(totalWin);
                            nextGame = confirm("Do you want to play another game?");
                            if (nextGame) {
                                clearSpan();
                            }
                        };
                    },10);
                }
            }else{
                $("#indianaReference").text("You chose.....poorly");
                $("#letterChosen").text(event.key);
                failureCounter++;
                var imgSrc="assets/images/hang"+failureCounter+".gif"
                $("#gallowImage").attr("src", imgSrc);
                $("#missedLetters").append(event.key+" ");
                setTimeout(function(){
                    alert("You lose! Good Day Sir!");
                    totalLosses++;
                    $("#totalLoses").text(totalLosses);
                    nextGame = confirm("Do you want to play another game?");
                    if (nextGame) {
                        clearSpan();
                    };
                },10);
            }
        }else {
            alert("You've already chosen that letter! Pick again!")
        }
    });
});