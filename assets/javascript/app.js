$(document).ready(function() {

	// Variables
	var questions = [
		"What year did Fantasmic! open?",
		"Which was the last attraction whose construction was overseen by Walt Disney?",
		"What attraction was NOT available on opening day?",
		"Which is NOT one of the names of the Haunted Mansion's hitchhiking ghosts?",
		"Holidayland was a recreation area with a separate entrance before being replaced by New Orleans Square.",
		"Disney's FastPass system was first introduced in 2001 with the opening of Disney's California Adventure Park.",
		"All of these attractions were replaced and rethemed, except:",
		"Davy Crockett's Explorer Canoes used to be called Indian War Canoes."];
	var answers = [];
	answers[0] = [
		"1990",
		"1991",
		"1992",
		"1993"];
	answers[1] = [
		"Great Moments with Mr. Lincoln",
		"it's a small world",
		"Pirates of the Caribbean",
		"Haunted Mansion"];
	answers[2] = [
		"Autopia",
		"Dumbo the Flying Elephant",
		"Jungle Cruise",
		"Peter Pan's Flight"];
	answers[3] = [
		"Ezra",
		"Phineas",
		"Gus",
		"Victor"];
	answers[4] = [
		"True",
		"False"];
	answers[5] = [
		"True",
		"False"];
	answers[6] = [
		"Maliboomer",
		"Orange Stinger",
		"Mulholland Madness",
		"Sun Wheel"];
	answers[7] = [
		"True",
		"False"];
	var time, ask, countdown, right, wrong, tooLong;
	var clockRunning = false;

	// App Functions
	function newGame() {
		right = 0;
		wrong = 0;
		tooLong = 0;
		ask = 0;
		newQuestion(ask);
	}
	function newQuestion(x) {
		if (ask === questions.length) {
			$("#question").html("<div>Right Answers: " + right + "</div><div>Wrong Answers: " + wrong + "</div><div>Timeouts: " + tooLong + "</div>");
			$("#answers").html("<div class=' btn btn-primary btn-lg' id='replay'>Replay</div>");
		} else {
			$("#time").html("Time Remaining: <span id='limit'></span>");
			$("#answers").html("");
			time = 30;
			$("#limit").html(time);
			startGameTime();
			$("#question").html(questions[x]);
			listAnswers(x);
		}
	}
	function listAnswers(x) {
		for (var i = 0; i < (answers[x]).length; i++) {
			$("#answers").append("<div class='row'><div class=' btn btn-primary btn-lg' id='answer" + i + "'>" + answers[x][i] + "</div></div>");
		}
	}
	function rightPick() {
		time = 2;
		$("#answers").html("You are correct!");
		right++;
		startIntTime();
	}
	function wrongPick() {
		time = 2;
		$("#answers").html("Wrong answer!");
		wrong++;
		startIntTime();
	}
	function longPick() {
		time = 2;
		$("#answers").html("Time's up!");
		tooLong++;
		startIntTime();
	}
	function startGameTime() {
		if (!clockRunning) {
			clockRunning = true;
			countdown = setInterval(gameTimer, 1000);
		}
	}
	function startIntTime() {
		if (!clockRunning) {
			clockRunning = true;
			countdown = setInterval(intTimer, 1000);
		}
	}
	function stopTime() {
		clearInterval(countdown);
		clockRunning = false;
	}
	function gameTimer() {
		if (time > 0 ) {
			time--;
			$("#limit").html(time);
		} else {
			stopTime();
			longPick();
		}
	}
	function intTimer() {
		if (time > 0 ) {
			time--;
		} else {
			stopTime();
			ask++;
			newQuestion(ask);
		}
	}

	// App Start
	$("#start").on("click", function() {
		$(".instructions").hide();
		$("#start").hide();
		newGame();
	});
	$("body").on("click", "#replay", function() {
		newGame();
	});

	// Button Clicks
	$("body").on("click", "#answer0", function() {
		if ((ask === 4) || (ask === 6) || (ask === 7)) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
	$("body").on("click", "#answer1", function() {
		if ((ask === 2) || (ask === 5)) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
	$("body").on("click", "#answer2", function() {
		if ((ask === 0) || (ask === 1)) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
	$("body").on("click", "#answer3", function() {
		if (ask === 3) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
});