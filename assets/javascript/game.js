$(document).ready(function () {
    var listOfWords = ["knifea", "pan", "oniona", "trash", "garlic", "stocka"];
    var chosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];
    var failureCounter = 0;
    console.log(chosenWord.length);
    for (var i = 0; i < chosenWord.length; i++) {
        $("#fillIn").append("_ ");
         
    }
    $(document).keyup(function (event) {
        if(failureCounter <= 4){
            $("#letterChosen").text(event.key);
            var saver = event.key;
            var selectedLetter = chosenWord.search(saver);
            if(selectedLetter === -1){
                $("#indianaReference").text("You chose.....poorly");
                failureCounter++;
                var imgSrc="assets/images/hang"+failureCounter+".gif"
                console.log(imgSrc);
                $("#gallowImage").attr("src", imgSrc);
                $("#missedLetters").append(event.key+" ");
            } else{
                $("#indianaReference").text("You've chosen....wisely");
                $("#fillIn")
            }
        }else{
            alert("You lose! Good Day Sir!");
        }
    });
});