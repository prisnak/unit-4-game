
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


// the user will click a crystals and sum to the score
$('#pink').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
});

$('#green').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
});

$('#black').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
});

$('#red').on('click', function() {
	random = Math.floor(Math.random()*(12-1)+1); 	
	var value = $(this).attr('data-value', random);
	toScore = value.data('value')
	userScore.push(toScore)
});

var sum = 0
// Score
function score(){
	for (var i=0; i<userScore.length; i++){ 
		console.log(userScore[i]);
		var num = parseInt(userScore[i]);
		sum += num
		console.log(sum);
	}

}


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


