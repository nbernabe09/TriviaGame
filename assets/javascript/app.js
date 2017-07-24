$(document).ready(function() {

	// Variables
	var questions = [
		"What year did Fantasmic! open?",
		"Which was the last attraction whose construction was overseen by Walt Disney?",
		"What attraction was NOT available on opening day?"];
	var answers = ["","",""]
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
	"Casey Jr. Circus Train",
	"Jungle Cruise",
	"Peter Pan's Flight"];
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
			$("#answers").html("<div class=' btn btn-primary' id='replay'>Replay</div>");
		} else {
			$("#time").html("Time Remaining: <span id='limit'></span>");
			$("#answers").html("");
			time = 10;
			$("#limit").html(time);
			startGameTime();
			$("#question").html(questions[x]);
			listAnswers(x);
		}
	}
	function listAnswers(x) {
		for (var i = 0; i < (answers[x]).length; i++) {
			$("#answers").append("<div class='row'><div class=' btn btn-primary' id='answer" + i + "'>" + answers[x][i] + "</div></div>");
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
		if (ask === -1) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
	$("body").on("click", "#answer1", function() {
		if (ask === 2) {
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
		if (ask === -1) {
			stopTime();
			rightPick();
		} else {
			stopTime();
			wrongPick();
		}
	});
});