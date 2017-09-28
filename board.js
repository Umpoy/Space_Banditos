var counter = 0;
var board = new Array();
$(document).ready(function(){
    $('#play').on('click', makeBoard);

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    modal.style.display = "block";
});

function makeBoard(){
    $('.container').html("");
    setTimeout(function(){
        var sound = new Audio('http://peal.io/download/ztm51');
        sound.play();
    }, 0000);
    
    var inputName;
	tableSize = $('#boardMaker').val();
	segmentSize = 100/tableSize + "%";
    $('.container').css('height', tableSize*100).css('width', tableSize*100);
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
    $(".square").on("click", printInSegment);
    $(".square").on("click", checkGameOver);
}

function printInSegment() {
    var amountOfPlayers = $('#playerNumbers').val();
	if($(this).hasClass('morty') || $(this).hasClass('rick')){
		return;
	}

	//console.log('zxc');
	if (counter % amountOfPlayers === 0) {
        var sound = new Audio('http://peal.io/download/uv0rk');
        sound.play();
        $(this).addClass('morty');
        counter++;
	} else if (counter % amountOfPlayers === 1){
                var sound = new Audio('http://peal.io/download/fijtn');
        sound.play();
        $(this).addClass('rick');
        counter++;

    } else if(counter % amountOfPlayers === 2){
        var sound = new Audio('http://peal.io/download/et39v');
        sound.play();
        $(this).addClass('mrP');
        counter++;
    }
    else {
        var sound = new Audio('http://peal.io/download/et39v');
        sound.play();
        $(this).addClass('mrM');
        counter++;

		}
	}
var x = null;
function checkGameOver() {
    //console.log("checking winning condition");
    console.log(tableSize);
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {
            if (i <= 2 && j <= 2 && tableSize == 3) {                 // 3 X 3
                //checking row win possibilities
                if (j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")) {
                    console.log("win");
                    x = board[i][j][0].classList[1];
                    console.log(x);
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking column win possibilities
                if (i <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking \ diagonal win possibilities
                if (i <= tableSize-3 && j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking / diagonal win possibilities
                if (i <= tableSize-3 && j <= tableSize-3 && board[i][j + 2].css("background-image") !== "none" && board[i][j + 2].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j + 2].css("background-image") === board[i + 2][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
            }

            if (i <= 3 && j <= 3 && tableSize == 4) {                 // 4 X 4
                //checking row win possibilities
                if (j <= tableSize-4 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")
                    && board[i][j].css("background-image") === board[i][j + 3].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking column win possibilities
                if (i <= tableSize-4 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")
                    && board[i][j].css("background-image") === board[i + 3][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking \ diagonal win possibilities
                if (i <= tableSize-4 && j <= tableSize-4 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")
                    && board[i][j].css("background-image") === board[i + 3][j + 3].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking / diagonal win possibilities
                if (i <= tableSize-4 && j <= tableSize-4 && board[i][j + 3].css("background-image") !== "none" && board[i][j + 3].css("background-image") === board[i + 1][j + 2].css("background-image") && board[i][j + 3].css("background-image") === board[i + 2][j + 1].css("background-image")
                    && board[i][j + 3].css("background-image") === board[i + 3][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
            }

            if (i <= 4 && j <= 4 && tableSize == 5) {                 // 5 X 5
                //checking row win possibilities
                if (j <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")
                    && board[i][j].css("background-image") === board[i][j + 3].css("background-image") && board[i][j].css("background-image") === board[i][j + 4].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking column win possibilities
                if (i <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")
                    && board[i][j].css("background-image") === board[i + 3][j].css("background-image") && board[i][j].css("background-image") === board[i + 4][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking \ diagonal win possibilities
                if (i <= tableSize-5 && j <= tableSize-5 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")
                    && board[i][j].css("background-image") === board[i + 3][j + 3].css("background-image") && board[i][j].css("background-image") === board[i + 4][j + 4].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
                //checking / diagonal win possibilities
                if (i <= tableSize-5 && j <= tableSize-5 && board[i][j + 4].css("background-image") !== "none" && board[i][j + 4].css("background-image") === board[i + 1][j + 3].css("background-image") && board[i][j + 4].css("background-image") === board[i + 2][j + 2].css("background-image")
                    && board[i][j + 4].css("background-image") === board[i + 3][j + 1].css("background-image") && board[i][j + 4].css("background-image") === board[i + 4][j].css("background-image")) {
                    console.log("win");
                    $(".square").off("click", checkGameOver);
                    $(".square").off("click", printInSegment);
                    return;
                }
            }

        }
    }
}

function Player(){
    this.name = $('#nameInput').val;
    this.playerNum = $('')
}


