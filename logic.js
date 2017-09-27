var counter = 0;

var tableSize = 3 ;
var segmentSize;

$(document).ready(function() {

    var sideBar = $("<div>").css({
        "background-color":"lightblue",
        "border": "2px",
        "height": "50vh",
        "width": "20vw",
        "margin-right": "2vw"
    });

    var tableContainer = $("<div>").css({
        "display": "flex"
        //"justify-content": "center"
        // "align-items": "center"

    });


    var table = $("<div>").css(
    {
        "background-color":"yellow",
        "border": "2px",
        "height": "85vh",
        "width": "50vw"
        //"justify-content": "center",
        //"align-items": "center"

    });

    $('body').append(sideBar,tableContainer);


    $(tableContainer).append(table);

    var rawCounter = $('<input>').addClass("rowNumber").attr({
        type:"number",
        value:"3",
        max:"5",
        min:"3"

    });

    // var columnCounter = $('<input>').addClass("columnNumber").attr({
    //     type:"number",
    //     value:"3",
    //     max:"5",
    //     min:"3"
    //
    // });

    var rawSubmit = $("<input>").addClass("tableCreator").attr({
        type:"button",
        value:"Create Table"
    });




    $(sideBar).append(rawCounter);

    $(sideBar).append(rawSubmit);



    $(".tableCreator").on("click",createTable);


    // function createTable()
    // {
    //     console.log("hiiiiiiiiiiiii");
    //     var mytable = $('<table>').attr({ id: "basicTable" });
    //     var rows = $(".rowNumber").val();
    //     var cols = rows;
    //     var tr = [];
    //     for (var i = 0; i < rows; i++)
    //     {
    //         var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') });
    //         row.appendTo(table);
    //         for (var j = 0; j < cols; j++)
    //         {
    //             $('<td></td>').text("text1").appendTo(row);
    //         }
    //
    //     }
    //
    //     mytable.appendTo(table);
    // }


    function createTable()
    {
        tableSize = $(".rowNumber").val();

        segmentSize = 100/tableSize-1 + "%";

        for (var i=0; i<tableSize; i++)
        {
            for (var j=0; j<tableSize; j++)
            {
                var segment = $('<div>').addClass("segment").attr({
                    datarow:i,
                    datacolumn:j}).css({
                    "display":"inline-block",
                    "background-color":"blue",
                    "border":"2px black solid",
                    "width":segmentSize,
                    "height":segmentSize,
                    "margin":"0",
                    "text-align":"center",
                    "vertical-align":"bottom"
                });
                $(table).append(segment);
            }

        }

        $(".segment").on("click",printInSegment);

        function printInSegment()
        {
            console.log("hiiiiiii");
            if (counter % 2 === 0) {
                $(this).text("X");
            }

            else {
                $(this).text("O");
            }

            counter++;

        }

        checkGameOver();

        function checkGameOver()
        {
            for (var i=0; i<tableSize; i++)
            {
                for (var j=0; j<tableSize; j++)
                {
                    if ($(pars).value() !== "")
                    {
                        if ($("#ij").value() === $("#i"+"j+1").value() !== ""){

                        }
                    }
                }

            }


        }




    }






});






