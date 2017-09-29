var counter = 0;
var board = new Array();
var modal = null;
var amountOfPlayers = null;
var tableSize = null;
var winCondition = null;
$(document).ready(function(){
    $('#play').on('click', makeBoard);
    modalMaker();
    playerTurn();
});

function modalMaker(){

    // Get the modal
    modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";

        var sound = new Audio('http://peal.io/download/wn5l3');
        sound.play('');
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    modal.style.display = "block";

}

function makeBoard(){

    setTimeout(function(){
    var sound = new Audio('http://peal.io/download/ztm51');
    sound.play();
    }, 0000);
    $('.container').html(""); 

    var inputName;
	tableSize = $('#boardMaker').val();
    winCondition = $('#numToWin').val();
	segmentSize = 100/tableSize + "%";
    // $('.container').css('height', tableSize*100).css('width', tableSize*100);
	for(var i = 0; i < tableSize; i++){
		board[i] = new Array(tableSize);
		for(var j = 0; j < tableSize; j++){
    		board[i][j] = $('<div>').addClass("square").attr({
    			datarow:i,
    			datacolumn:j}).css({
    			"width":segmentSize,
    			"height":segmentSize
			});
    	$('.container').append(board[i][j]);
		}
	}
    amountOfPlayers = $('#playerNumbers').val();
    playerTurn();
    $(".square").on("click", printInSegment);
    $(".square").on("click", checkGameOver);
}

function printInSegment() {

	if($(this).hasClass('morty') || $(this).hasClass('rick')){
		return;
	}

	if (counter % amountOfPlayers === 0) {
        var sound = new Audio('http://peal.io/download/uv0rk');
        sound.play();
        $(this).addClass('morty');
        counter++;
        playerTurn()
	} else if (counter % amountOfPlayers === 1){
                var sound = new Audio('http://peal.io/download/fijtn');
        sound.play();
        $(this).addClass('rick');
        counter++;
        playerTurn()
    } else if(counter % amountOfPlayers === 2){
        var sound = new Audio('sounds/mr_poopybutthole.mp3');
        sound.play();
        $(this).addClass('mrP');
        counter++;
        playerTurn()
    }
    else {
        var sound = new Audio('http://peal.io/download/et39v');
        sound.play();
        $(this).addClass('mrM');
        counter++;
        playerTurn()

		}
	}

function checkGameOver() {
    var x = true;
    //console.log("checking winning condition");
    console.log(tableSize);
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {
                x = true;
                for (var k = 0; k < winCondition; k++) {
                    if(j + k < tableSize + 1) {

                        if (board[i][j].css("background-image") !== "none" && board[i][j].css('background-image') === board[i][j + k].css('background-image')) {
                            x = true;

                        } else {
                            x = false;
                            break;
                        }
                        if (k === winCondition - 1) {
                            console.log('win saeed');
                        }


                    }
                }
        }
    }

    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {
            x = true;
            for (var k = 0; k < winCondition; k++) {
                if(i < tableSize - winCondition + k) {

                    if (board[i][j].css("background-image") !== "none" && board[i][j].css('background-image') === board[i + k][j].css('background-image')) {
                        x = true;

                    } else {
                        x = false;
                        break;
                    }
                    if (k === winCondition - 1) {
                        console.log('win saeed');
                    }


                }
            }
        }
    }


}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//             if (i <= 2 && j <= 2 && winCondition == 3) {                 // 3 X 3
//                 //checking row win possibilities
//                 if (j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking column win possibilities
//                 if (i <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking \ diagonal win possibilities
//                 if (i <= tableSize-3 && j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking / diagonal win possibilities
//                 if (i <= tableSize-3 && j <= tableSize-3 && board[i][j + 2].css("background-image") !== "none" && board[i][j + 2].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j + 2].css("background-image") === board[i + 2][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//             }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//             if (i <= 4 && j <= 4 && winCondition == 5) {                 // 5 X 5
//                 //checking row win possibilities
//                 if (j <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")
//                     && board[i][j].css("background-image") === board[i][j + 3].css("background-image") && board[i][j].css("background-image") === board[i][j + 4].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking column win possibilities
//                 if (i <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 3][j].css("background-image") && board[i][j].css("background-image") === board[i + 4][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking \ diagonal win possibilities
//                 if (i <= tableSize-5 && j <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 3][j + 3].css("background-image") && board[i][j].css("background-image") === board[i + 4][j + 4].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking / diagonal win possibilities
//                 if (i <= tableSize-5 && j <= tableSize-5 && board[i][j + 4].css("background-image") !== "none" && board[i][j + 4].css("background-image") === board[i + 1][j + 3].css("background-image") && board[i][j + 4].css("background-image") === board[i + 2][j + 2].css("background-image")
//                     && board[i][j + 4].css("background-image") === board[i + 3][j + 1].css("background-image") && board[i][j + 4].css("background-image") === board[i + 4][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//             }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//             if (i <= 6 && j <= 6 && winCondition == 7) {                 // 7 X 7
//                 //checking row win possibilities
//                 if (j <= tableSize-7 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")
//                     && board[i][j].css("background-image") === board[i][j + 3].css("background-image") && board[i][j].css("background-image") === board[i][j + 4].css("background-image") && board[i][j].css("background-image") === board[i][j + 5].css("background-image")
//                     && board[i][j].css("background-image") === board[i][j + 6].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking column win possibilities
//                 if (i <= tableSize-7 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 3][j].css("background-image") && board[i][j].css("background-image") === board[i + 4][j].css("background-image") && board[i][j].css("background-image") === board[i + 5][j].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 6][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking \ diagonal win possibilities
//                 if (i <= tableSize-7 && j <= tableSize-7 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 3][j + 3].css("background-image") && board[i][j].css("background-image") === board[i + 4][j + 4].css("background-image") && board[i][j].css("background-image") === board[i + 5][j + 5].css("background-image")
//                     && board[i][j].css("background-image") === board[i + 6][j + 6].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//                 //checking / diagonal win possibilities
//                 if (i <= tableSize-7 && j <= tableSize-7 && board[i][j + 6].css("background-image") !== "none" && board[i][j + 6].css("background-image") === board[i + 1][j + 5].css("background-image") && board[i][j + 6].css("background-image") === board[i + 2][j + 4].css("background-image")
//                     && board[i][j + 6].css("background-image") === board[i + 3][j + 3].css("background-image") && board[i][j + 6].css("background-image") === board[i + 4][j + 2].css("background-image") && board[i][j + 6].css("background-image") === board[i + 5][j + 1].css("background-image")
//                     && board[i][j + 6].css("background-image") === board[i + 6][j].css("background-image")) {
//                     console.log("win");
//                     $(".square").off("click", checkGameOver);
//                     $(".square").off("click", printInSegment);
//                     return;
//                 }
//             }


function Player() {
    this.name = $('#nameInput').val;
    this.playerNum = $('');
}

function playerTurn(){
    if(counter % amountOfPlayers === 0){
        $('#playerTurn').removeClass();
        $('#playerTurn').addClass('morty');
    } else if (counter % amountOfPlayers === 1){
        $('#playerTurn').removeClass();
        $('#playerTurn').addClass('rick');
    } else if (counter % amountOfPlayers === 2){
        $('#playerTurn').removeClass();
        $('#playerTurn').addClass('mrP');
    } else {
        $('#playerTurn').removeClass();
        $('#playerTurn').addClass('mrM');
    }
}

