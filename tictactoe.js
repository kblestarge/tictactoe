var array = ["blue", "yellow", "green", "red", "orange"];
var dArray = [["blue", 1,2,3], ["forest green", 4,5,6], ["moss green",7,8,9]];
var i = 0;
var i2 = 0;
var i3 = 0;

function arrayFunction() {

	document.getElementById("color").innerHTML=array[i];

	if(i == array.length-1){
		i = 0;
	}else{
		i++;
	}
}

function twoArrayFunction() {

	var ul = document.getElementById("ul");
	var li = document.createElement("li");
	li.innerHTML=dArray[i2];
	ul.appendChild(li);

	if(i2 == dArray.length-1){
		i2 = 0;
	}else{
		i2++;
	}
}

function changeColor(id) {

	document.getElementById(id).style.backgroundColor = array[i3];

	if(i3 == array.length-1){
		i3 = 0;
	}else{
		i3++;
	}
}
