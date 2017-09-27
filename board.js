$(document).ready(function(){
    modal.style.display = "block";
    $('#play').on('click', makeBoard);
})

function makeBoard(){
	tableSize = $('#boardMaker').val();
	segmentSize = 100/tableSize-1 + "%";
	for(var i = 0; i < tableSize; i++){
		for(var j = 0; j < tableSize; j++){
			var segment = $('<div>').addClass("square").attr({
    			datarow:i,
    			datacolumn:j}).css({
    			// "display":"inline-block",
    			// "background-color":"blue",
    			// "border":"2px black solid",
    			"width":segmentSize,
    			"height":segmentSize,
    			// "margin":"0",
    			// "text-align":"center",
    			// "vertical-align": "bottom"
			});
    	$('.container').append(segment)

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

