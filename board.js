var counter = 0;
var board = []
var playerCharacters = ['morty','rick','mrP','mrM'];
var amountOfPlayers = 2;
var player = [];
var segmentSize = null;
var tableSize = null;


$(document).ready(function(){
    $('#play').on('click', makeBoard);
    modalMaker();
    playerTurn();
    //usernameInput();
    addPlayerSelectHandlers();
    addPlayerRoster();
});
function addPlayerSelectHandlers(){
    $("#username").on('keypress',usernameInput);
    $("#playerNumbers").on('change',changePlayerCount);
}
function modalMaker(){
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the button element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the  reset button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        var sound = new Audio('http://peal.io/download/wn5l3');
        sound.play('');
        localStorage.clear();
    }

    // When the user clicks on "Lets get schwifty", close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    //Blocks Modal if there is data in localStorage.gameState
    if (localStorage.gameState !== undefined){
        getReload()
    } else {
        modal.style.display = "block";
    }
}

function makeBoard(){ // Dynamically creates board
     // "Show me what you got!!!!"
     setTimeout(function(){
        var sound = new Audio('http://peal.io/download/ztm51');
        sound.play();
     }, 1)
        
    $('.container').html(""); // Clears board for first & next game
    tableSize = $('#boardMaker').val();
	segmentSize = 100/tableSize + "%"; // Set squares to 33.33%, 20% , 14.29%
	for(var i = 0; i < tableSize; i++){
		board[i] = new Array(tableSize);
		for(var j = 0; j < tableSize; j++){
    		board[i][j] = $('<div>').addClass("square").attr({
    			datarow: i,
    			datacolumn: j
    		}).css({
    			width: segmentSize,
    			height: segmentSize
			});
    	$('.container').append(board[i][j]);
		}
	}
    amountOfPlayers = $('#playerNumbers').val();
    storeBoard(parseInt(tableSize, segmentSize));
    playerTurn();
    $(".square").on("click", handleSquareClick);
    // $(".square").on("click", printInSegment);
    // $(".square").on("click", checkGameOver);
    // $(".square").on("click", storeBoard);
}
function handleSquareClick(){
    printInSegment(this);
    checkGameOver();
    storeBoard();
}
function printInSegment(element) {
	if($(element).hasClass('morty') || $(element).hasClass('rick')){ // Return to baseline if a character class is clicked
		return;
	}
	if (counter % amountOfPlayers === 0) {
        var sound = new Audio('http://peal.io/download/uv0rk');
        sound.play();
        $(element).addClass('morty');
        counter++;
        playerTurn();
	} else if (counter % amountOfPlayers === 1){
            var sound = new Audio('http://peal.io/download/fijtn');
        sound.play();
        $(element).addClass('rick');
        counter++;
        playerTurn();
    } else if(counter % amountOfPlayers === 2){
        var sound = new Audio('sounds/mr_poopybutthole.mp3');
        sound.play();
        $(element).addClass('mrP');
        counter++;
        playerTurn();
    }
    else {
        var sound = new Audio('http://peal.io/download/et39v');
        sound.play();
        $(this).addClass('mrM');
        counter++;
        playerTurn();
		}
	}

function storeBoard() {

    console.log( 'function storeBoard is called' );
    var classBoard = [];
    for (var i = 0; i < tableSize ; i++) {
        classBoard[i] = [];
        for (var j = 0; j < tableSize; j++) {
            classBoard[i][j] = null;

            if ($(board[i][j]).hasClass('morty')) {
                classBoard[i][j] = 'morty';
            } else if ($(board[i][j]).hasClass('rick')) {
                classBoard[i][j] = 'rick';
            } else if ($(board[i][j]).hasClass('mrP')) {
                classBoard[i][j] = 'mrP';
            } else if ($(board[i][j]).hasClass('mrM')){
                classBoard[i][j] = 'mrM';
            }
            var storageObject = {
                boardSize: tableSize,
                boardState: classBoard,
            }
            var jsonStorageObject = JSON.stringify(storageObject);
            localStorage.gameState = jsonStorageObject;
        }
    }
}

function getReload(){

    var jsonStorageObject = JSON.parse(localStorage.gameState);
    var classBoard = jsonStorageObject.boardState;
    var tableSize = jsonStorageObject.boardSize;

    segmentSize = 100/tableSize + "%";
    $('.container').css('height', tableSize*100).css('width', tableSize*100);
    for(var i = 0; i < tableSize; i++){
        board[i] = new Array(tableSize);
        for(var j = 0; j < tableSize; j++){
            board[i][j] = $('<div>').addClass("square").attr({
                datarow: i,
                datacolumn: j
            }).css({
                width: segmentSize,
                height: segmentSize,
            });
            $('.container').append(board[i][j]);
        }
    }
    $(".square").on("click", handleSquareClick);
    for ( var i = 0 ; i < classBoard.length; i++){
        for ( var j = 0; j < classBoard.length; j++) {
            if (classBoard[i][j] !== null) {
                $(board[i][j]).addClass(classBoard[i][j]);
            }
        }
    }
}
function handleOffClick(){
    $(".square").off("click", checkGameOver);
    $(".square").off("click", printInSegment);
}
function checkGameOver() {
    //console.log("checking winning condition");
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {
            if (i <= 4 && j <= 4) {
                    //checking row win possibilities
                    if (j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i][j + 1].css("background-image") && board[i][j].css("background-image") === board[i][j + 2].css("background-image")) {
                        modalVictory();
                        console.log("win");
                        handleOffClick();
                        // $(".square").off("click", checkGameOver);
                        // $(".square").off("click", printInSegment);
                        return;
                    }
                    //checking column win possibilities
                    if (i <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j].css("background-image") && board[i][j].css("background-image") === board[i + 2][j].css("background-image")) {
                        modalVictory();
                        console.log("win");
                        handleOffClick();
                        // $(".square").off("click", checkGameOver);
                        // $(".square").off("click", printInSegment);
                        return;
                    }
                    //checking \ diagonal win possibilities
                    if (i <= tableSize-3 && j <= tableSize-3 && board[i][j].css("background-image") !== "none" && board[i][j].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j].css("background-image") === board[i + 2][j + 2].css("background-image")) {
                        modalVictory();
                        console.log("win");
                        handleOffClick();
                        // $(".square").off("click", checkGameOver);
                        // $(".square").off("click", printInSegment);
                        return;
                    }
                    //checking / diagonal win possibilities
                    if (i <= tableSize-3 && j <= tableSize-3 && board[i][j + 2].css("background-image") !== "none" && board[i][j + 2].css("background-image") === board[i + 1][j + 1].css("background-image") && board[i][j + 2].css("background-image") === board[i + 2][j].css("background-image")) {
                        modalVictory();
                        console.log("win");
                        handleOffClick();
                        // $(".square").off("click", checkGameOver);
                        // $(".square").off("click", printInSegment);
                        return;
                    }
            }
        }
    }
}

function usernameInput(){
    if(event.which === 13 && player.length <= amountOfPlayers){
        var user = $(this).val(); // "This" = Input value
        $(this).val(""); // Clears input for next player
        player.push(user)
        $('#playerNum').text(player.length+1);
    }
    if(player.length>=amountOfPlayers){
        $(".characterSelect").hide();
        $(".closeButtonContainer").show();
    }
}
function changePlayerCount(){
    amountOfPlayers = $('#playerNumbers').val();
    addPlayerRoster();
}
function addPlayerRoster(){
    /*
            <div class="character btn morty"></div>
        <div class="character btn rick"></div>
        <div class="character btn mrP"></div>
        <div class="character btn mrM"></div>
        */
        $(".characterRoster").empty();
        for(var i=0; i<amountOfPlayers; i++){
            var element = $("<div>",{
                class: 'character btn '+playerCharacters[i]
            });
            $(".characterRoster").append(element);
        }
}

function modalVictory(){
    var tracker = counter -1;
     // Get the modal
    var winModal = document.getElementById('winningModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    window.onclick = function(event) {
        if (event.target == winModal) {
            winModal.style.display = "none";
        }
    }
    var victor = tracker % amountOfPlayers;

    $('#usernameDisplay').text(player[victor]);
    if(tracker % amountOfPlayers === 0){
        $('#playPic').removeClass();
        $('#playPic').addClass('morty');
    } else if (tracker % amountOfPlayers === 1){
        $('#playPic').removeClass();
        $('#playPic').addClass('rick');
    } else if (tracker % amountOfPlayers === 2){
        $('#playPic').removeClass();
        $('#playPic').addClass('mrP');
    } else {
        $('#playPic').removeClass();
        $('#playPic').addClass('mrM');
    }
    winModal.style.display = "block";
}

function playerTurn(){ //Sets image to identify player's turn
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


