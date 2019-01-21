export var validate = function(input) {
	
	//Tranf. input number to string and def. power
	var inputString = input.toString();
	var power = inputString.length;
	var sum = 0;

	//Transf. of string to int 
	//Calculation step
	for (var i = 0; i < power; i++) {
	
		var char = inputString.charAt(i);
		var num = parseInt(char,10);
		var value = Math.pow(num,power);

		sum += value;
	}

	//Verification
	if ( sum === input) {
		return true;
	} else {
		return false;
	}
}