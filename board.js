var counter = 0;
var board = new Array();
$(document).ready(function(){
    modal.style.display = "block";
    $('#play').on('click', makeBoard);
});

function makeBoard(){
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
	if($(this).hasClass('morty') || $(this).hasClass('rick')){
		return;
	}
	console.log('zxc');
	if (counter % 2 === 0) {
		$(this).addClass('morty');
		counter++;
	} else {
		$(this).addClass('rick');
		counter++;
		}
	}

function checkGameOver() {
    console.log("checking winning condition");
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {

            if (i + 3 <= 3 && j + 3 <= 3) {
                if (board[i][j].css("background-image") !== '') {
                    //checking row win possibilities
                    if (board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")) {
                        console.log("win");
                        return true;
                    }

                    //checking column win possibilities
                    if (board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")) {
                        console.log("win");
                        return true;
                    }

                    //checking diagonal win possibilities
                    if (board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")) {
                        console.log("win");
                        return true;
                    }

                    //checking diagonal win possibilities
                    if(j-2>=0)
                    {
                        if (board[i][j].css("background-image") === board[i + 1][j - 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j - 2].css("background-image"))
                        {
                            console.log("win");
                            return true;
                        }
                    }
                }
            }
        }
    }
}

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
