var counter = 0;
var board = new Array ();
var tableSize = 3 ;
var segmentSize;
var sideBar = $("<div>").css({
    "background-color":"lightblue",
    "border": "2px",
    "height": "90vh",
    "width": "20vw",
    "margin-right": "2vw"
});

var tableContainer = $("<div>").css({
    "display": "flex",
    "justify-content": "center"
    // "align-items": "center"

});


var table = $("<div>").css(
    {
        "background-color":"yellow",
        "border": "2px",
        "height": "50vh",
        "width": "50vw",
        "justify-content": "center",
        "align-items": "center"

    });

var rawCounter = $('<input>').addClass("rowNumber").attr({
    type:"number",
    value:"3",
    max:"5",
    min:"3"

});


var rawSubmit = $("<input>").addClass("tableCreator").attr({
    type:"button",
    value:"Creat Table"
});


$(document).ready(function() {


    $('body').append(sideBar,tableContainer);


    $(tableContainer).append(table);






    $(sideBar).append(rawCounter);

    $(sideBar).append(rawSubmit);



    $(".tableCreator").on("click",createTable);


});

function createTable() {

    tableSize = $(".rowNumber").val();

    segmentSize = 100 / tableSize - 1 + "%";


    for (var i = 0; i < tableSize; i++) {
        board[i] = new Array(tableSize);

        for (var j = 0; j < tableSize; j++) {
            board[i][j] = $('<div>').addClass("segment").css({
                "display": "inline-block",
                "background-color": "blue",
                "border": "2px black solid",
                "width": segmentSize,
                "height": segmentSize,
                "margin": "0",
                "text-align": "center",
                "vertical-align": "bottom"
            });
            $(table).append(board[i][j]);
        }

    }

    $(".segment").on("click", printInSegment);
    $(".segment").on("click", checkGameOver);

    function printInSegment() {
        console.log("hiiiiiii");
        if (counter % 2 === 0) {
            $(this).text("X");
        }

        else {
            $(this).text("O");
        }

        counter++;

    }


    function checkGameOver() {
        console.log("checking winning condition");
        for (var i = 0; i < tableSize; i++) {
            for (var j = 0; j < tableSize; j++) {

                if (i + 3 <= 3 && j + 3 <= 3) {
                    if (board[i][j].text() !== "") {
                        //checking row win possibilities
                        if (board[i][j].text() === board[i][j + 1].text() && board[i][j].text() === board[i][j + 2].text()) {
                            console.log("win");
                            return true;
                        }

                        //checking column win possibilities
                        if (board[i][j].text() === board[i + 1][j].text() && board[i][j].text() === board[i + 2][j].text()) {
                            console.log("win");
                            return true;
                        }

                        //checking diagonal win possibilities
                        if (board[i][j].text() === board[i + 1][j + 1].text() && board[i][j].text() === board[i + 2][j + 2].text()) {
                            console.log("win");
                            return true;
                        }

                        //checking diagonal win possibilities
                        if(j-2>=0)
                        {
                            if (board[i][j].text() === board[i + 1][j - 1].text() && board[i][j].text() === board[i + 2][j - 2].text())
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


}

function AI(){
        var gameState = check(checkGameover());
        if (gameState === false)
        {
            var points = [];
            for (var i=0; i<tableSize; i++)
            {
                for (var j=0; j<tableSize; j++)
                {
                    var tempBoard = board.slice();
                    if (if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() === "")
                    {
                        break;
                    }
                }
        }
}









