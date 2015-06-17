var xo = ["X", "O"];
var i = 0;
var x = [];
var o = [];
var winCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var won = false;
var allBox;
var catsGame = false;

function changeColor(id) {

	box = document.getElementById(id);

	//For the X
	if(i == 0 && box.innerHTML == "" && won == false){
		box.style.backgroundColor = "green";
		box.innerHTML = xo[i];
		x.push(id);

		won = winCheck(x);
		if(won){
			alert("Player X won the game!");
		}

		//No winner
		if(won == false && x.length == 5){
			catsGame = true;
			alert("The cat won the game!")
		}

		i = 1;

	//For the O
	}else if(i == 1 && box.innerHTML == "" && won == false){
		box.style.backgroundColor = "yellow";
		box.innerHTML = xo[i];
		o.push(id);

		won = winCheck(o);
		if(won){
			alert("Player O won the game!");
		}

		i = 0;

	//reset everything!
	}else if(won == true || catsGame == true){
		reset();
	}
}

function winCheck(player){
	var index = -1;
	var bingo = [0,0,0,0,0,0,0,0];

	for( var outer = 0; outer < winCombo.length; outer++) {
		var winSet = winCombo[outer];
		for( var inner = 0; inner < player.length; inner++) {
			index = winSet.indexOf(player[inner])
			if( index > -1) {
				bingo[outer]++;
			}
		}
	}

	console.log("bingo: ",bingo);
	if(bingo.indexOf(3) > -1) {
		return true;
	}else{
		return false;
	}
}

function reset(){
	//Can I name this var i?
	for(var b = 1; b < 10; b++) {
		allBox = document.getElementById(b);
		allBox.style.backgroundColor = "gray";
		allBox.innerHTML = "";
	}
	//initialize variables
	i = 0;
	x = [];
	o = [];
	won = false;
	catsGame = false;
}