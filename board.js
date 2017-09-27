$(document).ready(function(){
    modal.style.display = "block";
    $('#play').on('click', makeBoard);
});

function makeBoard(){
	tableSize = $('#boardMaker').val();
	segmentSize = 100/tableSize-1 + "%";
	for(var i = 0; i < tableSize; i++){
		for(var j = 0; j < tableSize; j++){
			var segment = $('<div>').addClass("square").attr({
    			datarow:i,
    			datacolumn:j}).css({
    			"width":segmentSize,
    			"height":segmentSize
			});
    	$('.container').append(segment);

		}
	}
    $(".square").on("click", printInSegment);
    //$(".square").on("click",checkGameOver);
}

		//var image1 = $('<img>').addClass('image1').attr('src','images/card-back.jpeg');
		//var image2 = $('<img>').addClass('image1').attr('src','images/stats-image.jpeg');

		var counter = 0;

        function printInSegment()
        {

        	console.log('zxc');
            if (counter % 2 === 0) {
				$(this).addClass('morty');

                // console.log('X');
                //$(this).text('X');
            }

            else
            {
                $(this).addClass('morty');

                // //console.log('O');
                //$(this).text('O');
            }

            counter++;

        }

function checkGameOver() {
    console.log("checking winning condition");
    for (var i = 0; i < tableSize; i++) {
        for (var j = 0; j < tableSize; j++) {

            if ($(".square[data-row=" + i + "][data-column=" + j + "] ").text() !== "") {

                if ($("#ij").text() === $("#i" + "j+1").text() !== "") {

                }

                //checking row win possibilities
                if ($(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + i + "][data-column=" + (j + 1) + "] ").text()
                    && $(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + i + "][data-column=" + (j + 2) + "] ").text()) {
                    console.log("win")
                }

                //checking column win possibilities
                if ($(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 1) + "][data-column=" + j + "] ").text()
                    && $(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 2) + "][data-column=" + j + "] ").text()) {
                    console.log("win")
                }

                //checking diagonal win possibilities
                if ($(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 1) + "][data-column=" + (j + 1) + "] ").text()
                    && $(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 2) + "][data-column=" + (j + 2) + "] ").text()) {
                    console.log("win")
                }

                //checking diagonal win possibilities
                if ($(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 1) + "][data-column=" + (j - 1) + "] ").text()
                    && $(".square[data-row=" + i + "][data-column=" + j + "] ").text() === $(".square[data-row=" + (i + 2) + "][data-column=" + (j - 2) + "] ").text()) {
                    console.log("win")
                }

            }
        }
    }
}

//zxczxczxc

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

