const palindromes = function (string) {
	
	string = string.toLowerCase();
	string = string.replaceAll(/[^a-z]/g, '');
	return (string == string.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
