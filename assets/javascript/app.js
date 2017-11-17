$(document).ready(function() {

	var audio = new Audio("assets/audio/jeopardy.mp3");
	
	var gameArea = $('#quiz');

	var questions = [ {
		question: "What was Madonna's first UK top ten single?",
		choices: ["True blue", "Holiday", "Madonna", "Crazy for you"],
		correctAnswer: "Holiday"
	}, {
		question: "Which country pop singer was born Eileen Regina Edwards?",
		choices: ["Dolly Parton", "Carrie Underwood", "Loretta Lynn", "Shania Twain"],
		correctAnswer: "Shania Twain" 
	}, {
		question: "The Stratocaster is a model of which guitar maker?",
		choices: ["Gibson", "Guild", "Fender", "Martin"],
		correctAnswer: "Fender" 
	}, {
		question: "Which singer is married to Trudie Styler?",
		choices: ["Sting", "Paul McCartney", "Phil Collins", "Mick Jagger"],
		correctAnswer: "Sting" 
	}, {
		question: "Whose childhood hit was Fingertips?",
		choices: ["Sting", "Stevie Wonder", "Michael Jackson", "John Lennon"],
		correctAnswer: "Stevie Wonder" 
	}, {
		question: "Which guitar innovator and player has a range of Gibson Guitars names after him?",
		choices: ["Eric Clapton", "Santana", "Steve Winwood", "Les Paul"],
		correctAnswer: "Les Paul"
	}, {
		question: "London born singer Miss Adkins is better known by what name?",
		choices: ["Amy Winehouse", "Py", "Adele", "Alpines"],
		correctAnswer: "Adele"
	}, {
		question: "Jimmy Page is an English musician who formed which rock band in 1968?",
		choices: ["Led Zeppelin", "Rolling Stones", "Doors", "The Who"],
		correctAnswer: "Led Zeppelin"
	}];
   

	var game = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		time: 45,
		
		timer: function(){
			game.time--;
			$("#counter").html(game.time);
			if (game.time === 0) {
				game.done();
			}
		},

		start: function(){
			counter = setInterval(game.timer, 1000);
			$("#subContainer").prepend("<h4>Time Remaining:  <span id='counter'> time </span> sec</h4>");
			audio.play();
			
			$("#image").remove();
			$("#start").remove();
			
			for (var i = 0; i < questions.length; i++) {
				gameArea.append('<h3>' + questions[i].question + '</h3>');
				for (var j = 0; j < questions[i].choices.length; j++) {
					gameArea.append('<input type="radio" name="question' + i + '"  value="'  + questions[i].choices[j] + '">' + questions[i].choices[j]);
				}
			}	
			gameArea.append("<br><hr><button id='done'><h3>D O N E</h3></button>");
		},

		done: function() {
			
			$.each($("input[name='question0']:checked"), function() {	
      			if ($(this).val() == questions[0].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });    			
   		 	
   		 	$.each($('input[name="question1"]:checked'), function() {	
      			if ($(this).val() == questions[1].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });  

   		 	$.each($('input[name="question2"]:checked'), function() {	
      			if ($(this).val() == questions[2].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });  

   		 	$.each($('input[name="question3"]:checked'), function() {	
      			if ($(this).val() == questions[3].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });  

   		 	$.each($('input[name="question4"]:checked'), function() {	
      			if ($(this).val() == questions[4].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });  

   		 	$.each($('input[name="question5"]:checked'), function() {	
      			if ($(this).val() == questions[5].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });  

   		 	$.each($('input[name="question6"]:checked'), function() {	
      			if ($(this).val() == questions[6].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 }); 

     		 $.each($('input[name="question7"]:checked'), function() {	
      			if ($(this).val() == questions[7].correctAnswer) {
       			 	game.correct++;
      			} else {
        			game.incorrect++;
     		 	}
     		 });   
   		 	this.score();
		},

		score: function(){
			clearInterval(counter);
			$("#subContainer h3").remove();
			$("#subContainer h4").remove();
			gameArea.html('<h2>All Done! </h2>');
			gameArea.append('<h3>Correct Answers: ' + this.correct + '</h3>');
			gameArea.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
			gameArea.append('<h3>Unanswered: ' + (questions.length - (this.correct + this.incorrect)) + '</h3>');
		}
};

//==================================================================================

	$("#start").click(function() {
		game.start();
		if ($("#done").click(function() {
		game.done();
		audio.pause();
		}));
	});


});
	

		






	



