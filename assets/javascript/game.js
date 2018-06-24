
var wins = 0;
var losses = 0;
$('#wins').html(wins);
$('#losses').html(losses);

var random;
var compNumber;

var userScore = [];



//Computer Random number
$('#start').on('click', function(){
	compNumber = Math.floor(Math.random()*(120-18)+18); 
	$('#compNumber').html(compNumber);
	console.log(compNumber);				
});

	// var pink = $('#pink').attr('data-value');
	//  	var green = $('#green').attr('data-value');
	//  	var black = $('#black').attr('data-value');
	//  	var red = $('#red').attr('data-value');

// the user will click a crystals and sum to the score
$('#pink').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
	$('#userNumber').html(userScore.length)
		checkScore();
});


$('#green').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
	$('#userNumber').html(userScore.length)


		// checkScore();
});

$('#black').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
	
	$('#userNumber').html(userScore.length)

		
		// checkScore();
});

$('#red').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
	
	$('#userNumber').html(userScore.length)

		
		// checkScore();
});



// if the score is above the compNumber he loses and if matches, he wins
function checkScore() {
		 if (userScore == compNumber) {
		wins++
		alert('You won!')
		// score = 0
	} else if (userScore > compNumber){
		losses++
		alert('You lost!')
		// score = 0
	}
}

// var sum = 0
//Score

for (var i=0; i<userScore.length; i++){
	for (var j=0; j<userScore[i].length; j++){
	console.log(userScore[i][j]);
	}
}

// $('.crystal').on('click', function(){
// 	random = Math.floor(Math.random()*(12-1)+1); 	
// 	$(this).attr('data-value', random);
	
// 	function sum(){
// 		var value = $(this).data('value')
// 		score.push(value)
// 	}
// 	// console.log(userScore)

// 	// //Win + Loss counter

