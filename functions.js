sound = "tac2.wav";

var maxim;
var vel;
var plus;
var stop = 1500;
var minim = 2;
document.onkeyup = KeyCheck;
var key;
total = 0;

function onLoad(number){
	if(number > 0){
		maxim = number;
		vel = 1000.1;
		plus = 0.85;
		main();
	}
}

function roll(){
	document.getElementById('dice').style.display = 'block';
	document.getElementById('instructions').style.display = 'none';
	document.getElementById('form').style.display = 'none';
	maxim = document.getElementById('max').value;
	onLoad(maxim);
}

function main(){
	vel = vel * plus;
	
	if(vel < minim) vel = 2;
		
	if(key){
		plus = 1 / plus;
		key = false;
	}
	
	result = roll();
	document.getElementById('result').innerHTML = result;
	total++;
	document.getElementById("res"+result).innerHTML++;
	
	if(maxim < 40){
		quant = document.getElementById("res"+result).innerHTML / total * 90;
		document.getElementById("yes"+result).width = quant+"%";
		quant = 90 - quant;
		document.getElementById("no"+result).width = quant+"%";
		
		for(i = 1; i<= maxim; i++){
			quant = document.getElementById("res"+i).innerHTML / total * 90;
			document.getElementById("yes"+i).width = quant+"%";
			quant = 90 - quant;
			document.getElementById("no"+i).width = quant+"%";
		}
	}
	
	if(vel > stop){
		document.getElementById('dice').style.backgroundColor = "#070";
		document.getElementById('dice').style.borderColor = "#090";
	}
	else
		setTimeout('main()',vel);
}

function roll(){
	//playSound();
	return Math.ceil(Math.random() * maxim);
}
 

function KeyCheck(){
	if(plus < 1)
		key = true;
}

function playSound() {
	var obj = document.createElement("object");
	obj.width= "0px";
	obj.height= "0px";
	obj.type = "audio/x-wav";
	obj.data = sound;
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(obj);
}
