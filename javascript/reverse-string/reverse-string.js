export var reverseString = (actual) => {

	var reversed = "";
	
	for (var i = actual.length-1; i >= 0; i--) {
		reversed += actual.charAt(i);
	}

	return reversed;
};
