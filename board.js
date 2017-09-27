var counter = 0;
$(document).ready(function(){
    modal.style.display = "block";
    $('#play').on('click', makeBoard);

    $(".square").on("click", printInSegment);
})

function makeBoard(){
	tableSize = $('#boardMaker').val();
	segmentSize = 100/tableSize + "%";
    $('.container').css('height', tableSize*100).css('width', tableSize*100)
	for(var i = 0; i < tableSize; i++){
		for(var j = 0; j < tableSize; j++){
			var segment = $('<div>').addClass("square").attr({
    			datarow:i,
    			datacolumn:j}).css({
    			"width":segmentSize,
    			"height":segmentSize,
			});
    	$('.container').append(segment)

		}
	}
    $(".square").on("click", printInSegment);
}

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

//zxczxczxc
//zxczxczxz

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

