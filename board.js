var counter = 0;
var board = new Array();
var modal = null;
var amountOfPlayers = null;
$(document).ready(function(){
    $('#play').on('click', makeBoard);
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
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.style.display = "block";

    playerTurn();
});

function makeBoard(){
    setTimeout(function(){
    var sound = new Audio('http://peal.io/download/ztm51');
    sound.play();
    }, 0000);
    $('.container').html(""); 

    var inputName;
	tableSize = $('#boardMaker').val();
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

	console.log('zxc');
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
    //console.log("checking winning condition");
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {
            if (i <= 4 && j <= 4) {
                    //checking row win possibilities
                    if (j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")) {
                        modalPopUp();
                        console.log("win");
                        $(".square").off("click", checkGameOver);
                        $(".square").off("click", printInSegment);
                        return;
                    }

                    //checking column win possibilities
                    if (i <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")) {
                        modalPopUp();
                        console.log("win");
                        $(".square").off("click", checkGameOver);
                        $(".square").off("click", printInSegment);
                        return;
                    }

                    //checking \ diagonal win possibilities
                    if (i <= tableSize-3 && j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")) {
                        modalPopUp();
                        console.log("win");
                        $(".square").off("click", checkGameOver);
                        $(".square").off("click", printInSegment);  
                        return;
                    }

                    //checking / diagonal win possibilities
                    if (i <= tableSize-3 && j <= tableSize-3 && board[i][j + 2].css("background-image") !== "none" && board[i][j + 2].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j + 2].css("background-image") === board[i + 2][j].css("background-image")) {
                        modalPopUp();
                        console.log("win");
                        $(".square").off("click", checkGameOver);
                        $(".square").off("click", printInSegment);
                        return;
                    }
            }
        }
    }
}

function modalPopUp(){
    $('.container').html("");
    modal.style.display = "block";
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
