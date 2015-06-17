var xo = ["X", "O"];
var i = 0;
var x = [];
var o = [];

function changeColor(id) {

	box = document.getElementById(id);

	if(i == 0 && box.innerHTML == ""){
		box.style.backgroundColor = "green";
		box.innerHTML = xo[i];
		x.push(id);
		console.log("X:",x);
		// winCheck(i);
		i = 1;
	}else if(i == 1 && box.innerHTML == ""){
		box.style.backgroundColor = "yellow";
		box.innerHTML = xo[i];
		o.push(id);
		console.log("O:",o);
		// winCheck(i);
		i = 0;
	}
}

// var winCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

// function winCheck(player){
// 	for()
// 	winCombo
// }
