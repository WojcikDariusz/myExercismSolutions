export var twoFer = (name) => {
	if (name == '') {
		return('One for you, one for me.');
	} else if (typeof name == "string" && name != "") {
		var text = 'One for ' + name + ', one for me.'; 
		return text;	
	}
};
