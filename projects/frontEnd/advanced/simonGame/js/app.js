colors         = ['green', 'red', 'yellow', 'blue'];
turns          = [];
totalTurns     = 20;
timeDelay      = 400; // milliseconds
level          = 0;
lightOn        = true;
userTurn 	   = 1; //i
buttonsBlocked = true;
userFinish     = false;
restrict       = false;

document.getElementById("level").innerHTML = "Press Start";


function game() {
	if(level == 20) {
		console.log("YOU WIN!!! DO SOMETHING HERE!");
		return;
	}

	lightOn        = true;
	buttonsBlocked = true;
	userTurn       = 1;
	level++;
	
	document.getElementById("level").innerHTML = level;
	
	i = 0;
	
	printPattern(level);
	
	/* Return the last button to the original color */
	setTimeout(function() {
		document.getElementById(turns[i-1]).style.opacity = 1; 	
		buttonsBlocked = false; // unblock the buttons
		readUserTurn();
	}, (level) * 2 * timeDelay); // two times per button (color on and color off)
}



function readUserTurn() {
	if(userTurn == level) return;
	//while(!userFinish) {

	//}
}


function printPattern(levelPrint) {
	
	if(i == level) {
		return;
		setTimeout(function(){
			document.getElementById(turns[i-1]).style.opacity = 1; 
			return;
		}, timeDelay);
	}
	

	var timeout = setTimeout(function() {
		
		if(lightOn) {
			document.getElementById(turns[i]).style.opacity = .50;
			new Audio('audio/simonSound' + turns[i] + '.mp3').play(); // Name pattern -> simonSound[COLOR].mp3
			i++;
		}
		else {
			document.getElementById(turns[i-1]).style.opacity = 1; 
		}
		lightOn = !lightOn;
		printPattern();
	}, timeDelay);
}



function chooseOneColor() {
	turns.push(colors[Math.floor(Math.random() * 4)]);
}

function chooseAllColors() {
	for (var i = 0; i < totalTurns; i++) {
		turns.push(colors[Math.floor(Math.random() * 4)]);
	}
}


/* BUTTONS */

/* Put onclick event here in js, so I don't need put this on html - Unobtrusive Javascript */
document.getElementById("green").onclick = function(){
	if(buttonsBlocked) return;

	if(userTurn > level) {
		console.log("Enough! This level is over");
		return;
	}
	
	if(turns[userTurn - 1] === "green") {
		new Audio('audio/simonSoundgreen.mp3').play();
		console.log("YOU ARE RIGHT");

		if(userTurn == level) {
			console.log("Here, I will call the next level");
			game();
		} else {
			userTurn++;	
		}

	}
	else {
		console.log("YOU ARE WRONG! GAME OVER IF THE STRICT MODE IS DEACTIVATE");
		if(!restrict) {
			level--; // inside the game function there is a level++ instruction. So, I decrement because the user will play the same level.
			game();
		}
		else {
			alert("Game Over!");
		}
	}
	

};
document.getElementById("red").onclick = function(){
	if(buttonsBlocked) return;
	

	if(userTurn > level) {
		console.log("Enough! This level is over");
		return;
	}

	if(turns[userTurn - 1] === "red") {
		new Audio('audio/simonSoundred.mp3').play();
		console.log("YOU ARE RIGHT");

		if(userTurn == level) {
			console.log("Here, I will call the next level");
			game();
		} else {
			userTurn++;	
		}

	}
	else {
		console.log("YOU ARE WRONG! GAME OVER IF THE STRICT MODE IS DEACTIVATE");
		if(!restrict) {
			level--; // inside the game function there is a level++ instruction. So, I decrement because the user will play the same level.
			game();
		}
		else {
			alert("Game Over!");
		}
	}
};
document.getElementById("yellow").onclick = function(){
	if(buttonsBlocked) return;
	
	if(userTurn > level) {
		console.log("Enough! This level is over");
		return;
	}

	if(turns[userTurn - 1] === "yellow") {
		new Audio('audio/simonSoundyellow.mp3').play();
		console.log("YOU ARE RIGHT");

		if(userTurn == level) {
			console.log("Here, I will call the next level");
			game();
		} else {
			userTurn++;	
		}

	}
	else {
		console.log("YOU ARE WRONG! GAME OVER IF THE STRICT MODE IS DEACTIVATE");
		if(!restrict) {
			level--; // inside the game function there is a level++ instruction. So, I decrement because the user will play the same level.
			game();
		}
		else {
			alert("Game Over!");
		}		
	}

};
document.getElementById("blue").onclick = function(){
	if(buttonsBlocked) return;

	if(userTurn > level) {
		console.log("Enough! This level is over");
		return;
	}

	if(turns[userTurn - 1] === "blue") {
		new Audio('audio/simonSoundblue.mp3').play();
		console.log("YOU ARE RIGHT");
		
		if(userTurn == level) {
			console.log("Here, I will call the next level");
			game();
		} else {
			userTurn++;	
		}
	
	}
	else {
		console.log("YOU ARE WRONG! GAME OVER IF THE STRICT MODE IS DEACTIVATE");
		if(!restrict) {
			level--; // inside the game function there is a level++ instruction. So, I decrement because the user will play the same level.
			game();
		}
		else {
			alert("Game Over!");
		}		
	}
};


/* Button Start */
document.getElementById("startButton").onclick = function() {
	console.log("Starting the game");
	chooseAllColors(); 
	console.log(turns);
	game();
}

/*
	References:

	[1]: http://stackoverflow.com/questions/19886843/how-to-remove-outline-border-from-input-button 
	[2]: http://www.w3schools.com/cssref/playit.asp?filename=playcss_border-style
	[3]: http://stackoverflow.com/a/35090614


	TO-DO:
	[X]: blink when there're two equal colors in a sequence
	[X]: deactivate the click buttons when the sequence are showing to the user
	[ ]: let the user configures the time delay
	[ ]: end game


	BUG TO FIX: the last color changed, return to the original color so fast. Then, it's impossible to notice.
*/