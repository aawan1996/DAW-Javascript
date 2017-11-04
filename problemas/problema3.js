var hora = prompt("Hora: ");
var minuts = prompt("minuts: ");
var segons = prompt("segons: ");



if (hora <= 22) {
	if (minuts == 59 && segons == 59) {
		hora++;
		minuts = 00;
		segons = 00;
	}else if (minuts == 59 && segons <= 59){
		segons++;
	}
	else if (minuts <= 59 && segons == 59) {
		minuts++;
		segons = 00;
	}else if (minuts <= 58 && segons <= 58) {
		segons++;
	}
}else if (hora == 23) {
	if (minuts == 59 && segons == 59) {
		hora=00;
		minuts=00;
		segons=00;
	}else if (minuts == 59 && segons <= 59) {
		segons++;
	}else if (minuts <= 58 && segons == 59) {
		minuts++;
		segons=00;
	}else if (minuts <= 58 && segons <= 58) {
		segons++;
	}
}
console.log(""+hora+":"+minuts+":"+segons);