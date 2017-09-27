var counter = 0;

var tableSize = 3 ;
var segmentSize;

$(document).ready(function() {

    var sideBar = $("<div>").css({
        "background-color":"lightblue",
        // "border": "2px",
        // "height": "50vh",
         "width": "50vw"
        // "margin-right": "2vw"
    });

    var tableContainer = $("<div>").css({
        // "display": "flex",
        // "justify-content": "center",
        //  "align-items": "center"

    });


    var table = $("<div>").css(
    {
        "background-color":"yellow",
        // "border": "2px",
        "height": "85vh",
        "width": "50vw"
        // "justify-content": "center",
        // "align-items": "center"

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
                    "data-row":i,
                    "data-column":j}).css({
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
        $(".segment").on("click",checkGameOver);
        // var image1 = $('<img>').addClass('image1').attr('src','images/card-back.jpeg');
        // var image2 = $('<img>').addClass('image1').attr('src','images/stats-image.jpeg');

        function printInSegment()
        {
            if (counter % 2 === 0) {
                // $(this).append(image1);
                //console.log('X');
                $(this).text('X');
            }

            else
            {
                // $(this).append(image2);
                //console.log('O');
                $(this).text('O');
            }

            counter++;

        }


        function checkGameOver()
        {
            console.log("checking winning condition");
            for (var i=0; i<tableSize; i++)
            {
                for (var j=0; j<tableSize; j++)
                {

                    if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() !== "")
                    {

                        if ($("#ij").text() === $("#i"+"j+1").text() !== ""){

                        }

                        //checking row win possibilities
                        if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() === $(".segment[data-row="+i+"][data-column="+(j+1)+"] ").text()
                        && $(".segment[data-row="+i+"][data-column="+j+"] ").text() === $(".segment[data-row="+i+"][data-column="+(j+2)+"] ").text())
                        {
                            console.log("win")
                        }

                        //checking column win possibilities
                        if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() === $(".segment[data-row="+(i+1)+"][data-column="+j+"] ").text()
                            && $(".segment[data-row="+i+"][data-column="+j+"] ").text()===$(".segment[data-row="+(i+2)+"][data-column="+j+"] ").text())
                        {
                            console.log("win")
                        }

                        //checking diagonal win possibilities
                        if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() === $(".segment[data-row="+(i+1)+"][data-column="+(j+1)+"] ").text()
                            && $(".segment[data-row="+i+"][data-column="+j+"] ").text()===$(".segment[data-row="+(i+2)+"][data-column="+(j+2)+"] ").text())
                        {
                            console.log("win")
                        }

                        //checking diagonal win possibilities
                        if ($(".segment[data-row="+i+"][data-column="+j+"] ").text() === $(".segment[data-row="+(i+1)+"][data-column="+(j-1)+"] ").text()
                            && $(".segment[data-row="+i+"][data-column="+j+"] ").text()===$(".segment[data-row="+(i+2)+"][data-column="+(j-2)+"] ").text())
                        {
                            console.log("win")
                        }

                    }
                }
            }
        }
    }
});