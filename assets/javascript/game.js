$(document).ready(function() {

	var computerRandom = Math.floor((Math.random() * 120) + 19);

	var userCrystal1 = Math.floor((Math.random() * 12) + 1);
	var userCrystal2 = Math.floor((Math.random() * 12) + 1);
	var userCrystal3 = Math.floor((Math.random() * 12) + 1);
	var userCrystal4 = Math.floor((Math.random() * 12) + 1);

	var userScore = 0;
	var wins = 0;
	var losses = 0;

	$("#computer-number").html(computerRandom);

	$("#FirstCrystal").click(function() {
		count(userCrystal1);
	});
	$("#SecondCrystal").click(function() {
		count(userCrystal2);
	});
	$("#ThirdCrystal").click(function() {
		count(userCrystal3);
	});
	$("#FourthCrystal").click(function() {
		count(userCrystal4);
	});

	function restart() {
		computerRandom = Math.floor((Math.random() * 120) + 19);
		$("#computer-number").html(computerRandom);
		userCrystal1 = Math.floor((Math.random() * 12) + 1);
		userCrystal2 = Math.floor((Math.random() * 12) + 1);
		userCrystal3 = Math.floor((Math.random() * 12) + 1);
		userCrystal4 = Math.floor((Math.random() * 12) + 1);
		userScore = 0;
		$("#user-score").html(userScore);
	};

	function count(increment) {

		userScore += increment;
		$("#user-score").empty();
		$("#user-score").append(userScore);

		if (userScore == computerRandom) {
			var winsound = new Audio("assets/sounds/win.mp3"); 
			winsound.play();
			wins++;
			$("#wins-number").html(wins);
			restart();
		} else if (userScore > computerRandom) {
			var losssound = new Audio("assets/sounds/loss.mp3");
			losssound.play();
			losses++;
			$("#losses-number").html(losses);
			
			restart();
		}
	};
});