var maxim;
var vel;
var plus;
var stop = 1500;
var finished = false;
var minim = 2;
var results = new Array();
var tirada = 0;

function onLoad(max, tirades){
	deleteHint();
	document.onkeyup = KeyCheck;
	
	if(max <= 0) return;
	
	maxim = max;

	
	var sense_repetir = max >= tirades;
	
	var value;
	for(var i = 0; i < tirades; ){
		value = roll();
		if(sense_repetir){
			var trobat = false;
			for(var j in results) {
				if(results[j] == value){
					trobat = true;
					break;
				}
			}
			if(!trobat){
				results.push(value);
				i++;
			}
		} else{
			results.push(value);
			i++;
		}
	}
	document.getElementById('results').innerHTML = results.join(';') ;
	tirar();
}

function tirar(){
	finished = false;
	document.getElementById("dice").setAttribute("class", "");
	vel = 1000.1;
	plus = 0.75;
	deleteHint();
	main();
}


function main(){
	vel = vel * plus;
	
	if(vel < minim){
		setHint('Premeu una tecla per parar el dau');
		vel = 2;
	}
	
	if(vel > stop){
		document.getElementById('result').innerHTML = results[tirada];
		document.getElementById("dice").setAttribute("class", "finished");
		finished = true;
		if(tirada+1 < results.length)
			setHint('Felicitats! Premeu una tecla per tornar a tirar');
		else
			setHint('Felicitats! S\'ha acabat el sorteig');
	}
	else{
		document.getElementById('result').innerHTML = roll();
		setTimeout('main()',vel);
	}
}
 

function KeyCheck(event){
	if(finished){
		tirada++;
		if(tirada < results.length)
			tirar();
	} else {
		//Canviem la velocitat per parar
		if(plus < 1) plus = 1 / plus;
		deleteHint();
	}
	return false;
}

function roll(){
	return Math.ceil(Math.random() * maxim);
}


function setHint(text){
	document.getElementById("hint").style.visibility ='visible';
	document.getElementById('hint').innerHTML = text;
}

function deleteHint(){
	document.getElementById("hint").style.visibility ='hidden';
	document.getElementById('hint').innerHTML = '.';
}
